// import { Schema, model, connect } from "mongoose";

export type Company_overview = {
  name: string;
  description: string;
  missionState: string;
  visionStatement: string;
};

export type Contact = {
  email: string;
  phone: string;
  address: string;
};

//team-member
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
};
//storeLocation
export type StoreLocation = {
  name: string;
  address: string;
  phone: string;
  hours: string;
};
export type Aboute = {
  id: string;

  company: Company_overview;

  contact: Contact;

  team: TeamMember;

  storeLocations: StoreLocation;
};
