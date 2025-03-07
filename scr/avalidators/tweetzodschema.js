import { z } from 'zod';

export const tweetzodschema = z.object({
  body: z.string({
    required_error: "Tweet body is required",
    invalid_type_error: "Tweet body must be a string"
  }).min(1, "Tweet body cannot be empty")
    .max(280, "Tweet must be 280 characters or less")
});