import React, { useEffect, useReducer } from 'react';
// eslint-disable-next-line import/no-unresolved
import {
  CompositeDecorator,
  convertFromRaw,
  convertToRaw,
  Editor,
  EditorState,
  RichUtils
  // eslint-disable-next-line import/no-unresolved
} from 'draft-js';
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

import Link from './Link.component';
import UrlInputModal from './urlInputModal.component';
// eslint-disable-next-line import/no-unresolved
import { validateText } from '../../../services/utils.service';
// eslint-disable-next-line import/no-unresolved
import { EditorB, EditorFile, EditorI, EditorLink, EditorU } from '../icons';
import './text-editor.component.scss';

/**
 * Выполняет поиск сущности LINK в contentBlock для замены на предоставленный компонент component: Link
 * для корректного рендеринга html кода в теле редактора текста
 * @param contentBlock - состояние блока, содержит текст блока, типы элементов, сущности
 * @param callBack - определяет индекс начала и конца совпадения в строке
 * @param contentState - состояние всех блоков редактора, в т.ч. состояние до и после рендеринга
 */
const findLinkEntities = (contentBlock, callBack, contentState) => {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === 'LINK'
    );
  }, callBack);
};

const textEditorReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'setEditorState':
      return {
        ...state,
        editorState: payload
      };
    case 'setShowURLInput':
      return {
        ...state,
        showURLInput: payload
      };
    case 'setURLValue':
      return {
        ...state,
        URLValue: payload
      };
    case 'setShowToolTip':
      return {
        ...state,
        showToolTip: payload
      };
    default:
      return state;
  }
};

/**
 * Экземпляр CompositeDecorator, сканирует каждый блок контента на наличие совпадений по
 * переданным стратегиям поиска, в случае совпадения заменяет участок совпадения на переданный компонент
 * @type {CompositeDraftDecorator}
 */
const decorator = new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: Link
  }
]);

const TextEditor = ({ defaultValue, onChange, regExp, lang, reset }) => {
  /**
   * Объекты сущностей, определяет символы для вхождения и закрытия
   * @type {{
   * ITALIC: {close: (function(): string), open: (function(): string)},
   * BOLD: {close: (function(): string), open: (function(): string)},
   * UNDERLINE: {close: (function(): string), open: (function(): string)}
   * }}
   */
  const styleItems = {
    ITALIC: {
      open: () => '*',
      close: () => '*'
    },
    BOLD: {
      open: () => '**',
      close: () => '**'
    },
    UNDERLINE: {
      open: () => '++',
      close: () => '++'
    }
  };

  /**
   * Инициализация editorState
   * @type {{showURLInput: boolean, showToolTip: boolean, editorState: *, URLValue: string}}
   */
  const initialState = {
    editorState: EditorState.createEmpty(),
    showURLInput: false,
    URLValue: '',
    showToolTip: false
  };

  const [state, dispatch] = useReducer(textEditorReducer, initialState);
  const { editorState, showURLInput, URLValue, showToolTip } = state;

  useEffect(() => {
    /**
     * Преобразует строку markdown к объекту формата RawDraftContentState
     * @type {{entityMap, blocks}}
     */
    const rawObject = markdownToDraft(defaultValue, {
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
    /**
     * Преобразует RawDraftContentState в ContentState
     * @type {*|ContentState}
     */
    const rawContentState = convertFromRaw(rawObject);
    /**
     * создает EditorState с учетом декораторов текста, например ссылки.
     * @type {EditorState}
     */
    const newEditorState = EditorState.createWithContent(
      rawContentState,
      decorator
    );
    dispatch({ type: 'setEditorState', payload: newEditorState });
  }, [defaultValue, reset]);

  const color = '#000000';
  const onURLChange = e =>
    dispatch({ type: 'setURLValue', payload: e.target.value });
  /**
   * Открывает модалку для добавления текста ссылки, в случае если в выделенном тексте ссылка
   * уже была выполняет ее удаление
   * @param e
   */
  const promptForLink = e => {
    e.preventDefault();
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      const contentState = editorState.getCurrentContent();
      const startKey = editorState.getSelection().getStartKey();
      const startOffset = editorState.getSelection().getStartOffset();
      const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
      const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);
      const url = '';
      if (linkKey) {
        // //remove link
        dispatch({
          type: 'setEditorState',
          payload: RichUtils.toggleLink(editorState, selection, null)
        });
        // // reserve for link correction
        // const linkInstance = contentState.getEntity(linkKey)
      } else {
        dispatch({ type: 'setShowURLInput', payload: true });
        dispatch({ type: 'setURLValue', payload: url });
      }
    }
  };
  /**
   * Создает сущность LINK и добавляет ее в editorState
   * @param e
   */
  const confirmLink = e => {
    e.preventDefault();
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'LINK',
      'MUTABLE',
      { url: `https://${URLValue}` }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity
    });
    dispatch({
      type: 'setEditorState',
      payload: RichUtils.toggleLink(
        newEditorState,
        newEditorState.getSelection(),
        entityKey
      )
    });
    dispatch({ type: 'setShowURLInput', payload: false });
    dispatch({ type: 'setURLValue', payload: '' });
  };
  /**
   * Подтверждение добавления ссылки нажатием enter
   * @param e
   */
  const onLinkInputKeyDown = e => {
    if (e.which === 13) {
      confirmLink(e);
    }
  };
  /**
   * Выполняет обработку нажатий клавиш клавиатуры например Ctrl + B для жирного
   * @param command - string (bold, italic, underline)
   * @param eState - состояние редактора
   * @returns {string}
   */
  const handleKeyCommand = (command, eState) => {
    const newState = RichUtils.handleKeyCommand(eState, command);
    if (newState) {
      dispatch({ type: 'setEditorState', payload: newState });
      return 'handled';
    }
    return 'not-handled';
  };
  /**
   * Выполняет проверку введенного или вставленного текста на соответствие регулярному
   * выражению ( в случае его наличи)
   * Добавляет ToolTip при попытке вводе недопустмого языка для поля
   * @param text - введенный или вставленный текст
   * @returns {string}
   */
  const handleBeforeInputOrPasteText = text => {
    if (regExp) {
      const result = validateText({ regExp, text });
      if (result) {
        dispatch({ type: 'setShowToolTip', payload: false });
      } else {
        dispatch({ type: 'setShowToolTip', payload: true });
      }
      return result ? 'not-handled' : 'handled';
    }
    return 'not-handled';
  };
  /**
   * Выполняется на каждом изменении, получении, потере фокуса поля редактора
   * Возвращает текущее состояние редактора в формате markdown
   * @param eState
   */
  const onStateChange = eState => {
    dispatch({ type: 'setEditorState', payload: eState });
    const text = convertToRaw(eState.getCurrentContent());
    const textMarkDown = draftToMarkdown(text, {
      styleItems,
      blockStyles: {
        ins_open: 'UNDERLINE'
      },
      remarkableOptions: {
        enable: {
          inline: 'ins'
        }
      }
    });
    if (onChange) onChange(textMarkDown);
  };
  /**
   * Выполняте обработку нажатия кнопок панели редактора
   */
  const onBoldClick = () =>
    dispatch({
      type: 'setEditorState',
      payload: RichUtils.toggleInlineStyle(editorState, 'BOLD')
    });

  const onItalicClick = () =>
    dispatch({
      type: 'setEditorState',
      payload: RichUtils.toggleInlineStyle(editorState, 'ITALIC')
    });

  const onUnderlineClick = () =>
    dispatch({
      type: 'setEditorState',
      payload: RichUtils.toggleInlineStyle(editorState, 'UNDERLINE')
    });
  /**
   * Выполняет сохрание состояния редактора при потере фокуса
   */
  const onBlur = () =>
    dispatch({
      type: 'setEditorState',
      payload: editorState
    });

  return (
    <>
      {showToolTip && (
        <ReactTooltip
          id={`text-editor-${lang}`}
          className={`toolTip ${lang}`}
          effect="solid"
          place="right"
          type="light"
          scrollHide
          resizeHide
          globalEventOff="click"
          disable={!showToolTip}
          offset={{ bottom: '-5px' }}
        >
          <span>Допустимый язык ввода: {lang}</span>
        </ReactTooltip>
      )}
      <div
        className="text-editor-default"
        // eslint-disable-next-line
        data-tip={true}
        data-for={`text-editor-${lang}`}
      >
        <UrlInputModal
          isOpen={showURLInput}
          handleCloseModal={() =>
            dispatch({ type: 'setShowURLInput', payload: false })
          }
          onURLChange={onURLChange}
          URLValue={URLValue}
          onLinkInputKeyDown={onLinkInputKeyDown}
          confirmLink={confirmLink}
        />
        <div className="text-editor-default-controls">
          <button type="button" onClick={() => onBoldClick()}>
            <EditorB color={color} />
          </button>
          <button type="button" onClick={() => onUnderlineClick()}>
            <EditorU color={color} />
          </button>
          <button type="button" onClick={() => onItalicClick()}>
            <EditorI color={color} />
          </button>
          <button type="button" onClick={promptForLink}>
            <EditorLink color={color} />
          </button>
          <button type="button">
            <EditorFile color={color} />
          </button>
        </div>
        <Editor
          editorState={editorState}
          onChange={onStateChange}
          onBlur={onBlur}
          handleKeyCommand={handleKeyCommand}
          handleBeforeInput={handleBeforeInputOrPasteText}
          handlePastedText={handleBeforeInputOrPasteText}
        />
        <span className="lang-title">{lang}: </span>
      </div>
    </>
  );
};

TextEditor.defaultProps = {
  defaultValue: null,
  regExp: null,
  lang: 'RUS',
  onChange: null,
  reset: null
};

TextEditor.propTypes = {
  defaultValue: PropTypes.string,
  regExp: PropTypes.instanceOf(RegExp),
  lang: PropTypes.string,
  onChange: PropTypes.func,
  reset: PropTypes.bool
};

export default TextEditor;
