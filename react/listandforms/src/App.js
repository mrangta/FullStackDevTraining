import React, { Component } from 'react';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[],
      id:100
    }
  }

  addToList = (contact) =>{
    contact.id=this.state.id;
    let tempId = this.state.id+1;
    let tempList = this.state.list.contact(contact);
    this.setState({
      list: tempList,
      id: tempId
    },()=>{
      console.log(this.state.list);
    });
  }

  removeFromList = (id) => {
    let tempId = parseInt(id,10);
    let tempList=[];
    for (let i=0; i<this.state.list.length; i++){
      if(this.state.list[i].id!==tempId){
        tempList.push(this.state.list[i]);
      }
    }
    this.setState({
      list: tempList
    })
  }
  render() {
    return (
      <div className="App">
        <div style={{width:600, margin: "0 auto",textAlign: "left", padding:"10", backgroundColor:"#fff"}}>
        <ContactForm addToList={this.addToList}/>
        </div>
        <ContactList list={this.state.list} remove={this.removeFromList}/>
      </div>
    );
  }
}

export default App;
