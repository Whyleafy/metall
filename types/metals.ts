export interface Metal {
	id: string;
	name: string;
	cashPrice: number;
	nonCashPrice: number;
	updatedAt: Date;
}

export interface MetalTableProps {
	metals: Metal[];
}