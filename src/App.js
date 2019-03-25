import React, { Component } from "react";
import "./App.css";

const Contacts = props => {
  return (
    <div>
      <div id="fullname">
        {props.FirstName} {props.LastName}
      </div>
      {props.Birthday}
      <br />
      {props.Telephone}
      <br />
      <hr />
    </div>
  );
};

class App extends Component {
  state = {
    contactlist: [
      {
        FirstName: "Cathy",
        LastName: "Pierce",
        Birthday: "9/14/1996",
        Telephone: "200-910-8132"
      },
      {
        FirstName: "Alfonso",
        LastName: "Cooley",
        Birthday: "8/10/1973",
        Telephone: "200-657-9362",
        visibility: false
      },
      {
        FirstName: "Victor",
        LastName: "Gordon",
        Birthday: "8/3/1970",
        Telephone: "200-661-9407"
      },
      {
        FirstName: "Colleen",
        LastName: "Wright",
        Birthday: "10/28/1967",
        Telephone: "200-250-7949"
      },
      {
        FirstName: "James",
        LastName: "Johnston",
        Birthday: "5/11/1972",
        Telephone: "200-645-3176"
      },
      {
        FirstName: "Anna",
        LastName: "Reyes",
        Birthday: "9/10/1975",
        Telephone: "200-707-8670"
      }
    ]
  };

  delNameHandler = contactIndex => {
    const updateContact = [...this.state.contactlist];
    updateContact.splice(contactIndex, 1);
    this.setState({
      contactlist: updateContact
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Contacts</h1>

        {this.state.contactlist.map((cont, index) => {
          return (
            <Contacts
              click={this.delNameHandler.bind(this, index)}
              FirstName={cont.FirstName}
              LastName={cont.LastName}
              Birthday={cont.Birthday}
              Telephone={cont.Telephone}
              key={cont.Telephone}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
