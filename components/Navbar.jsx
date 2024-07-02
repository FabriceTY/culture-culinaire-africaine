"use client";

import Link from 'next/link';
import styles from '@/components/Navbar.module.css';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import Logo from "../public/Assets/Logo.svg";
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaInfo, FaStar, FaEnvelope, FaSignInAlt } from 'react-icons/fa'; // Importer des icônes
import { useLocale } from './LocaleProvider';
import { FormattedMessage } from 'react-intl';

export default function Navbar() {
    const [theme, setTheme]= useTheme();
    const handleTheme=()=>{
        if(theme ==='light'){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    }
    // variable permettant le gestion des langues 
    const [locale, setLocale] = useLocale();
    const handleLocale = () => {
        if (locale === 'fr') {
            setLocale('en');
        }
        else {
            setLocale('fr');
        }
    }

    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.nav_container}>
                <div className={styles.nav_logo_container}>
                    <Link href="/">
                        <Image src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className={`${styles.nav_menu} ${menuOpen ? styles.nav_menu_open : ''}`}>
                    <ul>
                        <li>
                            <Link href="/" className={pathname === '/' ? styles.active : ''}>
                                <FaHome /> <FormattedMessage id= 'app.header.menu.lien1'/>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className={pathname === '/about' ? styles.active : ''}>
                                <FaInfo /> <FormattedMessage id= 'app.header.menu.lien2'/>
                            </Link>
                        </li>
                        <li>
                            <Link href="/testimonials" className={pathname === '/testimonials' ? styles.active : ''}>
                                <FaStar /> <FormattedMessage id= 'app.header.menu.lien3'/>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>
                                <FaEnvelope /> <FormattedMessage id= 'app.header.menu.lien4'/>
                            </Link>
                        </li>
                        <li>
                            <Link href="/connexion" className={pathname === '/connexion' ? styles.active : ''}>
                                <FaSignInAlt /> <FormattedMessage id= 'app.header.menu.lien5'/>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.nav_icon} onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            <label>
            <FormattedMessage id= 'app.header.theme'/>
            <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={handleTheme}
            />
        </label>
        <div>
            <label>
                EN :
                <input
                    type="checkbox"
                    checked={locale === 'en'}
                    onChange={handleLocale} />
            </label>
        </div>
        </nav>
    );
}
