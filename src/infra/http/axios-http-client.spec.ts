import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import faker from 'faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

// Factory return other class instance
const makeSut = (): AxiosHttpClient => {
  const sut = new AxiosHttpClient()
  return sut
}

// 1. Os parametros que receber tem que chamar o axios com para corretos
describe('AxiosHttpClient', () => {
  test('Should call axios if correct url and verb', async () => {
    const url = faker.internet.url()
    const sut = makeSut()
    await sut.post({
      url
    })
    expect(mockedAxios.post).toHaveBeenCalledWith(url)
  })
})
