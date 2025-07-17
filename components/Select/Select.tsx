import React, { ReactNode } from 'react';
import styles from './Select.module.scss'

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  	firstOption: string;
	className?: string;
}

export const Select: React.FC<Props> = ({ 
	className, 
	value, 
	onChange, 
	firstOption,
	children,
	...props 
}) => {
	return (
		<select className={`${styles.select} ${className ?? ''}`} value={value} onChange={onChange}>
			<option value="">{firstOption}</option>
			{children}
		</select>
	);
};

export default Select;