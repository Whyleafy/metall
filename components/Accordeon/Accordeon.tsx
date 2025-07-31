'use client'

import React, { useState } from 'react';
import { answers } from './constants';
import styles from './Accordeon.module.scss'
import Title from '../Title/Title';

interface Props {
	className?: string;
}

export const Accordeon: React.FC<Props> = ({ className }) => {
	const [selected, setSelected] = useState<number | null>(null);

	const toggle = (i: number) => {
		setSelected(selected === i ? null : i);
	};

	return (
		<div className={styles.accordeon}>
			{answers.map((item, i) => (
				<div key={i} className={styles.item}>
					<div className={styles.title} onClick={() => toggle(i)}>
						<Title tag='h3' color='black'>{item.question}</Title>
						<span>{selected === i ? `-` : `+`}</span>
					</div>
					<div className={`${styles.item__content} ${selected === i ? styles['item__content--show'] : ''}`}>
						{item.answer}
					</div>
				</div>
			))}
		</div>
	);
};

export default Accordeon;
