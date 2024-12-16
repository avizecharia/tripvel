import { model, Schema } from "mongoose";

export const constSchema = new Schema ({
    description:String,
    amount:Number,

},{timestamps:true}
)
const ConstModel = model('Const' , constSchema)