import React from 'react';
import styles from "./MetalTable.module.scss";
import { formatDate } from '@/lib/formatDate';
// import {Metals} from '../../types/metals'
// import { metals } from './metals';

export interface Metal {
	id: string;
	name: string;
	cashPrice: number | null;
	nonCashPrice: number | null;
	updatedAt?: Date;
}

interface MetalTableProps {
	metals: Metal[];
}

export const MetalTable: React.FC<MetalTableProps> = ({ metals }) => {
	return (
		<div className={styles.table}>
			<div className={styles.table__row}>
				<div className={styles.heading}>Наименование металла</div>
       			<div className={styles.heading}>Стоимость (безнал, ₽/кг)</div>
        		<div className={styles.heading}>Стоимость (*, ₽/кг)</div>
			</div>
			{metals
			.filter(Boolean)
			.map((metal) => (
				<div key={metal.id} className={styles.metalRow}>
					<div className={styles.metalRow__column}>{metal.name}</div>
					<div className={styles.metalRow__column}>{metal.nonCashPrice ?? "-"}</div>
					<div className={styles.metalRow__column}>{metal.cashPrice ?? "-"}</div>
				</div>
			))}
			
		</div>
	);
};

export default MetalTable;