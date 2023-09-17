import Layout from "../layout/Layout";
import Card from "../UI/Card";
import Accordion from "../UI/Accordion";

function UserPasswords() {
  const accordionText = {
    title: "Accordion title",
    text: "This will be some really long piece of text that will be made longer now too see if the card is reponsive and data can be sent into card",
  };

  return (
    <>
      <Layout>
        <Card title={accordionText.title}>
          <Accordion />
        </Card>
      </Layout>
    </>
  );
}

export default UserPasswords;
