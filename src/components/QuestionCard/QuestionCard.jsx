import { useState } from "react";
import styles from "./styles.module.css";
import arrowOpen from '../../assets/icon/accordeon-down.png'
import arrowClose from '../../assets/icon/accordeon-up.png'

const QuestionCard = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <article className={styles.card}>
      {/* Заголовок карточки */}
      <button
        className={styles.question}
        onClick={toggleAnswer}
        type="button"
        aria-expanded={isOpen}
      >
        <span className={styles.title}>
          {question.title}
        </span>

        <img
          className={styles.arrow}
          src={isOpen ? arrowClose : arrowOpen}
          alt={isOpen ? "Свернуть" : "Развернуть"}
        />
      </button>

      {/* Содержимое открытой карточки */}
      {isOpen && (
        <div className={styles.details}>

          {/* Рейтинг, сложность и меню */}
          <div className={styles.meta}>
            <div className={styles.badges}>
              <div className={styles.badge}>
                Рейтинг
                <span>{question.rate}</span>
              </div>

              <div className={styles.badge}>
                Сложность
                <span>{question.complexity}</span>
              </div>
            </div>

            <button
              className={styles.menuButton}
              type="button"
              aria-label="Открыть меню вопроса"
            >
              ⋮
            </button>
          </div>

          {/* Изображение */}
          {question.imageSrc && (
            <img
              className={styles.exampleImage}
              src={question.imageSrc}
              alt="Пример кода"
            />
          )}

          {/* Текстовый пример кода */}
          {question.code && (
            <pre className={styles.code}>
              <code>{question.code}</code>
            </pre>
          )}

          {/* Развёрнутый ответ */}
          {question.longAnswer && (
            <div className={styles.answer}>
              {question.longAnswer}
            </div>
          )}

        </div>
      )}
    </article>
  );
};

export default QuestionCard;
