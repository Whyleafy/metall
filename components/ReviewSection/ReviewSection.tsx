'use client';

import React from 'react';
import styles from './ReviewSection.module.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { Button, Review, Title } from '@/components';
import { mockReviews } from './mock-reviews';

interface Props {
  className?: string;
}

export const ReviewSection: React.FC<Props> = ({ className }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 1.2, spacing: 20 },
      },
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 2, spacing: 20 },
      },
    },
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!confirm("Перейти в Яндекс Карты?")) {
      e.preventDefault();
    }
  };

  return (
    <section className={styles.section}>
      <Title tag="h2" color="black">
        Отзывы о нашем пункте приема
      </Title>
      <p className={styles.subtitle}>
        Узнайте мнение других о работе пункта и как мы принимаем металлолом
      </p>

      <div className={styles.sliderWrapper}>
        <div ref={sliderRef} className="keen-slider">
          {mockReviews.map((review) => (
            <div className="keen-slider__slide" key={review.id}>
              <Review review={review} />
            </div>
          ))}
        </div>

		<button onClick={() => instanceRef.current && instanceRef.current.prev()} className={`${styles.arrow} ${styles.prev}`} aria-label="Предыдущий слайд">
				<span>{`<`}</span>
		</button>
		<button onClick={() => instanceRef.current && instanceRef.current.next()}  className={`${styles.arrow} ${styles.next}`} aria-label="Следующий слайд">
			<span>{`>`}</span>
		</button>
      </div>

      <Button
        as="link"
        variant="outline"
        onClick={handleClick}
        href="https://yandex.ru/maps/..."
      >
        Посмотреть все отзывы
      </Button>
    </section>
  );
};

export default ReviewSection;
