import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import faker from 'faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

// 1. Os parametros que receber tem que chamar o axios com para corretos
describe('AxiosHttpClient', () => {
  test('Should call axios if correct url', async () => {
    const url = faker.internet.url()
    const sut = new AxiosHttpClient()
    await sut.post({
      url
    })
    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
