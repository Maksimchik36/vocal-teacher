import Image from "next/image";
import styles from "./Hero.module.scss";
import microphone from '../../../public/images/microphone.webp';


const Hero = () => {
    return (
        <section id={styles["hero"]}>
            <div className={`container ${styles.container}`}>
                <div className={styles.nameWrapper}>
                    <h2>
                        Яна <br />
                        Полонська
                    </h2>
                    <h1>Викладач вокалу</h1>
                </div>
                <div className={styles.imgWrapper}>
                    <Image src={microphone} alt="Picture of the author"
                        fill
                        sizes='50vw'
                    />
                </div>
            </div>
        </section>
    );
};


export default Hero;