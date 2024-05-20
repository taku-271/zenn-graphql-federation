import { form as formType } from "@prisma/client";
import type { QueryResolvers } from "./../../generated/types.generated";
export const form: NonNullable<QueryResolvers['form']> = async (
  _parent,
  _arg,
  _ctx
) => {
  /* Implement Query.form resolver logic here */
  const form = await _ctx.prisma.form.findFirstOrThrow({
    where: { id: _arg.id },
  });

  return convertForm(form);
};

const convertForm = (form: formType) => ({
  id: form.id,
  name: form.name,
});
