import { getAllPosts } from './api'
import { Feed } from 'feed'

const author = {
	name: process.env.NAME,
	email: process.env.EMAIL,
	link: `${process.env.HOST}/about`
}

const feed = new Feed({
  title: process.env.HOSTNAME || '',
  description: "This is my personal blog feed",
  id: process.env.HOST || '',
  link: process.env.HOST || '',
	language: 'ja',
	generator: 'カウントゼロフィードジェネレーター',
  image: `${process.env.HOST}/image.png`,
  favicon: `${process.env.HOST}/favicon.ico`,
  copyright: process.env.COPYWRIGHT || '',
  feedLinks: {
    atom: `${process.env.HOST}/feed`
  },
  author
});


const generateFeedXml = () => {
	const posts = getAllPosts().slice(0, 10)
	posts.forEach((post) => {
		feed.addItem({
			title: post.title,
			id: post.uri,
			link: post.uri,
			content: post.content,
			date: new Date(post.date),
			author: [ author ]
		})	
	})

	return feed.atom1()
}

export default generateFeedXml