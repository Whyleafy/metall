'use client';

import React, { useEffect, useState } from 'react';
import styles from './Nav.module.scss';
import Link from 'next/link';
import { Button } from '@/components';
import { Menu, X } from 'lucide-react';

export const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);

    const closeMenu = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setMenuOpen(false);
            setIsAnimating(false);
        }, 300);
    };

    const toggleMenu = () => {
        if (menuOpen) {
            closeMenu();
        } else {
            setMenuOpen(true);
        }
    };

    if (!isMobile) {
        return (
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    <li><Link href="/" className={styles.nav__list__link}>Главная</Link></li>
                    <li><Link href="/price-list" className={styles.nav__list__link}>Цены</Link></li>
                    <li><Link href="#main" className={styles.nav__list__link}>Услуги</Link></li>
                    <li><Link href="#contacts" className={styles.nav__list__link}>Контакты</Link></li>
                    <li><Link href="/blog" className={styles.nav__list__link}>Блог</Link></li>
                </ul>
            </nav>
        );
    }

    return (
        <>
            <nav className={styles.mobileNav}>
                <Button variant="outline" onClick={toggleMenu}>
                    {menuOpen && !isAnimating ? <X size={24} /> : <Menu size={24} />}
                </Button>
            </nav>

            {(menuOpen || isAnimating) && (
                <>
                    <div
                        className={styles.overlay}
                        onClick={closeMenu}
                    />

                    <div
                        className={`${styles.drawer} ${menuOpen ? styles.slideIn : styles.slideOut}`}
                    >
                        <ul className={styles.drawer__list}>
                            <li><Link href="/" className={styles.drawer__link} onClick={closeMenu}>Главная</Link></li>
                            <li><Link href="/price-list" className={styles.drawer__link} onClick={closeMenu}>Цены</Link></li>
                            <li><Link href="#main" className={styles.drawer__link} onClick={closeMenu}>Услуги</Link></li>
                            <li><Link href="#contacts" className={styles.drawer__link} onClick={closeMenu}>Контакты</Link></li>
                            <li><Link href="/blog" className={styles.drawer__link} onClick={closeMenu}>Блог</Link></li>
                        </ul>
                    </div>
                </>
            )}
        </>
    );
};

export default Nav;
