import Link from 'next/link';
import ContactLinks from '../ContactLinks/ContactLinks';
import { navLinksData } from '@/data/navLinksData';
import styles from './Footer.module.scss';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.contentWrapper}>
                    <ul className={styles.navLinksWrapper}>
                        {navLinksData.map(item => <li key={item.title}>
                            <Link href={item.href}>{item.title}</Link>
                        </li>)
                        }
                    </ul>

                    <address className={styles.footerLocationWrapper}>
                        <svg>
                            <use href="./sprite.svg#icon-footer-location" ></use>
                        </svg>
                        <p>Івано-Франківськ, вул.Броварська, буд.5, офіс 3</p>
                    </address>

                    <ContactLinks id={styles.contactLinks} />
                </div>

                <a className={styles.devLink} href="https://www.webevery.dev/" target="_blank" rel="noopener noreferrer"><p className={styles.dev}>webevery.dev</p></a>
            </div>
        </footer>
    )
}


export default Footer;