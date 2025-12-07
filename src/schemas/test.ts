import { z } from "zod";

export const testSchema = z.object({
  name: z.string().min(3, { error: "Insira um nome válido." }),
  companyName: z.string().min(3, { error: "Insira um nome de loja válido." }),
  email: z.email({ error: "Insira um email." }),
  phone: z
    .string({ error: "Insira um telefone válido." })
    .min(11, { error: "O número de telefone deve ter mais de 11 digitos" }),
  password: z
    .string({ error: "Insira uma senha" })
    .min(6, { error: "A senha deve ter no minimo 6 digitos." }),
  confirmPassword: z
    .string({ error: "Insira uma senha" })
    .min(6, { error: "A confirmação de senha deve ter no minimo 6 digitos." }),
});

export type Test = z.infer<typeof testSchema>;
