import { z } from "zod";

export const registerFormSchema = z.object({
  email: z.string().min(10).max(50).email(),
  password: z.string().min(6).max(50),
  confirmPassword: z.string().min(6).max(50),
});
