import { UserInfo } from '../../../interfaces/user-options';

export interface ListWithMembers{
    Creator: string,
    Desc: string,
    ID: string,
    Members?: UserInfo[]
}