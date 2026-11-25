import { useState } from "react";
import QuestionsList from "../components/QuestionsList/QuestionsList";
import { useQuestions } from "../hooks/useQuestions";
import Pagination from "../components/Pagination/Pagination";

const EMPTY_FILTERS = {};

const QuestionsPage = () => {
  const [page, setPage] = useState(1);
  const { questions, total, limit, loading, error } = useQuestions(
    EMPTY_FILTERS,
    page,
  );

  const totalPages = Math.ceil(total / limit);

  if (loading) return <p>Загрузка запросов...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <main>
      <h2>Вопросы</h2>
      <QuestionsList questions={questions} />
      <Pagination
        currentPage={page}
        total={totalPages}
        onClickPage={setPage}
      />
    </main>
  );
};

export default QuestionsPage;
