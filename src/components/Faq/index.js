import { useState } from "react";

import styles from "./faq.module.scss";
import { faqData } from "utils/Faq/faqData";
import Expand from "assets/icons/Expand.svg";
import Collapse from "assets/icons/Collapse.svg";

export function Faq() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const onQuestionClick = (index) => {
    const isSameQuestionSelected = selectedQuestion === index;

    return isSameQuestionSelected
      ? setSelectedQuestion(null)
      : setSelectedQuestion(index);
  };

  return (
    <div className={styles.faq} id="perguntas_frequentes">
      <div className={`${styles.container} container`}>
        <h1 className={`${styles.title} col`}>Perguntas frequentes</h1>
        <ul className={styles.listItems}>
          {faqData.map((faq, index) => (
            <li className={`${styles.item} row`} key={index}>
              <div
                className={`${styles.content} row`}
                onClick={() => onQuestionClick(index)}
              >
                <h3 className={`${styles.question} col`}>{faq.question}</h3>
                <button className={`${styles.button} col-1`}>
                  {selectedQuestion === index ? <Collapse /> : <Expand />}
                </button>
                <p
                  className={`${styles.answer} 
                  ${selectedQuestion === index && styles.open}
                `}
                >
                  {faq.answer}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
