import QuestionsList from "../components/QuestionsList/QuestionsList";
import { useQuestions } from "../hooks/useQuestions";

const EMPTY_FILTERS = {}
const QuestionsPage = () => {

const {questions, loading, error} = useQuestions(EMPTY_FILTERS, 1)

if(loading) return <p>Загрузка запросов...</p>
if(error) return <p>Ошибка: {error}</p>
  return ( 
    <main>
      <h2>Вопросы</h2>
      <QuestionsList questions={questions} />
    </main>
   );
}
 
export default QuestionsPage;