import { Authentication } from '@/domain/usercases'
import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'

export class AuthenticationSpy implements Authentication {
  account = mockAccountModel()
  params: Authentication.Params
  async auth (params: Authentication.Params): Promise<AccountModel> {
    this.params = params
    return this.account
  }
}
