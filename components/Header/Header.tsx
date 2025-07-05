import React from 'react';
import { Logo, Nav } from '@/components';
import styles from './Header.module.scss'
import { Phone } from 'lucide-react';
import Link from 'next/link';


export const Header = ( ) => {
	return (
		<header className={styles.header}>
			<Link href="/" className={styles.nav__link}><Logo /></Link>
			<Nav />
			<div className={styles.header__phone}>
				<Phone className={styles.header__phone__icon}/> 
				<a href="tel:+79104492588" className={styles.header__phone__number}>+7 (999) 123-43-53</a>
			</div>
		</header>
	);
};

export default Header;