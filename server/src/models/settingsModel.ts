import { model, Schema } from "mongoose";

const settingSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  total: {
    type: Number,
    default: 0,
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
});
export type Setting = ReturnType<() => typeof settingSchema>
const SettingsModel = model("Settings", settingSchema);
