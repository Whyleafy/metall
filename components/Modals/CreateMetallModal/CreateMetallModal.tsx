'use client'
import { FC, useState } from "react";
import { Button, Title, Modal } from "@/components";
import styles from "./CreateMetallModal.module.scss";
import toast from "react-hot-toast";

interface Props {
	isActive: boolean;
	setActive: (value: boolean) => void;
	categoryId: string;
}

export const CreateMetallModal: FC<Props> = ({ isActive, setActive, categoryId }) => {
	const [name, setName] = useState("");
	const [cashPrice, setCashPrice] = useState('');
	const [nonCashPrice, setNonCashPrice] = useState('');

	const handlePost = async () => {
		const res = await fetch(`/api/metals`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name,
				cashPrice: Number(cashPrice),
				nonCashPrice: Number(nonCashPrice),
				categoryId
			})
		});

		if (res.ok) {
			toast.success("Металл создан!");
			setName('');
			setCashPrice('');
			setNonCashPrice('');
			setActive(false);
		} else {
			toast.error("Ошибка при создании");
		}
	};

	return (
		<Modal isActive={isActive} setActive={setActive}>
			<Title tag="h3" color="black" className={styles.title}>Создать металл</Title>
			<div className={styles.inputs}>
				<label className={styles.inputs__label}>
					Имя металла:
					<input
						className={styles.inputs__label__input}
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label className={styles.inputs__label}>
					Цена за наличку:
					<input
						className={styles.inputs__label__input}
						type="number"
						value={cashPrice}
						onChange={(e) => setCashPrice(e.target.value)}
					/>
				</label>
				<label className={styles.inputs__label}>
					Цена за безнал:
					<input
						className={styles.inputs__label__input}
						type="number"
						value={nonCashPrice}
						onChange={(e) => setNonCashPrice(e.target.value)}
					/>
				</label>
				<Button variant="green" onClick={handlePost}>Создать</Button>
			</div>
		</Modal>
	);
};

export default CreateMetallModal;
