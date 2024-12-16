import { model, Schema } from "mongoose";

export const settingSchema = new Schema({
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
export const SettingsModel = model("Settings", settingSchema);
