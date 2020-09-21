import React from 'react';
import Person from './Person';

function PersonsList({data, deletePerson}) {//primamo podatke iz App.js i uzimamo {data} koje je = {naziv atributa prosledjen iz <PersonsList />} ... ovo je ono data sto ispod mapiramo
    const ListOfPersons = data.map(person=>{ // atribut person moze da ima bilo koje ime
        return (
            <Person deletePerson={deletePerson} person={person} key={person.id}/> /* i ovde ime oba atributa moze da bude drugacije */
        )
    })
    return (
        <div>
            {ListOfPersons}
        </div>
    )
}

export default PersonsList;
