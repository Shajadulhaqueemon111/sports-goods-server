import { z } from "zod";

const userValidationSchema = z.object({
  id: z.string(),
  password: z
    .string({ invalid_type_error: "Name must be a string" })
    .max(20, { message: "password can not be 20 character" })
    .optional(),
  //   needsPasswordChange: z.boolean().optional().default(true),
  //   role: z.enum(["admin", "user"]),
  //   status: z.enum(["in-progress", "blocked"]).default("in-progress"),
  //   isDeleted: z.boolean().optional().default(false),
});

export const userValidation = {
  userValidationSchema,
};
