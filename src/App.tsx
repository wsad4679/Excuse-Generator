import './App.css'
import Form from "./Form.tsx";
import Excuse from "./Excuse.tsx";
import {useState} from "react";

function App() {

    function getData (formData: object):void {
        setData(prev => [...prev, formData]);
    }

    const [data, setData] = useState<object[]>([]);


  return (
    <>
        <Form sendData={getData}/>
        <Excuse acceptData={data}/>
    </>
  )
}

export default App
