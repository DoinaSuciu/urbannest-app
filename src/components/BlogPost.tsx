import { FC } from 'react'
import { Link } from 'react-router-dom'
import classes from './BlogPost.module.scss'
import AdminIcon from '../components/BlogIcons/AdminIcon'
import TagIcon from '../components/BlogIcons/TagIcon'
import CalendarIcon from '../components/BlogIcons/CalendarIcon'

interface BlogPostProps {
  title: string
  description: string
  image: string
  date: string
  category: string
  writer: string
  id: string
}

const BlogPost: FC<BlogPostProps> = ({
  title,
  description,
  image,
  date,
  category,
  writer,
  id
}) => (
  <div className={classes.blogPost}>
    <img src={image} alt={title} />
    <div className={classes.shortDescription}>
      <div className={classes.descriptionContainer}>
        <AdminIcon />
        <span>{writer}</span>
      </div>

      <div className={classes.descriptionContainer}>
        <TagIcon />
        <span>{date}</span>
      </div>

      <div className={classes.descriptionContainer}>
        <CalendarIcon />
        <span>{category}</span>
      </div>
    </div>
    <h1>{title}</h1>
    <p>{description}</p>
    <Link to={`${id}`}>Read more</Link>
  </div>
)

export default BlogPost
