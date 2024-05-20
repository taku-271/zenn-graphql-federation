import { project as projectType } from "@prisma/client";
import type { QueryResolvers } from "./../../generated/types.generated";
export const project: NonNullable<QueryResolvers['project']> = async (
  _parent,
  _arg,
  _ctx
) => {
  /* Implement Query.project resolver logic here */
  const project = await _ctx.prisma.project.findFirstOrThrow({
    where: { id: _arg.id },
  });

  return convertProject(project);
};

const convertProject = (project: projectType) => ({
  id: project.id,
  name: project.name,
});
