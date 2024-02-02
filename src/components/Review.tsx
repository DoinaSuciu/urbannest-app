import { memo } from 'react'
import Rating from './Rating'
import classes from './Review.module.scss'

export interface ReviewProps {
  name: string
  comment: string
  rating: number
}

const Review = memo(function Review({ name, comment, rating }: ReviewProps) {
  return (
    <div className={classes.review}>
      <span>{name}</span>
      <Rating selectedRating={rating} />
      <p>{comment}</p>
    </div>
  )
})

export default Review
