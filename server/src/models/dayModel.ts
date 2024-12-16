import { model, Schema } from "mongoose";

const daySchema = new Schema ({
    date: {
    type: Date,
    default: Date.now,
  },
  accommodation: {
    type: Number,
    default: 0,
  },
  activities: {
    type: Number,
    default: 0,
  },
  shoping: {
    type: Number,
    default: 0,
  },
  food: {
    type: Number,
    default: 0,
  },
  other: {
    type: Number,
    default: 0,
  },
})
export type Day = ReturnType<() => typeof daySchema>

const DayModel = model('day' , daySchema)