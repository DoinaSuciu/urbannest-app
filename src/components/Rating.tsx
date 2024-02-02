import { memo, useState } from 'react'
import classes from './Rating.module.scss'

const Rating = memo(function Rating({
  selectedRating,
  isSelectingRating = false
}: {
  selectedRating: number
  isSelectingRating?: boolean
}) {
  const [rating, setRating] = useState<number>(selectedRating)
  const [hover, setHover] = useState<number | null>(null)
  const [totalStars] = useState(5)

  return (
    <div className={classes['change-rating-container']}>
      {[...Array(totalStars)].map((star, index) => {
        const currentRating = index + 1

        return (
          <label key={index}>
            {isSelectingRating && (
              <div>
                <input
                  key={star}
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onChange={() => setRating(currentRating)}
                />
                <span
                  className={classes.star}
                  style={{
                    color: currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'
                  }}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                >
                  &#9733;
                </span>
              </div>
            )}
            {!isSelectingRating && (
              <div>
                <span
                  className={classes.star}
                  style={{
                    color: currentRating <= rating ? '#ffc107' : '#e4e5e9'
                  }}
                >
                  &#9733;
                </span>
              </div>
            )}
          </label>
        )
      })}
    </div>
  )
})

export default Rating
