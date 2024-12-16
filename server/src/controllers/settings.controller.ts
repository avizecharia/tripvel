import { NextFunction, Request, Response } from "express";
import { getSettings as get ,patchSettings  } from "../services/settings.service";

export const updateSetting = async (req:Request , res : Response , next:NextFunction) =>{
    try {
        res.json(await patchSettings(req.body))
    } catch (err) {
        console.error("Can't update setting" ,err)
        next(err)
    }
}
export const getSetting = async (req:Request , res : Response , next:NextFunction) =>{
    try {
       res.json( await get())
    } catch (err) {
        console.error("Can't get setting" ,err)
        next(err)
    }
}