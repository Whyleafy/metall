import React from 'react';
import styles from './Logo.module.scss';



export const Logo = ( ) => {
	return (
		<div className={styles.logo}>
			<img src="/icons/grapple.svg" alt="" className={styles.logo__img}/>
		</div>
	);
};

export default Logo;