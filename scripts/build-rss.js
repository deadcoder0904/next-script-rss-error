// import fs from 'fs'
// import path from 'path'
// import ReactDOMServer from 'react-dom/server'
// // import { MDXProvider } from '@mdx-js/react'
// import { Feed } from 'feed'

// import { MDXComponents } from '@/components/mdx/index'
// import { getAllEssays, getAllTutorials } from '@/utils/mdx'
// import { authors } from '@/_data/index'

// const siteUrl = 'https://akshaykadam.com'
// console.log(authors.map((author) => ({ link: author.twitter, ...author })))
// const feed = new Feed({
// 	title: 'Akshay Kadam',
// 	description: 'Posts about Startups, Entrepreneurship, SaaS, Tech & much more.',
// 	id: siteUrl,
// 	link: siteUrl,
// 	language: 'en',
// 	image: `${siteUrl}/favicon-32x32.png`,
// 	favicon: `${siteUrl}/favicon.ico`,
// 	copyright: `All rights reserved ${new Date().getFullYear()}, Akshay Kadam`,
// 	feedLinks: {
// 		json: `${siteUrl}/json`,
// 		atom: `${siteUrl}/atom`,
// 	},
// 	author: authors.map((author) => ({ link: author.twitter, ...author })),
// })

// const posts = [...getAllEssays(), ...getAllTutorials()]
// console.log({ posts })
/**
posts.forEach(({ slug }) => {
	// const mdx = <MDXProvider components={MDXComponents}>{ <Content /> }</MDXProvider>
	const html = ReactDOMServer.renderToStaticMarkup(mdx)
	console.log(html)
	const postText = `<div style="margin-top=55px; font-style: italic;">(The post <a href="${siteUrl}/${slug}">${meta.title}</a> appeared first on <a href="${siteUrl}">Akshay Kadam's Blog</a>.)</div>`
	feed.addItem({
		title: meta.title,
		id: meta.title,
		link: slug,
		comments: meta.discussion,
		description: meta.description,
		content: html + postText,
		author,
		date: new Date(meta.date),
		image: siteUrl + meta.image,
		extensions: [
			{
				name: '_comments',
				objects: {
					about: 'link to discussions forum',
					comments: meta.discussion,
				},
			},
		],
	})
})
console.log(feed.rss2())
fs.writeFileSync('./public/feed.xml', feed.rss2())
fs.writeFileSync('./public/atom.xml', feed.atom1())
fs.writeFileSync('./public/feed.json', feed.json1())
*/
