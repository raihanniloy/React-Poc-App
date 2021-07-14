import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link';

const Navbar = () => {
    return (
            <nav className={styles.nav}>
        <h3>Logo</h3>
        <ul className={styles.navLinks}>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/agents'>Agents</Link></li>
          <li><Link href='/items'>Items</Link></li>
          <li><Link href='/about'>About</Link></li>
        </ul>
    </nav>
    )
}

export default Navbar
