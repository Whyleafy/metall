'use client'

import React, { useEffect, useState } from 'react';
import styles from "./PriceSection.module.scss"
import { Button, MetalTable, Title } from "@/components";
import useMetalsByCategory from '@/Hooks/useMetalsByCategory';


interface Props {
	className?: string;
	// Добавьте другие пропсы здесь
}

export  const PriceSection: React.FC<Props> =  ({ className }) => {
	const metals = useMetalsByCategory("cmd0lpln400058z9t4487mk4n")
	
	return (
		<section className={styles.section}>
			
			<Title tag='h2' color='black' className={styles.section__title}>Актуальные расценки на металлы</Title>
			<p className={styles.section__p}>Цены обновляются ежедневно и могут изменяться в зависимости от качества металла</p>
			<MetalTable metals={metals} />
			<Button className={styles.section__button} as='link' href='/price-list' variant='outline'>Посмотреть все расценки</Button>
		</section>
	);
};

export default PriceSection;