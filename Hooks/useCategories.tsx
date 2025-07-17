import { useEffect, useState } from "react";
import axios from "axios"

export type Category = {
	id: string;
	name: string;
}

export function useCategories(): Category[] {
	const [categories, setCategories] = useState<Category[]>([]);
	
	useEffect(() => {
		const fetchCategories = async () => {
			try {
			const response = await axios.get('/api/categories')
			setCategories(response.data)
			} catch (error) {
				console.log('failed to fetch categories: ', error)
			}
		}
		
		fetchCategories()
	}, []);
	
	return categories ;
}

export default useCategories;