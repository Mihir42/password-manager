import { useState } from "react";
import Layout from "../layout/Layout";
import Card from "../UI/Card";
import Accordion from "../UI/Accordion";

function UserPasswords() {
  const initialPasswords = [
    {
      userName: "Alpha01@gmail.com",
      password: "Password1",
      website: "Gmail.com",
    },
    {
      userName: "Beta02@outlook.com",
      password: "Password2",
      website: "Outlook.com",
    },
    {
      userName: "Charlie@yahoo.com",
      password: "Password3",
      website: "Yahoo.com",
    },
  ];
  const accordionText = {
    title: "Accordion title",
    text: "This will be some really long piece of text that will be made longer now too see if the card is reponsive and data can be sent into card",
  };
  const [passwords, setPasswords] = useState(initialPasswords);

  return (
    <>
      <Layout>
        <Card title={accordionText.title}>{accordionText.text}</Card>
      </Layout>
    </>
  );
}

export default UserPasswords;
