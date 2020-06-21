import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import HotelsFilter from '../../components/ui/hotels/hotels-filter'
import Select from '../../components/ui/select'

describe('Hotel components filter test', () => {
  let props
  beforeEach(() => {
    props = {
      id: 0,
      length: 10,
      setLength: () => {},
      options: [{ value: 'test', label: 'test' }],
      filters: [{ value: 'test', label: 'test' }],
      setFilters: () => {},
    }
  })
  test('Should not break if no params passed', () => {
    const component = renderer.create(<HotelsFilter />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Should render HotelsFilter correctly', () => {
    const { id, length, setLength, options, filters, setFilters } = props
    const component = renderer.create(
      <HotelsFilter
        id={id}
        length={length}
        setLength={setLength}
        options={options}
        filters={filters}
        setFilters={setFilters}
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Should not render region select if no options passed', () => {
    const { id, length, setLength } = props
    const component = mount(
      <HotelsFilter id={id} length={length} setLength={setLength} />
    )
    expect(component.contains(<Select />)).toBe(false)
  })
})
