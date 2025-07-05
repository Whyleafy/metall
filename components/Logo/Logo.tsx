import React from 'react';
import styles from './Logo.module.scss';



export const Logo = ( ) => {
	return (
		<div className={styles.logo}>
			<span className={styles.logo__letter}>M</span>
		</div>
	);
};

export default Logo;