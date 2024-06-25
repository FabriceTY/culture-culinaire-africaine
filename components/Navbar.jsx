"use client";

// import React, { useState } from "react";
// import styles from '@/components/Navbar.module.css';
// import Image from "next/image";
// import Link from 'next/link';
// import Logo from "../public/Assets/Logo.svg";
// import { BsCart2 } from "react-icons/bs";
// import { HiOutlineBars3 } from "react-icons/hi2";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import FormNonControlle from "./contact";
// import ConnexionForm from "./connexion";

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


// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [showLoginForm, setShowLoginForm] = useState(false);
//   const pathname = usePathname();

//   const menuOptions = [
//     { text: "Home", icon: <HomeIcon />, href: "/" },
//     { text: "About", icon: <InfoIcon />, href: "/about" },
//     { text: "Testimonials", icon: <CommentRoundedIcon />, href: "/testimonials" },
//     { text: "Contact", icon: <PhoneRoundedIcon />, href: "/contact" },
//     { text: "Cart", icon: <ShoppingCartRoundedIcon />, href: "/cart" },
//     { text: "Connexion", icon: <AccountCircleIcon />, href: "/connexion" },
//   ];

//   const handleMenuClick = (href) => {
//     if (href === "/contact") {
//       setShowForm(true);
//       setShowLoginForm(false);
//     } else if (href === "/connexion") {
//       setShowForm(false);
//       setShowLoginForm(true);
//     } else {
//       setShowForm(false);
//       setShowLoginForm(false);
//     }
//   };

//   return (
//     <>
//       <nav className={styles.navbar}>
//         <div className={styles.nav_logo_container}>
//           <Link href="/">
//             <Image src={Logo} alt="logo" />
//           </Link>
//         </div>
//         <div className={styles.navbar_links_container}>
//           {menuOptions.map((option) => (
//             <Link 
//               key={option.text} 
//               href={option.href}
//               className={pathname === option.href ? styles.active : ''}
//               onClick={() => handleMenuClick(option.href)}
//             >
//               {option.text}
//             </Link>
//           ))}
//           <Link href="/cart">
//             <BsCart2 className={styles.navbar_cart_icon} />
//           </Link>
//           <button className={styles.primary_button}>Bookings Now</button>
//         </div>
//         <div className={styles.navbar_menu_container}>
//           <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
//         </div>
//         <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
//           <Box
//             sx={{ width: 250 }}
//             role="presentation"
//             onClick={() => setOpenMenu(false)}
//             onKeyDown={() => setOpenMenu(false)}
//           >
//             <List>
//               {menuOptions.map((item) => (
//                 <ListItem key={item.text} disablePadding>
//                   <ListItemButton onClick={() => handleMenuClick(item.href)}>
//                     <ListItemIcon>{item.icon}</ListItemIcon>
//                     <Link href={item.href} passHref>
//                       <ListItemText primary={item.text} />
//                     </Link>
//                   </ListItemButton>
//                 </ListItem>
//               ))}
//             </List>
//             <Divider />
//           </Box>
//         </Drawer>
//       </nav>
//       {showForm && <FormNonControlle />}
//       {showLoginForm && <ConnexionForm />}
//     </>
//   );
// };

// export default Navbar;
