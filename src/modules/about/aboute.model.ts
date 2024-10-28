import { Schema, model } from "mongoose";
import {
  Aboute,
  Company_overview,
  Contact,
  StoreLocation,
  TeamMember,
} from "./about.interface";

const CompanySchema = new Schema<Company_overview>({
  name: { type: String },
  description: { type: String },
  missionState: { type: String },
  visionStatement: { type: String },
});

const ContactSchema = new Schema<Contact>({
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
});
const TeamMemberSchema = new Schema<TeamMember>({
  name: { type: String },
  role: { type: String },
  bio: { type: String },
});
const StoreLocationSchema = new Schema<StoreLocation>({
  name: { type: String },
  address: { type: String },
  phone: { type: String },
  hours: { type: String },
});
const AbouteSchema = new Schema<Aboute>({
  id: { type: String },

  company: CompanySchema,
  contact: ContactSchema,

  team: TeamMemberSchema,

  storeLocations: StoreLocationSchema,
});

//model
export const AboutModel = model<Aboute>("Aboute_details", AbouteSchema);
