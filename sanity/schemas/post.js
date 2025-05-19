export default {
  name: "post",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string"
    },
    {
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      }
    },
    {
      name: "excerpt",
      type: "text"
    },
    {
      name: "content",
      type: "array",
      of: [
        {
          type: "block"
        }
      ]
    },
    {
      name: "author",
      type: "reference",
      to: [
        {
          type: "author"
        }
      ]
    },
    {
      name: "publishedAt",
      type: "datetime"
    }
  ]
}