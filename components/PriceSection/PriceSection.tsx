'use client'

import React, { useEffect, useState } from 'react';
import styles from "./PriceSection.module.scss"
import { Button, MetalTable, Title } from "@/components";
import useMetalsByCategory from '@/Hooks/useMetalsByCategory';


interface Props {
	className?: string;
}

export  const PriceSection: React.FC<Props> =  ({ className }) => {
	const metals = useMetalsByCategory("cmd0lpln400058z9t4487mk4n")
	const extraMetals = useMetalsByCategory("cmdbkw6vx00008z2j2w3i2x1z");
	
	const combinedMetals = metals && extraMetals ? [extraMetals[0], ...metals] : metals
	
	return (
		<section className={styles.section} id="prices">
			
			<Title tag='h2' color='black' className={styles.section__title}>Актуальные расценки на металлы</Title>
			<p className={styles.section__p}>Цены обновляются ежедневно и могут изменяться в зависимости от качества металла</p>
			<MetalTable metals={combinedMetals} />
			<Button className={styles.section__button} as='link' href='/price-list' variant='red'>Посмотреть все расценки</Button>
		</section>
	);
};

export default PriceSection;