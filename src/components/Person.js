import React from 'react';

// const Person = ({data}) => { // ovako smo poceli prenego sto smo poslali novi props
    const Person = ({person, deletePerson}) => { // mora ovako jer smo poslali person, a kasnije i deletePerson ( !!! pomocu person atributa iz ListOfPersons)
    return (
        <div className="card">
        <h3>{person.name}</h3>
        <h3>{person.job}</h3>
        <h3>{person.gender}</h3>
        <button className="delete-btn" onClick={ ()=>{ deletePerson(person.id) } }>Delete</button> {/* !!! MOR ARROW incace da je obicna f-ja (koja nije unutar arrow)pokrenula bi se bez klika */}
        </div>
    )
}
z

export default Person;

/* 

// const Person = (props) => { // FBC
const Person = ({data}) => { // FBC // !!! Desruktuiranje propsa

    // console.log(props); // !!! Props je data iz STEJTA (iz App.js) koju smo poslali putem atributa (data)

    // const data = props.data; // !!! ako hocemo da sacuvamo props u promenljivu
    // console.log(data);

    // const myStyles = { // inline CSS !!!
    //     card : {
    //         background : "tomato",
    //         color : "white",
    //         fontSize : "25px",
    //         textAlign : "center",
    //         width : "400px"
    //     }
    // }

    // const data = [ // svaki obj mora da ima neki key, pa smo stavili id
    //     { name: "Nikola", job: "developer", gender: "male",id:1 },
    //     { name: "Senka", job: "artist", gender: "female",id:2 },
    //     { name: "Kosta", job: "engineer", gender: "male",id:3 }
    // ];

    //novi array
    const listOfPersons = data.map(person => { // moze da se ela ova f-ja ubaci umesto jsx {listOfPersons}, ali je bolje da bude odvojeno
        return (
            <div className="card" key={person.id}>
                <h3>{person.name}</h3>
                <h3>{person.job}</h3>
                <h3>{person.gender}</h3>
            </div>
        )
    })

    return (
        <div>
            {listOfPersons}
        </div>

    )

    //     return (
    //         // <div style={myStyles.card}> // inline CSS
    //         <div className="row">
    //             <div className="col-4">
    //                 <div className="card">
    //                     <div className="card-header">
    //                         <h3>Nikola</h3>
    //                     </div>
    //                     <div className="card-body">
    //                         <h3>developer</h3>
    //                     </div>
    //                     <div className="card-footer">
    //                         <h3>male</h3>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>

    //     )
}

export default Person; */