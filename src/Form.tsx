import {useState} from "react";
import * as React from "react";

interface FormData{
    name: string;
    date: string;
    category: string;
    credibility: string;
    creativity: string;
    details: string;
    isUrgent: boolean;
}

interface SendData{
    sendData: (data: FormData) => void;
}



const Form = ({sendData}:SendData) => {

    const [formData, setFormData] = useState<FormData>({
        name:"", category:"", creativity:"", credibility:"",
        details:"", date:"", isUrgent: false
    })

    function handleChage (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>){
        const {name, value, type,checked} = event.target as HTMLInputElement;
        setFormData(prevState => ({...prevState, [name]: type ==="checkbox" ? checked : value}));

    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
    }

    return(

        <form onSubmit={handleSubmit}>
            <h3>Generator wymówek</h3>

            <label> Imie:
                <input type="text" value={formData.name}
                       onChange = {handleChage} name="name"/>
            </label>
            <br/>

            <label>Data:
                <input type="date" value={formData.date}
                       onChange={handleChage} name="date"/>
            </label>

            <br/>

            <select value={formData.category} name="category" onChange={handleChage}>
                <option value="">Wybierz opcje</option>
                <option value="spóźnienie">spóźnienie</option>
                <option value="nieobecność" defaultValue={"nieobecność"}>nieobecność</option>
                <option value="brak_zadania">brak zadania</option>
                <option value="nieodesłanie_repo">nieodesłanie repo</option>
            </select>

            <br/>

            Poziom wiarygodności: 1
                <input type="range" min="1" max="5" name="credibility" value = {formData.credibility}
                       onChange={handleChage}/> 5

            <br/>

            Kreatywność:
            <select name="creativity" value={formData.creativity} onChange={handleChage}>

                <option value="1">Bez wymysłów</option>
                <option value="2">Minimalnie koloryzowane</option>
                <option value="3">Kolory jak na mapie z historii</option>
                <option value="4">(nie) Biała ściana małego dziecka</option>
                <option value="5">Takiego obrazu da Vinci by się nie powstydził</option>

            </select>

            <br/>

            <label>Dodatkowe szczegóły:
                <textarea name="details" value={formData.details}
                                                  onChange={handleChage}/>
            </label>

            <br/>


            <label>Pilność wymówki:
                <input type="checkbox" name="isUrgent" checked={formData.isUrgent}
                       onChange={handleChage}/>
            </label>

            <br/>

            <button type="submit" onClick={()=> sendData(formData)}>Stwórz wymówkę</button>

        </form>


    )


}


export default Form