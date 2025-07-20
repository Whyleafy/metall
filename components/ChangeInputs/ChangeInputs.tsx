'use client'
import { Metal } from '@/types/metals';
import React, { useEffect, useState } from 'react';
import { Button, Input, Select, Title } from "@/components";
import styles from './ChangeInputs.module.scss';
import { toast } from "react-hot-toast";
import useMetalsByCategory from '@/Hooks/useMetalsByCategory';

interface Props {
	className?: string;
	categoryId: string
}

export const ChangeInputs: React.FC<Props> = ({ className, categoryId }) => {
  	const [selectedId, setSelectedId] = useState<string>("");
  	const [formData, setFormData] = useState({
    	cashPrice: "",
    	nonCashPrice: "",
  	});

	
	const metals = useMetalsByCategory(categoryId);

	useEffect(() => {
		const metal = metals.find((m) => m.id === selectedId);
		if (metal) {
		setFormData({
			cashPrice: metal.cashPrice?.toString() ?? "",
			nonCashPrice: metal.nonCashPrice?.toString() ?? "",
		});
		}
	}, [selectedId, metals]);
	
	useEffect(() => {
		setSelectedId("")
		setFormData({
			cashPrice: "",
			nonCashPrice: ""
		})
	}, [categoryId]);

	const handleSave = async () => {
		if (!selectedId) return;

		const res = await fetch(`/api/metals/${selectedId}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			cashPrice: parseInt(formData.cashPrice),
			nonCashPrice: parseInt(formData.nonCashPrice),
		}),
		});

		if (res.ok) {
		toast.success("Цены успешно обновлены!");
		} else {
		toast.error("Ошибка при обновлении");
		}
	};
	
	const handleDelete = async () => {
		if (!selectedId) return;
		const confirm = window.confirm("Вы уверены, что хотите удалить металл?");
		if (!confirm) return;

		const res = await fetch(`/api/metals/${selectedId}`, {
			method: "DELETE",
		});
		

		if (res.ok) {
			toast.success("Металл успешно удалён");
			
			setSelectedId("");

			setFormData({
				cashPrice: "",
				nonCashPrice: "",
			});
		} else {
			toast.error("Произошла ошибка при удалении");
		}
	};


	return (
		<div className={styles.dashboard}>
			<Select
			firstOption='Выберите металл'
			value={selectedId}
			onChange={(e) => setSelectedId(e.target.value)}
			>
				{metals.map((metal) => (
					<option key={metal.id} value={metal.id}>
						{metal.name}
					</option>
				))}
			</Select>

			{selectedId && (
			<div className={styles.inputs}>
				<Input label='Цена за наличку'
				type='number'
				value={formData.cashPrice}
				onChange={(e) => setFormData({...formData, cashPrice: e.target.value})}
				/>
				<Input label='Цена за безнал'
				type='number'
				value={formData.nonCashPrice}
				onChange={(e) => setFormData({...formData, nonCashPrice: e.target.value})}
				/>
				<div className={styles.inputs__buttons}>
					<Button variant='green' onClick={handleSave}>Сохранить</Button>
					<Button variant='outline' onClick={handleDelete}>Удалить металл</Button>
				</div>
			</div>
			)}
		</div>
	);
};

export default ChangeInputs;