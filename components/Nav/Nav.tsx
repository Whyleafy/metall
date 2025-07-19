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
    { href: '/articles', label: 'Блог' },
];

export const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const handleResize = () => setIsMobile(mediaQuery.matches);
        handleResize();
        mediaQuery.addEventListener('change', handleResize);
        return () => mediaQuery.removeEventListener('change', handleResize);
    }, []);

    const openMenu = () => {
        setMenuVisible(true);
    };

    const closeMenu = () => {
        setIsClosing(true);
        setTimeout(() => {
            setMenuVisible(false);
            setIsClosing(false);
        }, 300); // совпадает с длительностью анимации
    };

    const renderLinks = (className: string, onClick?: () => void) =>
        links.map(({ href, label }) => (
            <li key={href}>
                <Link href={href} className={className} onClick={onClick}>
                    {label}
                </Link>
            </li>
        ));

    if (!isMobile) {
        return (
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    {renderLinks(styles.nav__list__link)}
                </ul>
            </nav>
        );
    }

    return (
        <>
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
