import React, { Component } from 'react'
// ovo ce bit class based komponenta jer baratamo sa podacima
import "../css/NewPerson.css";



class NewPerson extends Component {

    state = {
        name: "",
        job: "",
        gender: ""
    }

    /* // primer sa vise linija koda
    setValues = (e) => {
        // let id = e.target.id; // uzima id od placeholdera prilikom kucanja
        this.setState({
            // [id] : e.target.value // !!! [znaci da ne trazi string nego vrednost varijable (name, job ili gender) u zavisnosti od toga sta kliknemo]
            [e.target.id] : e.target.value // !!! moze i ovako => ne mora da se pravi nova id varijabla
        })
    }
    
    */
    
   //primer sa jednom linijom koda ... !!! vidi obrazlozenje gore sa vise lin
    setValues = e => this.setState({[e.target.id] : e.target.value});



    /*
    // Pre setValues ... imali smo posebnu medtodu za svako polje
    // !!! ARROW f-ja ne binduje THIS (npr na klik ne prestavlja event vec klasu u kojoj se nalazi) => setName(){....} ne bi radilo => zato i koristomo AF
    setName = (e) => {
        let newName = e.target.value;
        this.setState({
            name: newName
        })
    }

    setJob = (e) => {
        let newJob = e.target.value;
        this.setState({
            job: newJob
        })
    }

    setGender = (e) => {
        let newGender = e.target.value;
        this.setState({
            gender: newGender
        })
    }

    */

    save = (e) => {// !!! i FBS imaju PROPS po defaultu
        e.preventDefault();
        // console.log(this.state);
        this.props.insertNewPerson(this.state);// !!! person atribut iz insertNewPerson metode iz App saljemo u this.state

    }

    render() {
        return ( // ID-jeve smo dodali kad je napravljen setValues, kako bi metodada znala koje polje treba da menja
            <div>
                {/* <h1>Name: {this.state.name}</h1> */}
                <form action="" onSubmit={this.save}> {/* action ostaje prazno jer nas forma ne vodi nigde (single page aplikacija) */}
                    <input className="field" id="name" onChange={this.setValues} type="text" placeholder="name" /><br />
                    <input className="field" id="job" onChange={this.setValues} type="text" placeholder="job" /><br />
                    <input className="field" id="gender" onChange={this.setValues} type="text" placeholder="gender" /><br />
                    <button className="btn" type="submit">Save</button>

                </form>
            </div>
        )
    }
}

export default NewPerson;