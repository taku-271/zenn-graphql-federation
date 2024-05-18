import { project as projectType } from "@prisma/client";
import type { QueryResolvers } from "./../../generated/types.generated";
export const projects: NonNullable<QueryResolvers["projects"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  /* Implement Query.projects resolver logic here */
  const projects = await _ctx.prisma.project.findMany();

  return projects.map((project) => convertProject(project));
};

const convertProject = (project: projectType) => ({
  id: project.id,
  name: project.name,
});
