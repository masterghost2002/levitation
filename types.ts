export type ApiResponseType = {
    statusCode:number;
    data:object;
    message?:string;
}
export interface User {
    name:string;
    email:string;
    hashedPassword:string;
    createdAt:string;
    updatedAt:string;
}