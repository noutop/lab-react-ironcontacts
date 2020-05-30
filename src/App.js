import React from 'react';
import './App.css';
import contacts from './contacts.json';
import _ from 'lodash';
import Contacts from './components/Contacts';


class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
    filterBy: null
  }

  addRandomHandler = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)]

    this.setState({
      contacts: this.state.contacts.concat(randomContact)
    })
  }

  // sortByNameHandler = () => {
  //   this.setState({
  //     contacts: _.sortBy(this.state.contacts, 'name')
  //   })
  // }

  // sortByPopularityHandler = () => {
  //   this.setState({
  //     contacts: _.sortBy(this.state.contacts, 'popularity').reverse()
  //   })
  // }

  sortHandler=(name)=>{
    this.setState({
      filterBy:name
    })
  }

  deleteHandler = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id)
    })
  }

  render() {
    let artists=this.state.contacts;
    if(this.state.filterBy==='name'){
      artists=_.sortBy(this.state.contacts,'name')
    }else if(this.state.filterBy==='popularity'){
      artists=_.sortBy(this.state.contacts,'popularity').reverse()
    }

    return (
      <div className="App">
        <button onClick={this.addRandomHandler}> Add Random Contact</button>
        <button onClick={()=>this.sortHandler('name')}>Sort by name</button>
        <button onClick={()=>this.sortHandler('popularity')}>Sort by popularity</button>

        <table>
          <tbody>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>

            {artists.map((contact) => (
              <Contacts key={contact.id} picture={contact.pictureUrl} name={contact.name} popularity={contact.popularity} id={contact.id} deleteHandler={this.deleteHandler} />
            ))}
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
