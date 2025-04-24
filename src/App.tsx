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
        <div className="container">
            <div className="form">
                <Form sendData={getData} />
            </div>

            <div className="excuseBlock">
                <Excuse acceptData = {data} />
            </div>

        </div>
    </>
  )

}

export default App
