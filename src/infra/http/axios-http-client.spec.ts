import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import faker from 'faker'
import { HttpPostParams } from '@/data/protocols/http'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

// Factory return other class instance
const makeSut = (): AxiosHttpClient => {
  const sut = new AxiosHttpClient()
  return sut
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

// 1. Os parametros que receber tem que chamar o axios com para corretos
describe('AxiosHttpClient', () => {
  test('Should call axios with correct url and verb', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url)
  })
})
