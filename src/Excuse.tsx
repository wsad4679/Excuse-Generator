import {useEffect, useState} from "react";

const excuses: ExcusesListKeys = {
    spóźnienie: {
        1: [
            "był korek w drodze do szkoły",
            "zaspałem i nie zdążyłem na autobus",
            "rower mi się zepsuł po drodze"
        ],
        2: [
            "budzik zadzwonił, ale telefon się rozładował",
            "tramwaj się wykoleił, a inne były pełne",
            "winda zatrzymała się między piętrami"
        ],
        3: [
            "sąsiad zalał mi mieszkanie i musiałem to ogarnąć",
            "na klatce stał dzik i nie mogłem wyjść",
            "kot zamknął mnie w łazience przez przypadek"
        ],
        4: [
            "ptak ukradł mi buta i nie mogłem wyjść z domu",
            "wciągnął mnie spontaniczny pokaz uliczny o origami",
            "zderzyłem się z mimem i musieliśmy rozwiązać to pantomimą"
        ],
        5: [
            "czas się zatrzymał na 10 minut tylko dla mnie",
            "wpadłem w pętlę czasową i ciągle się spóźniałem",
            "musiałem pomóc jednorożcowi wrócić do portalu"
        ]
    },

    nieobecność: {
        1: [
            "miałem wizytę u lekarza",
            "musiałem iść na badania kontrolne",
            "miałem gorączkę i zostałem w domu"
        ],
        2: [
            "musiałem pomóc chorej babci",
            "musiałem zająć się młodszym rodzeństwem",
            "mój pies się źle czuł i pojechaliśmy do weterynarza"
        ],
        3: [
            "moje dziecko z klasy teatralnej miało występ i byłem aktorem zastępczym",
            "dach zaczął przeciekać i walczyłem z wiadrem",
            "musiałem być świadkiem w telewizyjnym reality show o remontach"
        ],
        4: [
            "zostałem uwięziony w szafie przez kota ninja",
            "mój balkon odleciał z wiatrem, a ja razem z nim",
            "musiałem ratować sąsiada przed papugą bojową"
        ],
        5: [
            "przypadkowo teleportowałem się na inną planetę",
            "rząd zatrzymał mnie, bo przypominam ważnego świadka",
            "świat alternatywny zamienił mnie z wersją, która dziś nie przyszła"
        ]
    },

    brak_zadania: {
        1: [
            "zapomniałem je spakować do plecaka",
            "wydruk się nie udał, a plik został w domu",
            "nie zapisało się, mimo że robiłem"
        ],
        2: [
            "pies zjadł mi zeszyt",
            "komputer się zawiesił i nie zapisał",
            "drukarka rozlała tusz na całą pracę"
        ],
        3: [
            "kot przewrócił kubek z herbatą na zeszyt",
            "brat wziął zeszyt za kolorowankę",
            "wpadł mi za biurko i dopiero dziś go znalazłem"
        ],
        4: [
            "dziecko sąsiadów zrobiło z mojej pracy samolot i wypuściło przez okno",
            "moja praca została przypadkiem dołączona do zamówienia z pizzą",
            "program Word uznał moje zadanie za poezję i je zaszyfrował"
        ],
        5: [
            "praca stała się samoświadoma i uciekła w chmurę",
            "mój długopis stworzył własną wersję i nie chciał jej ujawnić",
            "zadanie wciągnęło mnie w inny wymiar, gdzie czas płynie wolniej"
        ]
    },

    nieodesłanie_repo: {
        1: [
            "zapomniałem je wysłać wieczorem",
            "problemy z internetem uniemożliwiły przesłanie",
            "zapisałem plik lokalnie, ale nie wrzuciłem"
        ],
        2: [
            "GitHub nie chciał przyjąć pliku",
            "zamiast wrzucić, skasowałem przez przypadek",
            "komputer się zrestartował w trakcie pushowania"
        ],
        3: [
            "wrzuciłem projekt na inne konto i zapomniałem hasła",
            "mój projekt został zbanowany za zbyt dobry kod",
            "komentarze z AI same się pisały i repo się zbuntowało"
        ],
        4: [
            "kot usiadł na klawiaturze i zrobił force push do kosmosu",
            "GitHub wciągnął mój projekt w czarną dziurę",
            "pull request otworzył portal między repozytoriami"
        ],
        5: [
            "repo zyskało świadomość i nie chciało być oceniane",
            "moja klawiatura odmówiła współpracy z Git",
            "czasoprzestrzeń pękła przy commitowaniu"
        ]
    }
};


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


interface ExcusesListKeys {
    [category: string]: { [level: number]: string[] };
}

interface UserExcuse {
    content: string;
    name: string;
    date: string;
    details: string;
    isUrgent: boolean;
}
const Excuse = ({ acceptData }: AcceptData) => {
    const [userExcusesList, setUserExcusesList] = useState<UserExcuse[]>(()  =>{
        const savedExcuses = localStorage.getItem('userExcuses');
        return savedExcuses ? JSON.parse(savedExcuses) : [];
    });


    useEffect(() => {
        if (acceptData.length > 0) {
            const lastExcuse = acceptData[acceptData.length - 1];
            const credibilityLevel = parseInt(lastExcuse.credibility) || 3;
            const creativityLevel = parseInt(lastExcuse.creativity) || 3;
            const excuseLevel = Math.min(5, Math.max(1, 5 - Math.abs(credibilityLevel - creativityLevel)));
            const category = lastExcuse.category;

            const ecxuseContentPool = excuses[category]?.[excuseLevel];
            console.log(excuseLevel);
            console.log(excuses[category]);
            console.log(category);

            const excuseText =
                ecxuseContentPool?.[Math.floor(Math.random() * ecxuseContentPool.length)] || "Brak wymówki";

            setUserExcusesList(prev => [
                ...prev,
                {
                    content: `Przepraszam za: ${category.replace("_", " ")}, bo: ${excuseText}`,
                    name: lastExcuse.name,
                    date: lastExcuse.date,
                    details: lastExcuse.details,
                    isUrgent: lastExcuse.isUrgent,
                },
            ]);

        }

    }, [acceptData]);

    localStorage.setItem('userExcuses', JSON.stringify(userExcusesList));



    function deleteFromLocalStorage(index: number) {
        const updatedList = [...userExcusesList];
        updatedList.splice(index, 1);
        localStorage.setItem('userExcuses', JSON.stringify(updatedList));
        setUserExcusesList(updatedList);
    }



    return (
        <div>
            <h2>Wymówki:</h2>
            {userExcusesList.length === 0 && <p>Brak wymówek</p>}
            {userExcusesList.map((excuse, index) => (
                <div key={index} style={{padding: "10px", margin: "10px",
                border: excuse.isUrgent ? "3px solid red" : "1px solid gray",  borderRadius: "15px"
                }}
                >
                    {excuse.isUrgent ? <h2 style={{color: "rgb(0,188,255)" }}>Pilne!</h2> : null}

                    <p>
                        <strong>Imię:</strong> {excuse.name}
                    </p>
                    <p>
                        <strong>Data:</strong> {excuse.date}
                    </p>
                    <p>
                        <strong>Powód:</strong> <blockquote>{excuse.content}</blockquote>
                    </p>

                    <p>
                        <strong>Szczegóły: </strong> <blockquote>{excuse.details}</blockquote>
                    </p>

                    <button onClick={() =>deleteFromLocalStorage(index)}>Usuń z local storage</button>
                </div>
            ))}
        </div>
    );
};


export default Excuse