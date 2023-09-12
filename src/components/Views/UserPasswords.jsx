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
  const [passwords, setPasswords] = useState(initialPasswords);

  return (
    <>
      <Layout>
      </Layout>
      <Card/>

    </>
  );
}

export default UserPasswords;
