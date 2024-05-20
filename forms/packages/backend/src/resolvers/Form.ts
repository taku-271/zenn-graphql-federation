import { form as formType } from "@prisma/client";
import type { FormResolvers } from "./../generated/types.generated";
export const Form: FormResolvers = {
  /* Implement Form resolver logic here */
  async __resolveReference(_arg, _ctx) {
    const form = await _ctx.prisma.form.findFirstOrThrow({
      where: { projectId: _arg.id },
    });

    return convertForm(form);
  },
};

const convertForm = (form: formType) => ({
  id: form.id,
  name: form.name,
});
