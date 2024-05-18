import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config: CodegenConfig = {
  schema: "**/schema.graphql",
  generates: {
    "../backend/src/generated": defineConfig({
      resolverRelativeTargetDir: "../../backend/src/resolvers",
      typesPluginsConfig: {
        contextType: "../context#GraphqlContext",
        federation: true,
      },
    }),
  },
};

export default config;
