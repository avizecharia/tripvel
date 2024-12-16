import { NextFunction, Request, Response } from "express";

export const updateSetting = async (req:Request , res : Response , next:NextFunction) =>{
    try {
        
    } catch (err) {
        console.error("Can't update setting" ,err)
        next(err)
    }
}
export const getSetting = async (req:Request , res : Response , next:NextFunction) =>{
    try {
        
    } catch (err) {
        console.error("Can't get setting" ,err)
        next(err)
    }
}