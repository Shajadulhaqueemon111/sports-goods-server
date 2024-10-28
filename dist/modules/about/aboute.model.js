"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutModel = void 0;
const mongoose_1 = require("mongoose");
const CompanySchema = new mongoose_1.Schema({
    name: { type: String },
    description: { type: String },
    missionState: { type: String },
    visionStatement: { type: String },
});
const ContactSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
});
const TeamMemberSchema = new mongoose_1.Schema({
    name: { type: String },
    role: { type: String },
    bio: { type: String },
});
const StoreLocationSchema = new mongoose_1.Schema({
    name: { type: String },
    address: { type: String },
    phone: { type: String },
    hours: { type: String },
});
const AbouteSchema = new mongoose_1.Schema({
    id: { type: String },
    company: CompanySchema,
    contact: ContactSchema,
    team: TeamMemberSchema,
    storeLocations: StoreLocationSchema,
});
//model
exports.AboutModel = (0, mongoose_1.model)("Aboute_details", AbouteSchema);
