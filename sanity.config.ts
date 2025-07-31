import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/schemaTypes";

export default defineConfig({
  name: "mammoth-american-tattoo",
  title: "Mammoth American Tattoo",
  projectId: "i8y9tpei",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
