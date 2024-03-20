import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkStringify from 'remark-stringify'
import {readSync} from 'to-vfile'
import {unified} from 'unified'
import {matter} from 'vfile-matter'

import { writeFileSync } from 'fs';

const contentFile = readSync('src/blog.md')

const parsedContent = await unified()
  .use(remarkParse)
  .use(remarkStringify)
  .use(remarkFrontmatter)
  .use( () => (tree, file) => matter(file))
  .process(contentFile)

const matterWithContent = { metadata: parsedContent.data.matter, content: parsedContent.value }

const DEBUG = false;

if (DEBUG) {
  console.log(matterWithContent)
}

writeFileSync('src/blog.json', JSON.stringify(matterWithContent, null, 2), 'utf8')