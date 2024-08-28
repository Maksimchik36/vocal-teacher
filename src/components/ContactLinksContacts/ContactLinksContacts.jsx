import Link from "next/link";
import { contactLinksData } from "@/data/contactLinksData";
import styles from "./ContactLinksContacts.module.scss";


const ContactLinksContacts = ({ className, id }) => {
    return (
        <ul className={`${styles.contactLinks} ${className}`} id={id}>
            {contactLinksData.map((item) => {
                return (
                    <li key={item.name}>
                        <Link href={item.href}>
                            <svg className={styles[item.name]}>
                                <use href={item.img}></use>
                            </svg>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};


export default ContactLinksContacts;