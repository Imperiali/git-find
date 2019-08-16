import axios from "axios";
import {searchUserRepo} from "./index";

jest.mock('axios')

describe('Services', () => {

  it('Request to search user repository with passed param', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {result: 'data'}
      })
    )

    const serviceResult = await searchUserRepo('test')

    expect(serviceResult).toEqual({data: {result: 'data'}})

    expect(axios.get).toHaveBeenCalledTimes(1)
  })
})
