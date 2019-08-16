import { shallowMount } from '@vue/test-utils'
import GFChip from '.'

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(GFChip, {
    propsData: {
      color: 'green'
    },
    mocks: {},
    stubs: {},
    methods: {},
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Atom - GF Chip', () => {
  test('Is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })
  test('Color should be a valid name', () => {
    expect(wrapper.props().color).toBe('green')
  })
})
