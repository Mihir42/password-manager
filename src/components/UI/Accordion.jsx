import { useState } from "react";
import "./Accordion.scss";

function Accordion() {
  const data = [
    {
      username: "Mario@superMario.com",
      password: "Itsamee123",
      website: "My Nintendo",
    },
    {
      username: "Mario@gmail.com",
      password: "Whoaaa321",
      website: "Gmail",
    },
    {
      username: "Mario543",
      password: "StarPwoer243",
      website: "Microsoft",
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
              <h2>{item.website}</h2>
              <span>{selected == i ? "-" : "+"}</span>
            </div>
            <div className={selected == i ? "answer show" : "answer"}>
              {item.username}
              {item.password}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
