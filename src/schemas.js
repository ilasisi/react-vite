import z from "zod";

export const ContactFormSchema = z.object({
    name: z
        .string()
        .min(3, "Name should not be less than 3 chars")
        .max(10, "Name should not be more than 10 chars"),
    email: z.email().min(1, "Email is required"),
    message: z.string().min(10, "Message should not be less than 10 chars"),
});
