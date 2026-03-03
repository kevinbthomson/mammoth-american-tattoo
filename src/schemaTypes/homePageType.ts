import { defineField, defineType } from 'sanity';

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'aboutTitle',
      type: 'string',
      title: 'About Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutText',
      type: 'text',
      title: 'About Text',
      validation: (rule) => rule.required(),
    }),
  ],
});
