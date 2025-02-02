const introduction = {
    "bridesName": "Ana",
    "groomsName": "Cristi",
    "date": "26 IUL",
    "year": "2025",
    "city": "Craiova",
};
const schedule = {
    "eventsTitle": "Program",
    "events": [
        {
            icon: "/icons/ceremony.png",
            title: "Ceremony",
            location: "Casa Bibescu",
            location_maps: "Casa Bibescu, Craiova",
            time: "13:00",
            address: "Parcul Nicolae Romanescu, Craiova"
        }, {
            icon: "/icons/church.png",
            title: "Church",
            location: "Biserica Mantuleasa",
            location_maps: "Biserica Mantuleasa, Craiova",
            time: "17:00",
            address: "Strada Unirii 59, Craiova"
        }, {
            icon: "/icons/party.png",
            title: "Party",
            location: "Hanul Andritei",
            location_extra: "sala Adagio",
            location_maps: "Hanul Andritei, Craiova",
            time: "19:30",
            address: "Strada Viitorului 34, Craiova"
        }
    ]
};
const location = {
    "locationTitle": "Craiova",
    "locations": [
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia voluptate quos sequi provident reprehenderit in, ad dolorem? Quasi sequi molestias a amet doloribus architecto eaque laborum quos est nostrum dolores, asperiores eveniet rem consequuntur rerum veniam repellendus porro incidunt aliquam repellat iure. Commodi eum quisquam qui? Error, rerum. Porro amet, sapiente impedit atque enim ab voluptatem nam architecto accusamus dolore voluptatibus itaque rerum tempore officiis in praesentium aspernatur ipsa voluptas deleniti aliquam mollitia culpa repellendus magnam! Neque, harum quos incidunt ipsa explicabo ut earum enim sunt debitis praesentium, voluptates, repellat est officiis eligendi cum sint? Error earum quidem illo!",
            imagePath: "/images/stock.jpg",
            name: ""
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia voluptate quos sequi provident reprehenderit in, ad dolorem? Quasi sequi molestias a amet doloribus architecto eaque laborum quos est nostrum dolores, asperiores eveniet rem consequuntur rerum veniam repellendus porro incidunt aliquam repellat iure. Commodi eum quisquam qui? Error, rerum. Porro amet, sapiente impedit atque enim ab voluptatem nam architecto accusamus dolore voluptatibus itaque rerum tempore officiis in praesentium aspernatur ipsa voluptas deleniti aliquam mollitia culpa repellendus magnam! Neque, harum quos incidunt ipsa explicabo ut earum enim sunt debitis praesentium, voluptates, repellat est officiis eligendi cum sint? Error earum quidem illo!",
            imagePath: "/images/stock.jpg",
            name: ""
        }, {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia voluptate quos sequi provident reprehenderit in, ad dolorem? Quasi sequi molestias a amet doloribus architecto eaque laborum quos est nostrum dolores, asperiores eveniet rem consequuntur rerum veniam repellendus porro incidunt aliquam repellat iure. Commodi eum quisquam qui? Error, rerum. Porro amet, sapiente impedit atque enim ab voluptatem nam architecto accusamus dolore voluptatibus itaque rerum tempore officiis in praesentium aspernatur ipsa voluptas deleniti aliquam mollitia culpa repellendus magnam! Neque, harum quos incidunt ipsa explicabo ut earum enim sunt debitis praesentium, voluptates, repellat est officiis eligendi cum sint? Error earum quidem illo!",
            imagePath: "/images/stock.jpg",
            name: ""
        }
    ]
};

const rsvp = {
    "scriptUrl": 'https://script.google.com/macros/s/AKfycbzcQI-QJLteuAeilnrSWiYjmV7KOq_vUotQxO0xPP9aiuLAXdtSHOKd8osteM1KXdgG/exec',
    "currentLocale": "ro-RO",
    "timeoutTime": 5000,
    "errorMessages": {
        "mandatoryField": "Camp obligatoriu!",
        "fullNameError": "Se accepta doar majuscule si minuscule ale alfabetului englez (fara diacritice)!",
        "numberOfPeopleError": "Se accepta un numar intre 1 si 20!",
        "phoneError": "Adaugati un numar de telefon valid (10-14 cifre)!",
        "successRspv": "Multumim pentru confirmarea prezentei la nunta noastra! O sa revenim cu un telefon in perioada 1-10 iulie.",
        "errorRspv": "Toate campurile trebuie completate!",
        "errorSubmit": "Formularul nu a putut fi trimis cu success! Daca problema persista ne puteti contacta la unul dintre numerele 0784147332 - Ana sau 0749867422 - Cristi",
    },
    "data": [
        {
            label: "Nume si prenume",
            placeHolder: "Nume si prenume",
            type: "text",
            name: "name",
        },
        {
            label: "Numar de persoane",
            placeHolder: "Numar de persoane",
            type: "number",
            name: "numberOfPeople",
        },
        {
            label: "Telefon",
            placeHolder: "Telefon",
            type: "text",
            name: "phone",
        },
        {
            label: "Trimite",
            placeHolder: "",
            type: "button",
        },
    ]

};

const navbar = {
    "pages": [
        {
            name: "Introducere",
            id: "introduction"
        },
        {
            name: "Program",
            id: "schedule"
        },
        {
            name: "Locatie",
            id: "location"
        },
        {
            name: "RSVP",
            id: "rsvp",
        },
        {
            name: "Poze",
            id: "photos"
        }
    ],
    "bridesName": "Ana",
    "groomsName": "Cristi"
};

const photos = {
    "buttonLabel": "Incarca pozele",
    "message": "Arata-ne cum te-ai distrat! Incarca pozele tale apasand butonul de mai jos."
};

export { schedule, introduction, location, rsvp, navbar, photos };