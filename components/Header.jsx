import Navbar from '@/components/Navbar'
import styles from '@/components/Header.module.css'

export default function Header() {
    
    return (
        <header className={styles.header}>
            <div className={styles.header_content}>
                <Navbar />
            </div>
        </header>
    )
}

// gestion du theme de navigation 

// import Navbar from '@/components/Navbar'
// import styles from '@/components/Header.module.css'
// import { useTheme } from './ThemeProvider'

// export default function Header() {
//     const [theme, setTheme] = useTheme()
//     return (
//         <header className={styles.header+' '+ (theme === 'light'? styles.light : styles.dark)}>
//             <div className={styles.header_content}>
//                 <Navbar />
//             </div>
//         </header>
//     )
// }


