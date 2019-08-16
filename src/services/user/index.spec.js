import axios from 'axios'
import { searchUser } from "./index";

jest.mock('axios')

describe('Services', () => {

  it('Request to search user with passed param', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {result: 'data'}
      })
    )

    const serviceResult = await searchUser('test')

    expect(serviceResult).toEqual({data: {result: 'data'}})

    expect(axios.get).toHaveBeenCalledTimes(1)
  })
})
