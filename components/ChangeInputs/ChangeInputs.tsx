'use client'
import { Metal } from '@/types/metals';
import React, { useEffect, useState } from 'react';
import { Button, Title } from "@/components";
import styles from './ChangeInputs.module.scss';
import { toast } from "react-hot-toast";

interface Props {
	className?: string;
	// Добавьте другие пропсы здесь
}

export const ChangeInputs: React.FC<Props> = ({ className }) => {
	const [metals, setMetals] = useState<Metal[]>([]);
  	const [selectedId, setSelectedId] = useState<string>("");
  	const [formData, setFormData] = useState({
    	cashPrice: "",
    	nonCashPrice: "",
  	});

	useEffect(() => {
		const fetchmetals = async () => {
		try {
			const response = await fetch("/api/metals");
			if (!response.ok) {
			throw new Error("Ошибка при получении данных");
			}
			const data = await response.json();
			setMetals(data);
		} catch (error) {
			console.log(error);
		}
		};
		fetchmetals();
	}, []);

	useEffect(() => {
		const metal = metals.find((m) => m.id === selectedId);
		if (metal) {
		setFormData({
			cashPrice: metal.cashPrice?.toString() ?? "",
			nonCashPrice: metal.nonCashPrice?.toString() ?? "",
		});
		}
	}, [selectedId, metals]);

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
		toast.error("Металл успешно удалён");

		setMetals((prev) => prev.filter((m) => m.id !== selectedId));

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
			<select className={styles.dashboard__select} value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
			<option value="">Выберите металл</option>
			{metals.map((metal) => (
				<option key={metal.id} value={metal.id}>
				{metal.name}
				</option>
			))}
			</select>

			{selectedId && (
			<div className={styles.inputs}>
				<label className={styles.inputs__label}>
				Цена за наличку:
				<input
					className={styles.inputs__label__input}
					type="number"
					value={formData.cashPrice}
					onChange={(e) =>
					setFormData({ ...formData, cashPrice: e.target.value })
					}
				/>
				</label>
				<label className={styles.inputs__label}>
				Цена за безнал:
				<input
					className={styles.inputs__label__input}
					type="number"
					value={formData.nonCashPrice}
					onChange={(e) =>
					setFormData({ ...formData, nonCashPrice: e.target.value })
					}
				/>
				</label>
				<Button variant='green' onClick={handleSave}>Сохранить</Button>
				<Button variant='outline' onClick={handleDelete}>Удалить металл</Button>
				
			</div>
			)}
		</div>
	);
};

export default ChangeInputs;