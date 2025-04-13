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
            <div className="form-panel">
                <Form sendData={getData} />
            </div>

            <div className="excuses-panel">
                <Excuse acceptData={data} />
            </div>

        </div>
    </>
  )

}

export default App
