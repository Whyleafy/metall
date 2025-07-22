import { Input, Modal, Title } from '@/components';
import React from 'react';
import styles from "./CreateArticleModal.module.scss"

interface Props {
	className?: string;
	setActive: (value: boolean) => void;
	isActive: boolean;
}

export const CreateArticleModal: React.FC<Props> = ({ className, setActive, isActive }) => {
	return (
		<Modal setActive={setActive} isActive={isActive} className={styles.modal} >
			<div className={styles.modal__content}>
				<Title tag='h2' color='black'>Создать статью</Title>
				<input type='file'/>
				<Input label='Заголовок статьи' />
				<label>
					Текст статьи
					<textarea className={styles.modal__content__textarea} rows={6}  />
				</label>
			</div>
		</Modal>
	);
};

export default CreateArticleModal;