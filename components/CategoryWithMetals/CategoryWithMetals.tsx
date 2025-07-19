'use client';

import { MetalTable, Title } from "@/components";
import useMetalsByCategory from "@/Hooks/useMetalsByCategory";
import { Category } from "@/Hooks/useCategories";
import styles from './CategoryWithMetals.module.scss'
import { Metal } from "@/types/metals";

interface Props {
	id: string;
	category: {
		id: string;
		name: string;
		metals: Metal[];
	}
}
export const CategoryWithMetals: React.FC<Props> = ({ category, id }) => {

	if (category.metals.length === 0) return null; 
	return (
		<div className={styles.table} id={id}>
			<Title className={styles.table__title} tag="h2" color="black">{category.name.trim().toLowerCase() === "главная" ? "Прием металлов по таблице" : category.name}</Title>
			<MetalTable metals={category.metals} />
		</div>
	);
};
