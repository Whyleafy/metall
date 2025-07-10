import { Star } from "lucide-react";
import styles from "./Review.module.scss";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
  position?: string;
}

interface ReviewCardProps {
  review: Review;
}

export const Review = ({ review }: ReviewCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__body}>
        <div className={styles.card__header}>
          <div className={styles.card__avatar}>
            {review.name.charAt(0)}
          </div>
          <div>
            <h4 className={styles.card__name}>{review.name}</h4>
          </div>
        </div>

        <div className={styles.card__rating}>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`${styles.card__star} ${
                i < review.rating ? styles.card__star_active : ""
              }`}
            />
          ))}
          <span className={styles.card__score}>
            {review.rating}/5
          </span>
        </div>

        <p className={styles.card__comment}>
          "{review.comment}"
        </p>
      </div>
    </div>
  );
};
