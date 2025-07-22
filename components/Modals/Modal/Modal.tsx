import React, { ReactNode } from 'react';
import styles from "./Modal.module.scss"
import { cn } from '@/lib/utils';

interface Props {
	isActive: boolean;
	setActive: (value: boolean) => void;
	children: ReactNode;
	className?: string;
}

export const Modal: React.FC<Props> = ({ isActive, setActive, children, className }) => {
	return (
		<div className={cn(styles.modal, 
			{[styles.active]: isActive},
			className
			)} 
			onClick={() => setActive(false)}>
			<div className={styles.modal__content} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Modal;