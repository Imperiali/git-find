import { shallowMount } from '@vue/test-utils'
import GFLink from '.'

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(GFLink, {
    propsData: {
      href: 'http://google.com',
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
  test('Href prop should be a link', () => {
    expect(wrapper.contains('a')).toBe(true)
    expect(wrapper.attributes().href).toBe('http://google.com')
  })
  test('Color should be a valid name', () => {
    expect(wrapper.props().color).toBe('green')
  })
})
