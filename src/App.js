import React, { Component } from "react";
import "./App.css";
import { Button } from "react-bootstrap";

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
    ],
    serch: "",
    newBirth: "",
    newTel: "",
    newfname: "",
    newlname: ""
  };

  addNameHandler = () => {
    console.log(this.state.newfname);
    const n = {
      FirstName: this.state.newfname,
      LastName: this.state.newlname,
      Birthday: this.state.newBirth,
      Telephone: this.state.newTel
    };

    let adder = [...this.state.contactlist, n];

    this.setState({ contactlist: adder });
    this.setState({ newfname: "" });
    this.setState({ newlname: "" });
    this.setState({ newTel: "" });
    this.setState({ newBirth: "" });
  };

  delNameHandler = contactIndex => {
    const updateContact = [...this.state.contactlist];
    updateContact.splice(contactIndex, 1);
    this.setState({
      contactlist: updateContact
    });
  };

  render() {
    let filterer = this.state.contactlist.filter(contact => {
      return (
        contact.FirstName.toLocaleLowerCase().indexOf(
          this.state.serch.toLocaleLowerCase()
        ) !== -1
      );
    });
    return (
      <div className="App">
        <h1>Contacts</h1>
        <input
          type="text"
          placeholder="search"
          onChange={e => {
            this.setState({ serch: e.target.value });
          }}
        />

        {filterer.map((cont, index) => {
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
        <div>
          <form>
            <Button
              type="button"
              variant="success"
              onClick={this.addNameHandler}
            >
              add Contact
            </Button>
            <br />
            <input
              type="text"
              placeholder="First Name"
              value={this.state.newfname}
              onChange={e => {
                this.setState({
                  newfname: e.target.value
                });
              }}
              required
            />
            <br />
            <input
              type="text"
              placeholder="Last Name"
              value={this.state.newlname}
              onChange={e => {
                this.setState({
                  newlname: e.target.value
                });
              }}
            />
            <br />
            <input
              type="text"
              placeholder="Birthday"
              value={this.state.newBirth}
              onChange={e => {
                this.setState({
                  newBirth: e.target.value
                });
              }}
            />
            <br />
            <input
              type="text"
              value={this.state.newTel}
              placeholder="Telehone"
              required
              onChange={e => {
                this.setState({
                  newTel: e.target.value
                });
              }}
            />
            <br />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
