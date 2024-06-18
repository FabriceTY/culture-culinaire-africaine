"use client";

import React, { useState } from "react";
import styles from '@/components/Navbar.module.css';
import Image from "next/image";
import Logo from "../public/Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormNonControlle from "./contact";
import ConnexionForm from "./connexion";

const Navbar = ({ setPage }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, page: "accueil" },
    { text: "About", icon: <InfoIcon />, page: "about" },
    { text: "Testimonials", icon: <CommentRoundedIcon />, page: "testimonials" },
    { text: "Contact", icon: <PhoneRoundedIcon />, page: "contact" },
    { text: "Cart", icon: <ShoppingCartRoundedIcon />, page: "cart" },
    { text: "Connexion", icon: <AccountCircleIcon />, page: "connexion" },
  ];

  const handleMenuClick = (page) => {
    if (page === "contact") {
      setShowForm(true);
      setShowLoginForm(false);
    } else if (page === "connexion") {
      setShowForm(false);
      setShowLoginForm(true);
    } else {
      setShowForm(false);
      setShowLoginForm(false);
    }
    setPage(page);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.nav_logo_container}>
          <Image src={Logo} alt="logo" onClick={() => handleMenuClick('accueil')} />
        </div>
        <div className={styles.navbar_links_container}>
          {menuOptions.map((option) => (
            <a key={option.text} href="#" onClick={() => handleMenuClick(option.page)}>
              {option.text}
            </a>
          ))}
          <a href="#">
            <BsCart2 className={styles.navbar_cart_icon} />
          </a>
          <button className={styles.primary_button}>Bookings Now</button>
        </div>
        <div className={styles.navbar_menu_container}>
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton onClick={() => handleMenuClick(item.page)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </nav>
      {showForm && <FormNonControlle />}
      {showLoginForm && <ConnexionForm />}
    </>
  );
};

export default Navbar;
