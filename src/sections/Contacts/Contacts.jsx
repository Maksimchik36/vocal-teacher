import ContactLinksContacts from "@/components/ContactLinksContacts/ContactLinksContacts";
import styles from "./Contacts.module.scss";
import ButtonLink from "@/components/Buttons/ButtonLink/ButtonLink";


const Contacts = () => {
    return (
        <section className={styles.section} id="contacts">
            <div className={`container ${styles.container}`}>
                <div className={styles.contactsWrapper}>
                    <h2>Контакти</h2>
                    <address className={styles.locationWrapper}>
                        <svg>
                            <use href="./sprite.svg#icon-location"></use>
                        </svg>
                        <p>Івано-Франківськ, вул.Броварська, буд.5, офіс 3</p>
                    </address>
                    <ContactLinksContacts />
                </div>
                <ButtonLink
                    href="https://t.me/+380505361693"
                    title="Записатися на безкоштовний урок"
                    className={styles.recordBtn}
                />
            </div>
        </section>
    );
};


export default Contacts;