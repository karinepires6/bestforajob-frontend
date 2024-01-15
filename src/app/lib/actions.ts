"use client";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { useCreateCandidate } from "./queries/candidate";

const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  skills: z.array(z.string()),
});

const CreateCandidate = FormSchema.omit({ id: true });

export async function createCandidate(formData: FormData) {
  const regex = /^skill-\d+$/;
  const candidate: any = { skills: [] };
  formData.forEach((value, key) => {
    if (key.match(regex)) {
      candidate.skills.push(value);
    } else {
      candidate[key] = value;
    }
  });

  return candidate;
}
