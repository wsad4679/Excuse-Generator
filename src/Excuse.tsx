

interface AcceptData{
    acceptData: {
        name: string;
        date: string;
        category: string;
        credibility: string;
        creativity: string;
        details: string;
        isUrgent: boolean;
    }[];
}


const Excuse = ({acceptData}:AcceptData) => {




        return(
            <>
                <div>
                    <h2>Wymówki:</h2>
                    {acceptData.length === 0 && <p>Brak wymówek</p>}
                    {acceptData.map((excuse, index) => (
                        <div key={index} style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
                            <p><strong>Imię:</strong> {excuse.name}</p>
                            <p><strong>Data:</strong> {excuse.date}</p>
                            <p><strong>Kategoria:</strong> {excuse.category}</p>
                            <p><strong>Wiarygodność:</strong> {excuse.credibility}</p>
                            <p><strong>Kreatywność:</strong> {excuse.creativity}</p>
                            <p><strong>Szczegóły:</strong> {excuse.details}</p>
                            <p><strong>Pilne:</strong> {excuse.isUrgent ? "Tak" : "Nie"}</p>
                        </div>
                    ))}
                </div>
            </>
        )


}


export default Excuse