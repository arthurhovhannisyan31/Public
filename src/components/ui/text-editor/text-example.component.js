import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import {
  CompositeDecorator,
  convertFromRaw,
  Editor,
  EditorState
  // eslint-disable-next-line import/no-unresolved
} from 'draft-js';
import { markdownToDraft } from 'markdown-draft-js';

import Link from './Link.component';
import './text-editor.component.scss';

const findLinkEntities = (contentBlock, callBack, contentState) => {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === 'LINK'
    );
  }, callBack);
};

const decorator = new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: Link
  }
]);

const TextExample = ({ ...props }) => {
  const { initialValue, reset } = props;

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const rawObject = markdownToDraft(initialValue, {
      remarkablePreset: 'full',
      blockStyles: {
        ins_open: 'UNDERLINE'
      },
      remarkableOptions: {
        enable: {
          inline: 'ins'
        }
      }
    });
    const rawContentState = convertFromRaw(rawObject);

    const newEditorState = EditorState.createWithContent(
      rawContentState,
      decorator
    );
    setEditorState(newEditorState);
  }, [initialValue, reset]);

  return (
    <>
      <div className="text-example">
        <Editor editorState={editorState} onChange={null} readOnly />
      </div>
    </>
  );
};

export default TextExample;
