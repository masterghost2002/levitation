import { Request, Response } from "express";
import validateData from "./body.validation";
import ApiResponse from "../../../utils/api-response";
const POST = async (req:Request, res:Response)=>{
    const {name, email, password} = req.body;
    const parsedData = validateData.safeParse({name, email, password});
    if(!parsedData.success)
        return res.status(400).send(new ApiResponse({statusCode:400, message:"Invalid data", data:parsedData.error.errors}));
    try {
        
    } catch (error) {
        
    }

};
export default POST;