'use client'

import { Button, CreateArticleModal, Title } from '@/components'
import styles from './page.module.scss'
import { useState } from 'react'

export default function ChangeArticles() {
	const [isActive, setIsActive] = useState(true);
	
	return (
		<div className={styles.page}>
			<Button className={styles.page__button} variant="outline" as="link" href="/admin">Назад</Button>
			<div className={styles.action}>
				<Title tag='h1' color='black'> Изменить статьи</Title>
				<Button variant='green' onClick={() => setIsActive(true)}> Создать статью</Button>
			</div>
			<CreateArticleModal isActive={isActive} setActive={setIsActive} />
		</div>
	)
}