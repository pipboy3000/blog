import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Post {
  slug: string
  content: string
  title: string
	date: string
	uri: string
	meta: { [key: string]: any}
	alert?: string
}

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export function getPostPaths() {
  const allDirents = fs.readdirSync(postsDirectory, { withFileTypes: true });
  return allDirents
		.filter(dirent => dirent.isFile())
		.map(({ name }) => name);
}

export function getYMDSlugFromFilename(filename: string) {
	const [year, month, day, ...slug] = filename.split('-')
	return [year, month, day, slug.join('-')]
}

export function getPostByPostPath(postPath: string) {
	const filePath = path.join(postsDirectory, postPath)
	const fileContents = fs.readFileSync(filePath, 'utf8')
	const { data:meta, content } = matter(fileContents)

	const [year, month, day, ...rest] = postPath.split('-')
	const slug = rest.join('-').replace('.md', '')
	const date = `${year}-${month}-${day}`
	const uri = `/${date.replace(/-/g, '/')}/${slug}`
	const title = meta.title
	const alert = meta.alert || ''

	const post: Post = {
		slug, date, uri, title, content, meta, alert
	}

	return post
}

export function getAllPosts() {
	return getPostPaths()
		.map((path) => getPostByPostPath(path))
		.sort((a, b) => (a.date > b.date ? -1 : 1))
}