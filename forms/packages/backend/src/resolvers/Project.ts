import type { ProjectResolvers } from "./../generated/types.generated";
export const Project: ProjectResolvers = {
  /* Implement Project resolver logic here */
  forms(project, _arg, _ctx) {
    return _ctx.prisma.form.findMany({
      where: { projectId: project.id },
    });
  },
};
