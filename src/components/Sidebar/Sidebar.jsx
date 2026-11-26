import { useState } from "react";
import styles from "./styles.module.css";

const complexityOptions = ["1–3", "4–6", "7–8", "9–10"];
const ratingOptions = [1, 2, 3, 4, 5];
const statusOptions = ["Изученные", "Не изученные", "Все"];

const Sidebar = ({ specializations = [], skills = [] }) => {
  const [selectedSpecializations, setSelectedSpecializations] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedComplexity, setSelectedComplexity] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("Все");

  const [showAllSpecializations, setShowAllSpecializations] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);

  // Выбор нескольких значений
  const toggleOption = (id, selected, setSelected) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const visibleSpecializations = showAllSpecializations
    ? specializations
    : specializations.slice(0, 5);

  const visibleSkills = showAllSkills ? skills : skills.slice(0, 8);

  return (
    <aside className={styles.sidebar}>

      <div className={styles.search}>
        <input type="text" placeholder="Введите запрос..." />
      </div>


      <div className={styles.filterGroup}>
        <h4>Специализации</h4>

        <div className={styles.filterOptions}>
          {visibleSpecializations.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.filterButton} ${
                selectedSpecializations.includes(item.id) ? styles.active : ""
              }`}
              onClick={() =>
                toggleOption(
                  item.id,
                  selectedSpecializations,
                  setSelectedSpecializations,
                )
              }
            >
              {item.title}
            </button>
          ))}
        </div>

        {specializations.length > 5 && (
          <button
            type="button"
            className={styles.showAll}
            onClick={() => setShowAllSpecializations((prev) => !prev)}
          >
            {showAllSpecializations ? "Скрыть" : "Посмотреть все"}
          </button>
        )}
      </div>

      <div className={styles.filterGroup}>
        <h4>Навыки</h4>

        <div className={styles.filterOptions}>
          {visibleSkills.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.filterButton} ${
                selectedSkills.includes(item.id) ? styles.active : ""
              }`}
              onClick={() =>
                toggleOption(item.id, selectedSkills, setSelectedSkills)
              }
            >
              {item.title}
            </button>
          ))}
        </div>

        {skills.length > 8 && (
          <button
            type="button"
            className={styles.showAll}
            onClick={() => setShowAllSkills((prev) => !prev)}
          >
            {showAllSkills ? "Скрыть" : "Посмотреть все"}
          </button>
        )}
      </div>

      <div className={styles.filterGroup}>
        <h4>Уровень сложности</h4>

        <div className={styles.filterOptions}>
          {complexityOptions.map((item) => (
            <button
              key={item}
              type="button"
              className={`${styles.filterButton} ${
                selectedComplexity === item ? styles.active : ""
              }`}
              onClick={() =>
                setSelectedComplexity(selectedComplexity === item ? "" : item)
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>


      <div className={styles.filterGroup}>
        <h4>Рейтинг</h4>

        <div className={styles.filterOptions}>
          {ratingOptions.map((item) => (
            <button
              key={item}
              type="button"
              className={`${styles.filterButton} ${
                selectedRating === item ? styles.active : ""
              }`}
              onClick={() =>
                setSelectedRating(selectedRating === item ? null : item)
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filterGroup}>
        <h4>Статус</h4>

        <div className={styles.filterOptions}>
          {statusOptions.map((item) => (
            <button
              key={item}
              type="button"
              className={`${styles.filterButton} ${
                selectedStatus === item ? styles.active : ""
              }`}
              onClick={() => setSelectedStatus(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
