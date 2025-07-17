import React from 'react';
import styles from "./Input.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export const Input: React.FC<Props> = ({ 
	className, 
	type = "text", 
	value, 
	onChange, 
	label,
	...props 
}) => {
	return (
		<label className={`${styles.label} ${className}`}>
		{label}
		<input
			className={styles.label__input}
			type={type}
			value={value}
			onChange={onChange}
			{...props}
		/>
		</label>
	);
};

export default Input;