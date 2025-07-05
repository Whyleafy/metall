import React from 'react';
import styles from './Nav.module.scss'
import Link from 'next/link';
import { Logo } from "@/components"


export const Nav= () => {
	return (
		<nav className={styles.nav}>
			<Link href="/" className={styles.nav__link}>Главная</Link>
			<Link href="#main" className={styles.nav__link}>Цены</Link>
			<Link href="#main" className={styles.nav__link}>Услуги</Link>
			<Link href="#main" className={styles.nav__link}>Контакты</Link>
			<Link href="/blog" className={styles.nav__link}>Блог</Link>
		</nav>
	);
};

export default Nav;