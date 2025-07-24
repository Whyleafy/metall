'use client'

import React, { useEffect, useState } from 'react';
import styles from "./PriceSection.module.scss"
import { Button, MetalTable, Title } from "@/components";
import { metals } from '../MetalTable/metals';

interface Props {
	className?: string;
}

export  const PriceSection: React.FC<Props> =  ({ className }) => {
	
	return (
		<section className={styles.section} id="prices">
			
			<Title tag='h2' color='black' className={styles.section__title}>Актуальные расценки на металлы</Title>
			<p className={styles.section__p}>Цены обновляются ежедневно и могут изменяться в зависимости от качества металла</p>
			<MetalTable metals={metals} />
			<Button className={styles.section__button} as='link' href='/price-list' variant='red'>Посмотреть все расценки</Button>
		</section>
	);
};

export default PriceSection;