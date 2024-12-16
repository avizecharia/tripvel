import { connect } from "mongoose"
import { SettingsModel } from "../models/settingsModel"
import { createSid } from "../services/settings.service"



export const connectToMongo = async () => {
    try {
        await connect('mongodb://localhost/tripvel')
        console.log('[database] mongo successfully connected')
        const settings = await SettingsModel.findOne()
        if(!settings){
           await createSid()
           console.log('[database] sid create')
        }
    } catch (err) {
        console.error(err)
    }
}