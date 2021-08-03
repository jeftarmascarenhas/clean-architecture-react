import { Authentication } from '@/domain/usercases'
import faker from 'faker'
import { AccountModel } from '../models'

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid()
})
