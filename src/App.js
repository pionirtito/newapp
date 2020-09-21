// !!!!!!!!!! Ctrl+Shif+P > Open Settings (JOSN) > "emmet.includeLanguages": {
//     "javascript": "javascriptreact"
// } => EMMET PREPOZNAJE TAGOVE UNUTAR REACTA (JSX)


import React, { Component } from 'react'; // { destructuring }
// import Person from './components/Person'; // sluzilo kad smo probali za 1 person
import PersonsList from './components/PersonsList';

// styles - 3. nacin
import "./App.css"; // ./ => jer su css i js u istom folderu ... na ovaj nacin su stilovi injectovanu i headu
import NewPerson from './components/NewPerson';

// !!! CLASS za razliku od FBC, ima STATE (objekat koji predstavlja public property)
// class App extends React.Component { // !!! PRE DESTRUCTURINGA U IMPORTU
class App extends Component {

    state = {
        name: 'Nikola',
        data: [ // svaki obj mora da ima neki key, pa smo stavili id
            { name: "Nikola", job: "developer", gender: "male", id: 1 },
            { name: "Senka", job: "artist", gender: "female", id: 2 },
            { name: "Kosta", job: "engineer", gender: "male", id: 3 }
        ]
    }

    //ova metoda sluzi za prosledjivanje state-a u newPerson
    insertNewPerson = (person) => { // person (bilo koji naziv) prosledjujemo u state od NewPerson
        // console.log("App component:");
        console.log(person);

        person.id = Math.floor(Math.random() * (10000 - 10) + 10); // od 10 do 10k
        // this.state.data.push(person); // !!! nije ispravno jer bi gazilo state !!!
        // let dataCopy = this.state.data.concat(person) // CONCAT nacin
        /*
        let dataCopy = [...this.state.data,person]; // REST OPERATOR nacin DUZI
        this.setState({
            data: dataCopy
        })
        */


        this.setState({
            data: [...this.state.data, person] // REST OPERATOR nacin KRACI
        })
    }

    /*     changeStateName = ()=>{// f-ja za event
            // this.state.name = "Milos"; // NE ovako jer bi to znacilo da direktno menjamo STATE
            this.setState({
                name: "Milos"
            })
        } */

    deletePerson =(id)=> {//dugme salje id
        let filteredData = this.state.data.filter(el =>{
            return el.id !== id; // !!! Da li el nije u array => ako jeste onda flase, znaci brise na klik
        })
        this.setState({
            data: filteredData
        })
    }

    render() {
        return (
            <div>
                {/* <h1>{this.state.name}</h1>
                <button onClick={this.changeStateName}>change name</button>
                <Person data={this.state.data}/> */}
                <PersonsList deletePerson={this.deletePerson} data={this.state.data} /> {/* saljemo podatke u PersonsList komponentu ... dva atributa jer smo kasnije dodali i deletePerson*/}
                <NewPerson insertNewPerson={this.insertNewPerson} />
            </div>
        )
    }





    // render() { // class component mora da ima render
    //     return (
    //         // <h1>App Component</h1>
    //         <div>
    //             <Person />
    //         </div>
    //     )
    // }
}

export default App;

/*
// Primer za DESTRUCTURING
const person = {
    firstName : "Nikola",
    lastName : "Savic"
}

// const firstName = person.firstName;
// const lastName = person.lastName;
// PROSTIJE = DESTRUCTURING
const {firstName, lastName} = person;
*/
