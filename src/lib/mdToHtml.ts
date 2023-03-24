import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';

const mdToHtml = async (markdown: string) => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeSanitize, {
      ...defaultSchema,
      attributes: {
        ...defaultSchema.attributes,
        span: [
          ...(defaultSchema.attributes?.span || []),
          [
            'className',
            'hljs-addition',
            'hljs-attr',
            'hljs-attribute',
            'hljs-built_in',
            'hljs-bullet',
            'hljs-char',
            'hljs-code',
            'hljs-comment',
            'hljs-deletion',
            'hljs-doctag',
            'hljs-emphasis',
            'hljs-formula',
            'hljs-keyword',
            'hljs-link',
            'hljs-literal',
            'hljs-meta',
            'hljs-name',
            'hljs-number',
            'hljs-operator',
            'hljs-params',
            'hljs-property',
            'hljs-punctuation',
            'hljs-quote',
            'hljs-regexp',
            'hljs-section',
            'hljs-selector-attr',
            'hljs-selector-class',
            'hljs-selector-id',
            'hljs-selector-pseudo',
            'hljs-selector-tag',
            'hljs-string',
            'hljs-strong',
            'hljs-subst',
            'hljs-symbol',
            'hljs-tag',
            'hljs-template-tag',
            'hljs-template-variable',
            'hljs-title',
            'hljs-type',
            'hljs-variable',
          ],
        ],
      },
    })
    .use(rehypeStringify)
    .process(markdown);
  return file.toString();
};

export default mdToHtml;
