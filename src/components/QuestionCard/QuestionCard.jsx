import { useState } from "react";
import styles from './styles.module.css'
// import arrowOpen from '../../assets/icon/accordeon-down.png'
// import arrowClose from '../../assets/icon/accordeon-up.png'

const QuestionCard = ({question}) => {
const [isOpen, setIsOpen] = useState(false)




  return ( 
    <article className={styles.card}>
<button className={styles.question} onClick={() => setIsOpen(!isOpen)}>
  <span>{question.title}</span>
  <span>{isOpen ? '⌃' : '⌄'}</span>
</button>

<div className={styles.meta}>
  <span>Рейтинг: {question.rate}</span>
  <span>Сложность: {question.complexity}</span>
</div>

{isOpen && (
  <div className={styles.content}>
    {question.code && (
      <pre>
        <code>{question.code}</code>
      </pre>
    )}

    {question.imageSrc && (
      <img src={question.imageSrc} alt='' />
    )}

    <p>{question.description}</p>
  </div>
)}

    </article>
   );
}
 
export default QuestionCard;