import { useState } from "react";
import "./Accordion.scss";

function Accordion() {
  const data = [
    {
      question: "Question 1",
      answer: "zhow shang how weng zillian bing chilling",
    },
    {
      question: "Question 2",
      answer: "Your fucking gay, as in homosexual",
    },
    {
      question: "Question 3",
      answer: "Wassup Bejing",
    },
  ];

  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected == i ? "-" : "+"}</span>
            </div>
            <div className={selected == i ? "answer show" : "answer"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
