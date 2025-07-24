import React from 'react';
import styles from "./MetalTable.module.scss";


export interface Metal {
	id: number;
	name: string;
	price: number | null;

}

interface MetalTableProps {
	metals: Metal[];
}

export const MetalTable: React.FC<MetalTableProps> = ({ metals }) => {
	
	return (
		<div className={styles.table}>
			<div className={styles.table__row}>
				<div className={styles.heading}>Наименование металла</div>
       			<div className={styles.heading}>Стоимость (₽/кг)</div>
			</div>
			{metals
			.filter(Boolean)
			.map((metal) => (
				<div key={metal.id} className={styles.metalRow}>
					<div className={styles.metalRow__column}>{metal.name}</div>
					<div className={styles.metalRow__column}>{metal.price ?? "-"}</div>
				</div>
			))}
			
		</div>
	);
};

export default MetalTable;