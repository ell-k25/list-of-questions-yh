import { useState } from "react";
import QuestionsList from "../components/QuestionsList/QuestionsList";
import { useQuestions } from "../hooks/useQuestions";
import Pagination from "../components/Pagination/Pagination";
import { useFiltersData } from "../hooks/useFiltersData";

import styles from "./styles.module.css";
import Sidebar from "../components/Sidebar/Sidebar";

const EMPTY_FILTERS = {};

const QuestionsPage = () => {
  const [page, setPage] = useState(1);
  const { questions, total, limit, loading, error } = useQuestions(
    EMPTY_FILTERS,
    page,
  );

  const {
    specializations,
    skills,
    loading: filtersLoading,
    error: filtersError,
  } = useFiltersData();

  const totalPages = Math.ceil(total / limit);

  if (loading) return <p>Загрузка запросов...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <main>
      <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.questionsColumn}>
            <h2 className={styles.pageTitle}>Вопросы</h2>
            <div className={styles.questionsContainer}>
              <QuestionsList questions={questions} />
            </div>

            <div className={styles.paginationWrapper}>
              <Pagination
                currentPage={page}
                total={totalPages}
                onClickPage={setPage}
              />
            </div>
          </div>

          <Sidebar specializations={specializations} skills={skills} />
        </div>
      </div>
    </main>
  );
};

export default QuestionsPage;
