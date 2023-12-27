import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './BlogPostPage.module.scss'
import AdminIcon from '../components/BlogIcons/AdminIcon'
import TagIcon from '../components/BlogIcons/TagIcon'
import CalendarIcon from '../components/BlogIcons/CalendarIcon'
import { BlogPosts } from '../state/blogPosts'
import { BlogType } from '../models/BlogType'

type BlogPostParams = {
  blogId: string
}

export default function BlogPostPage() {
  const { blogId } = useParams<BlogPostParams>()
  const [blogPost, setBlogPost] = useState<BlogType | null>(null)

  useEffect(() => {
    const blogPostData = BlogPosts.filter((post) => post.id === blogId)[0]
    setBlogPost(blogPostData)
  }, [blogId])

  console.log(blogId)
  console.log(blogPost)
  if (!blogPost) return <h1>There is no blog post with id {blogId}</h1>
  return (
    <div className={classes.blogPostPage}>
      <h1>{blogPost.title}</h1>
      <p className={classes.introduction}>{blogPost.description}</p>

      <div className={classes.shortDescription}>
        <div className={classes.descriptionContainer}>
          <AdminIcon />
          <span>{blogPost.writer}</span>
        </div>

        <div className={classes.descriptionContainer}>
          <TagIcon />
          <span>{blogPost.date}</span>
        </div>

        <div className={classes.descriptionContainer}>
          <CalendarIcon />
          <span>{blogPost.category}</span>
        </div>
      </div>
      <img src={blogPost.image} alt={blogPost.title} />
      <br />
      <p className={classes.content}>{blogPost.contentOne}</p>
      <br />
      <p className={classes.content}>{blogPost.contentTwo}</p>
      <br />
      <p className={classes.content}>{blogPost.contentThree}</p>
      <br />
      <br />
    </div>
  )
}
