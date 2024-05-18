import { form as formType } from "@prisma/client";
import type { QueryResolvers } from "./../../generated/types.generated";
export const forms: NonNullable<QueryResolvers["forms"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  /* Implement Query.forms resolver logic here */
  const forms = await _ctx.prisma.form.findMany();

  return forms.map((form) => convertForm(form));
};

const convertForm = (form: formType) => ({
  id: form.id,
  name: form.name,
});
