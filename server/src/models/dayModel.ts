import { model, Schema } from "mongoose";

export const daySchema = new Schema ({
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

const DayModel = model('day' , daySchema)