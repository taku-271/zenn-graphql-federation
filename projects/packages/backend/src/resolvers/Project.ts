import type { ProjectResolvers } from "./../generated/types.generated";
export const Project: ProjectResolvers = {
  /* Implement Project resolver logic here */
  async forms(project, args, ctx) {
    const formIds = await ctx.prisma.form.findMany({
      where: {
        projectId: project.id,
      },
      select: {
        id: true,
      },
    });

    return formIds.map((formId) => ({ __typename: "Form", id: formId.id }));
  },
};
