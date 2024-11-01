"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
const userValidationSchema = zod_1.z.object({
    id: zod_1.z.string(),
    password: zod_1.z
        .string({ invalid_type_error: "Name must be a string" })
        .max(20, { message: "password can not be 20 character" })
        .optional(),
    //   needsPasswordChange: z.boolean().optional().default(true),
    //   role: z.enum(["admin", "user"]),
    //   status: z.enum(["in-progress", "blocked"]).default("in-progress"),
    //   isDeleted: z.boolean().optional().default(false),
});
exports.userValidation = {
    userValidationSchema,
};
