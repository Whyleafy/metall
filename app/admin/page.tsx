'use client'
import { Button, ChangeInputs, Title, Modal } from "@/components";
import styles from "./page.module.scss";
import { use, useEffect, useState } from "react";
import { Metal } from "@/types/metals";
import toast from "react-hot-toast";


export default function Admin() {
	const [modalActive, setModalActive] = useState(false);
	const [metals, setMetals] = useState<Metal[]>([]);
	const [cashPrice, setCashPrice] = useState<string>('');
	const [nonCashPrice, setNonCashPrice] = useState<string>('');
	const [name, setName] = useState<string>("");
	
	
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
		
		const handlePost = async () => {
			const res = await fetch(`/api/metals`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
						name,
						cashPrice: Number(cashPrice),
						nonCashPrice: Number(nonCashPrice)
					})
			});
			
			if (res.ok) {
				toast.success("Металл создан!");
				setName('');
  				setCashPrice('');
  				setNonCashPrice('');
				setModalActive(false);
			} else {
				toast.error("Ошибка при создании");
			}
		}
		

	return (
		<div className={styles.dashboard}>
			<Title className={styles.dashboard__title} tag="h1" color="black"> Админ панель</Title>
			<div className={styles.dashboard__buttons}>
				<Button variant="outline" as="link" href="admin/change-metals">Изменить цены металлов</Button>
				<Button variant="red" onClick={() => setModalActive(true)}>Создать металл</Button>
			</div>
			<Button variant="outline" as="link" href="admin/articles">Изменить статьи</Button>
			<Modal isActive={modalActive} setActive={setModalActive}>
				<Title tag="h3" color="black">Создать металл</Title>
				<div className={styles.inputs}>
					<label className={styles.inputs__label}>
						Имя металла:
						<input
							className={styles.inputs__label__input}
							type="text"
							value={name}
							onChange={(e) =>
							setName(e.target.value)
							}
						/>
					</label>
					<label className={styles.inputs__label}>
						Цена за наличку:
						<input
							className={styles.inputs__label__input}
							type="number"
							value={cashPrice}
							onChange={ (e) => setCashPrice(e.target.value)
							}
						/>
						</label>
						<label className={styles.inputs__label}>
						Цена за безнал:
						<input
							className={styles.inputs__label__input}
							type="number"
							value={nonCashPrice}
							onChange={(e) => setNonCashPrice(e.target.value)
							}
						/>
					</label>
					<Button variant="green" onClick={handlePost}>Создать</Button>
				</div>
			</Modal>
		</div>
	);
}
