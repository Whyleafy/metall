'use client';

import React, { useEffect, useState } from 'react';
import styles from './Nav.module.scss';
import Link from 'next/link';
import { Button } from '@/components';
import { Menu } from 'lucide-react';

const links = [
    { href: '/', label: 'Главная' },
    { href: '/price-list', label: 'Цены' },
    { href: '/#main', label: 'Услуги' },
    { href: '/#contacts', label: 'Контакты' },
];

export const Nav = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const openMenu = () => {
        setMenuVisible(true);
    };

    const closeMenu = () => {
        setIsClosing(true);
        setTimeout(() => {
            setMenuVisible(false);
            setIsClosing(false);
        }, 300);
    };
	useEffect(() => {
		if (menuVisible) {
			document.body.classList.add(styles.noScroll);
		} else {
			document.body.classList.remove(styles.noScroll);
		}
	}, [menuVisible]);

    const renderLinks = (className: string, onClick?: () => void) =>
        links.map(({ href, label }) => (
            <li key={href}>
                <Link href={href} className={className} onClick={onClick}>
                    {label}
                </Link>
            </li>
        ));

    return (
        <>
           
            <nav className={styles.desktopNav}>
                <ul className={styles.nav__list}>
                    {renderLinks(styles.nav__list__link)}
                </ul>
            </nav>

            <nav className={styles.mobileNav}>
                <Button 
                    style={{ padding: '0.6rem 0.85rem' }}
                    variant="outline" 
                    onClick={openMenu} 
                    className={styles.mobileNav__button}
                >
                    <Menu size={20} />
                </Button>
            </nav>

            {menuVisible && (
                <>
                    <div
                        className={`${styles.overlay} ${isClosing ? styles.fadeOut : ''}`}
                        onClick={closeMenu}
                    />

                    <div
                        className={`${styles.drawer} ${
                            isClosing ? styles.slideOut : styles.slideIn
                        }`}
                    >
                        <ul className={styles.drawer__list}>
                            {renderLinks(styles.drawer__link, closeMenu)}
                        </ul>
                    </div>
                </>
            )}
        </>
    );
};

export default Nav;