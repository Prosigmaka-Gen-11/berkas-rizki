import { useContext } from "react";
import { BarangContext } from "./BarangProvider"
import Form from "./Form"
import List from "./List"

function App() {
  return <>
    <Form />
    <List />
  </>

}

export default App