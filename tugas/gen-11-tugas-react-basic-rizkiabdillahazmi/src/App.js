import Message from "./components/Message";

// Menggunkan Class Component (Cara Lama)
import RandomNumber from "./components/RandomNumber";

import Form from "./components/Form";

export default function App() {
  return (
    <div className="">
      <Message />
      <RandomNumber />
      <Form />
    </div>
  );
};