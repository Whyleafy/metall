export interface Metal {
	id: string;
	name: string;
	cashPrice: number | null;
	nonCashPrice: number | null;
	updatedAt: Date;
}

export interface MetalTableProps {
	metals: Metal[];
}