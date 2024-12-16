import { model, Schema } from "mongoose";

const constSchema = new Schema ({
    description:String,
    amount:Number,

},{timestamps:true}
)
export type Const = ReturnType<() => typeof constSchema>
const ConstModel = model('Const' , constSchema)