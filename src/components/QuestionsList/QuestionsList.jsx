// import styles from './styles.module.css'

import QuestionCard from "../QuestionCard/QuestionCard";

const QuestionsList = ({ questions = [] }) => {
  if (!questions.length) {
    return <p>Вопросы не найдены</p>;
  }

  return (
    <div>
      {questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
};

export default QuestionsList;
