// components/CategoryWithMetals.tsx
'use client';

import { MetalTable, Title } from "@/components";
import useMetalsByCategory from "@/Hooks/useMetalsByCategory";
import { Category } from "@/Hooks/useCategories";
import styles from './CategoryWithMetals.module.scss'

interface Props {
	category: Category;
}

export const CategoryWithMetals: React.FC<Props> = ({ category }) => {
	const metals = useMetalsByCategory(category.id);

	if (metals.length === 0) return null; 
	return (
		<div className={styles.table}>
			<Title className={styles.table__title} tag="h2" color="black">{category.name}</Title>
			<MetalTable metals={metals} />
		</div>
	);
};
