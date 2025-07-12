'use client'

import { Button, ChangeInputs, CreateMetallModal, Title } from "@/components";
import styles from './page.module.scss'
import { useState } from "react";
export default function ChangeMetals() {
	const [modalActive, setModalActive] = useState(false);
	
	return (
		<div className={styles.container}>
			<Button className={styles.container__button} variant="outline" as="link" href="/admin"> {`<`} Назад</Button>
			<div>
				<Button variant="red" onClick={() => setModalActive(true)}>Создать металл</Button>
				<CreateMetallModal isActive={modalActive} setActive={setModalActive}/>
				<div className={styles.container__backup}>
					<Title tag="h2" color="black">Изменить цены существующих металлов</Title>
					<ChangeInputs />
				</div>
			</div>
		</div>
	)
}