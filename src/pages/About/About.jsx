import SocialBar from "../../components/social/SocialBar";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <section id="about" className={`${styles.about} animateSec`}>
        <h1>Hi, I&apos;m Irwing, 👋</h1>

        <p className={styles.aboutDesc}>
          a passionate software engineer with five years of experience in
          building robust and scalable web applications. My expertise lies in
          utilizing cutting-edge technologies such to create seamless and
          efficient solutions. I thrive on challenges and am constantly seeking
          opportunities to learn and grow in the ever-evolving tech landscape.
          Let&apos;s build something amazing together!
        </p>
      </section>
      <SocialBar />
    </>
  );
};

export default About;
