import "./App.css";
import players from "./footballers.json";
import Modal from "./components/Modal";
import { Component } from "react";

class App extends Component {
  state = {
    players,
    isModal: null,
  };

  handleDelete = (id) => {
    this.setState((prev) => ({
      players: prev.players.filter((player) => player.id !== id),
    }));
  };

  handleClickOnPlayer = (url) => {
    this.setState({
      isModal: url,
    });
  };

  handleCloseModal = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.setState({
        isModal: null,
      });
    }
  };

  render() {
    return (
      <>
        <h1>Popular Football Players</h1>
        <ul>
          {this.state.players.map(({ id, name, club, photo }) => {
            return (
              <li key={id}>
                <img
                  onClick={() => this.handleClickOnPlayer(photo)}
                  src={photo}
                  alt={name}
                />
                <h2>{name}</h2>
                <p>{club}</p>
                <button onClick={() => this.handleDelete(id)} type="button">
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        {this.state.isModal && (
          <Modal
            closeModal={this.handleCloseModal}
            selectedImg={this.state.isModal}
          />
        )}
      </>
    );
  }
}

export default App;
