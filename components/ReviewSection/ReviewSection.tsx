import React from 'react';
import styles from "./ReviewSection.module.scss";
import { Button, Title } from "@/components"

interface Props {
	className?: string;
	// Добавьте другие пропсы здесь
}

export const ReviewSection: React.FC<Props> = ({ className }) => {
	
	const handeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (!confirm("Перейти на другую страницу?")) {
			e.preventDefault();
		}
	}
	return (
		<section className={styles.section}>
			<Title tag='h2' color='black'>Отзывы о нашей конторе</Title>
			<p>Поставьте 5 звезд пожалуйста</p>
			<Button as='link' variant='outline' onClick={handeClick} href='https://yandex.ru/maps/217/pushino/?from=api-maps&ll=37.609159%2C54.828246&mode=poi&origin=jsapi_2_1_79&poi%5Bpoint%5D=37.609032%2C54.828248&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D14133031537&tab=reviews&z=19.52'>Посмотреть все отзывы</Button>
		</section>
	);
};

export default ReviewSection;