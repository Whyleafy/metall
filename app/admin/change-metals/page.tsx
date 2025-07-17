'use client'

import { Button, ChangeInputs, CreateMetallModal, Select, Title } from "@/components";
import styles from './page.module.scss'
import { useState } from "react";
import useCategories from "@/Hooks/useCategories";
export default function ChangeMetals() {
	const [modalActive, setModalActive] = useState(false);
	const [selectedId, setSelectedId] = useState<string>("");
	
	const categories = useCategories();
	
	return (
		<div className={styles.section}>
			<Button className={styles.section__button} variant="outline" as="link" href="/admin">Назад</Button>
			<div className={styles.container}>
				<div className={styles.choose}>
					<Title tag="h2" color="black" className={styles.choose__title}>Изменить цены существующих металлов</Title>
					<Select className={styles.choose__select} firstOption="Выберите категорию" value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
						{categories.map((category) => (
							<option className={styles.choose__categorySelect} value={category.id} key={category.id}>
								{category.name}
							</option>
						))}
					</Select>
				</div>
				
				{selectedId && 
					<div className={styles.changeMetals}>
						<ChangeInputs categoryId={selectedId} />
						<div>
							<Button onClick={() => setModalActive(true)} variant="red"> Создать металл</Button>
							<CreateMetallModal categoryId={selectedId} setActive={setModalActive} isActive={modalActive} />
						</div>
					</div>
				}
			</div>
		</div>
	)
}