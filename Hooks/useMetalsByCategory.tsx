import { useEffect, useState } from "react";
import axios from "axios"

export type Metal = {
	id: string;
	name: string;
	categories: string[];
	cashPrice: number;
	nonCashPrice: number;
	updatedAt: Date;
}

export function useMetalsByCategory(categoryId: string | null): Metal[] {
	const [metals, setMetals] = useState<Metal[]>([]);
	
	useEffect(() => {
		if (!categoryId) return;
		
		const fetchMetalsByCategory = async () => {
			try {
			const response = await axios.get(`/api/categories/${categoryId}/metals`)
			setMetals(response.data)
			} catch (error) {
				console.log('failed to fetch categories: ', error)
			}
		}
		
		fetchMetalsByCategory()
	}, [categoryId]);
	
	return metals ;
}

export default useMetalsByCategory;