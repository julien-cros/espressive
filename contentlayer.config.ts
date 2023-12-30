import {
  defineDocumentType,
  makeSource,
} from "@contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string" },
    date: { type: "string" },
    cover: { type: "string" },
    excerpt: { type: "string" },
    createdAt: { type: "string" },
    updatedAt: { type: "string" },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/post/${post._raw.flattenedPath}`,
    },
	slug: {
		type: "string",
		resolve: (post) => post._raw.flattenedPath,
	},
  },
}));


export default makeSource({
	 contentDirPath: "posts",
 	 documentTypes: [Post],
});
