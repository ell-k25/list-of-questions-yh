import figma from "../../assets/socialsIcon/figma.png";
import github from "../../assets/socialsIcon/github.png";
import telegram from "../../assets/socialsIcon/telegram.png";
import tiktok from "../../assets/socialsIcon/tiktok.png";
import youtube from "../../assets/socialsIcon/youtube.png";

import styles from "./styles.module.css";

const icons = [
  { url: figma, alt: "figma" },
  { url: github, alt: "github" },
  { url: telegram, alt: "tg" },
  { url: tiktok, alt: "tiktok" },
  { url: youtube, alt: "youtube" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>Yeahub</div>
        <p className={styles.text}>
          Выбери, каким будет IT завтра, вместе с нами
        </p>
        <p className={styles.description}>
          YeaHub — это полностью открытый проект, призванный объединить и
          улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub.
          Дизайн проекта также открыт для ознакомления в Figma.
        </p>
        <div className={styles.socialInfo}>
          <p>©&nbsp;2026&nbsp;YeaHub</p>

          <div className={styles.rightGroup}>
            <p>Ищите нас и в других соцсетях&nbsp;@yeahub_it</p>

            <ul className={styles.socialsList}>
              {icons.map((icon) => (
                <li key={icon.url}>
                  <a href="#">
                    <img src={icon.url} alt={icon.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
