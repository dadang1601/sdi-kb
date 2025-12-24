import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",

  clientId: process.env.TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,

  build: {
    publicFolder: "static",
    outputFolder: "admin",
  },

  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "static",
    },
  },

  schema: {
    collections: [
      {
        name: "docs",
        label: "Documentation V1",
        path: "docs",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
        ],
      },
    ],
  },
});
