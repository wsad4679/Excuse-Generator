



const Form = () => {


    return(

        <form>
            <h3>Generator wymówek</h3>

            <label> Imie: <input type="text" value="" /*oncChange = {event => useStateSetText(event.target.value})*/ />
            </label>
            <br/>
            <select>
                <option>spóźnienie</option>
                <option>nieobecność</option>
                <option>brak zadania</option>
                <option>nieodesłanie repo</option>
            </select>
            <br/>
            <label>Data: <input type="date"/> </label>
            <br/>
            <label>Poziom wiarygodności: 1<input type="range" min="1" max="5"/>5 </label>
            <br/>
            <label>Poziom kreatywności: 1<input type="range" min="1" max="5"/>5 </label>
            <br/>
            <label>Dodatkowe szczegóły: <textarea/></label>
            <br/>
            <label>Pilność wymówki: <input type="checkbox"/> </label>
        </form>


    )


}


export default Form