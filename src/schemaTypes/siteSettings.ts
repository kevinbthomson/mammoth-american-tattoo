import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "siteDescription",
      title: "Site Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "Site URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
