'use client'

import React, { useEffect, useState } from 'react';
import { Logo } from '@/components';
import { Nav } from '@/components';
import styles from './Header.module.scss';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';

export const Header = () => {
	const [isHidden, setIsHidden] = useState(false)
	
	useEffect(() => {
		let lastScrollY = window.scrollY;
		const header = document.querySelector('.header');
		
		const updateHeader = () => {
			const currentScrollY = window.scrollY;
			
			setIsHidden(currentScrollY > lastScrollY && currentScrollY > 90);
			
			lastScrollY = currentScrollY;
		};
		
		window.addEventListener('scroll', updateHeader);
		
		return () => window.removeEventListener('scroll', updateHeader)
	}, [])
	
	return (
		<header className={clsx(styles.header, {
				[styles.hidden]: isHidden,
			})}>
		<Link href="/" className={styles.header__link}>
			<Logo />
			<p className={styles.header__link__article}>Стальной дворик</p>
		</Link>

		<Nav />

		<div className={styles.header__phone}>
			<Phone className={styles.header__phone__icon} />
			<a href="tel:+79259002496" className={styles.header__phone__number}>
			+7 (925) 900-24-96
			</a>
		</div>
		</header>
	);
};

export default Header;
