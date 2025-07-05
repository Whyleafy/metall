'use client'

import React, { useEffect, useState } from 'react';
import styles from "./PriceSection.module.scss"
import { MetalTable, Title } from "@/components";
import { getMetals } from '@/app/actions';
import { MetalTableProps } from '@/types/metals';

interface Props {
	className?: string;
	// Добавьте другие пропсы здесь
}

export  const PriceSection: React.FC<Props> =  ({ className }) => {
	const [metals, setMetals] = useState([]);
	
	useEffect(() => {
		const fetchmetals = async () => {
			try {
				const response = await fetch("api/metals");
				
				if (!response.ok) {
          			throw new Error("Ошибка при получении данных");
        		}
				const data = await response.json();
				setMetals(data);
			} catch (error) {
				console.log(error)
			}
		};
		fetchmetals();
	}, [])
	
	return (
		<section className={styles.section}>
			<Title tag='h2' color='black' className={styles.section__title}>Актуальные расценки на металлы</Title>
			<p className={styles.section__p}>Цены обновляются ежедневно и могут изменяться в зависимости от качества металла</p>
			<MetalTable metals={metals} />
		</section>
	);
};

export default PriceSection;