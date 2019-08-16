import { shallowMount } from '@vue/test-utils'
import GFBtn from '.'

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(GFBtn, {
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

describe('Atom - GF Link', () => {
  test('Is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })
  test('Color should be a valid name', () => {
    expect(wrapper.props().color).toBe('green')
  })
  test('Clicking emit a event', () => {
    wrapper.find('v-btn').trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
