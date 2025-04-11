import './App.css'
import Form from "./Form.tsx";
import Excuse from "./Excuse.tsx";
import {useState} from "react";

function App() {

    function getData (data: object):void {
        setData(data)
    }

    const [data, setData] = useState<object>();

    console.log(data)

  return (
    <>
        <Form sendData={getData}/>
        <Excuse/>
    </>
  )
}

export default App
