export default {
  title: "Projects",
  name: "projects",
  type: "document",
  fields: [
    {
      title: "project name",
      name: "project_name",
      type: "string",
    },
    {
      title: "project description",
      name: "project_description",
      type: "text",
    },
    {
      title: "github URL",
      name: "githubUrl",
      type: "url",
    },
    {
      title: "demo URL",
      name: "demoUrl",
      type: "url",
    },
    {
      title: "Thumbnail",
      name: "thumbnail",
      type: "image",
    },
    {
      title: "order",
      name: "order",
      type: "number",
    },
  ],
}
