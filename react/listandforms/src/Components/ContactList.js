import React, { Component } from 'react';
import {Table,Button} from 'semantic-ui-react';

export default class ContactList extends Component{
  constructor(props){
    super(props);
    this.state = {
      removeId : 0
    }
  }
  remove = (id) =>{
    let tempId = parseInt(id,10);
    if(this.state.removeId===0){
      this.setState({
        removeId:tempId
      })
      return;
    }
    if(tempId===this.state.removeId){
    this.props.remove(id);
    }
    this.setState({
      removeId:0
    })
  
  }
  render(){
    if(this.props.list.length === 0){
      return ( <h2>Nothing on the list</h2>)
    }else{
    let listItems = this.props.list.map(item =>{
      let buttonText="Remove";
      let buttonColor ="gray";
      if(item.id===this.state.removeId){
        buttonText="Confirm";
        buttonColor="red";
      }
      return <Table.Row key = {item.id}>
        <Table.Cell>{item.firstname}</Table.Cell>
        <Table.Cell>{item.lastname}</Table.Cell>
        <Table.Cell>{item.address}</Table.Cell>
        <Table.Cell>{item.email}</Table.Cell>
        <Table.Cell>{item.phone}</Table.Cell>
        <Table.Cell><Button onClick={()=> this.remove(item.id)}>{buttonText}</Button></Table.Cell>
      </Table.Row>
    })

    return(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Remove</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {listItems}
        </Table.Body>
      </Table>
    );
  }
}
}
