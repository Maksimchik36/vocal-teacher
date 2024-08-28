import AboutSlider from "@/components/AboutSlider/AboutSlider";
import styles from "./About.module.scss";

const About = () => {
    return (
        <section className={styles.about} id="about">
            <div className={`container ${styles.container}`}>
                <p>
                    Спів - це мистецтво, яке народжується в серці і звучить красою в кожній ноті.
                </p>
                <AboutSlider />
            </div>
        </section>
    );
};

export default About;