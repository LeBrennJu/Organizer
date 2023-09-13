import { UserDocument } from "./user/schemas/user.schema"

export class ResponseInterface {
    message :string
    status : number
}

export class ResponseSuccessInterface extends ResponseInterface{
    data? : any //  Document | Document[]
}

export class ResponseErrorInterface extends ResponseInterface{
    error?: boolean
}