import { AxiosHttpClient } from './axios-http-client'
import { mockedAxios as makeMockedAxios } from '../test'
import axios from 'axios'
import { mockPostRequest } from '@/data/test'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

// Factory return other class instance
const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = makeMockedAxios()
  return { sut, mockedAxios }
}

// 1. Os parametros que receber tem que chamar o axios com para corretos
describe('AxiosHttpClient', () => {
  test('Should call axios with correct url and values', async () => {
    const request = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
  test('Should return the correct statusCode and body', () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
