import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight'
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';

const mdToHtml = async (markdown: string) => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
		.use(remarkRehype)
		.use(rehypeSanitize)
		.use(rehypeHighlight)
		.use(rehypeStringify)
    .process(markdown);
  return file.toString();
};

export default mdToHtml