import { z } from 'zod';

const tweetSchema = z.object({
  body: z.union([
    z.string().min(1).max(280),
    z.array(z.string().min(1).max(280))
  ])
}).strict();

export const validate = (schema) => async (req, res, next) => {
  try {
    console.log('Incoming request body:', req.body);
    const validated = await schema.parseAsync(req.body);
    req.validatedBody = validated;
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      errors: error.errors
    });
  }
};

export { tweetSchema };