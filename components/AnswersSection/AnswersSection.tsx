import React from 'react';
import Title from '../Title/Title';
import styles from './AnswersSection.module.scss';
import Accordeon from '../Accordeon/Accordeon';

interface Props {
	className?: string;
	
}

export const AnswersSection: React.FC<Props> = ({ className }) => {
	return (
		<section className={styles.section}>
			<div className={styles.section__title}>
				<Title tag='h1' color='black'>Ответы на самые частые вопросы</Title>
				<div className={styles.line}/>
			</div>
			<Accordeon />
		</section>
	);
};

export default AnswersSection;