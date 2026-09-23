import "./App.css";
import players from "./footballers.json";
import Modal from "./components/Modal";
import InputInfo from "./components/InputInfo";
import PlayerList from "./components/PlayerList";
import { Component } from "react";

class App extends Component {
  state = {
    players,
    isModal: null,
    filter: "",
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

  handleChange = (text) => {
    this.setState({
      filter: text,
    });
  };

  render() {
    const {players,filter,isModal}=this.state
    const filteredPlayers = players.filter(({ name }) => {
     
      return name
        .toLowerCase()
        .includes(filter.toLowerCase().trim());
    });
    return (
      <>
        <h1>Popular Football Players</h1>
        <InputInfo onFilter={this.handleChange} />
        <PlayerList playerData={filteredPlayers} onDelete={this.handleDelete} onImage={this.handleClickOnPlayer}/>
        {this.state.isModal && (
          <Modal
            closeModal={this.handleCloseModal}
            selectedImg={isModal}
          />
        )}
      </>
    );
  }
}

export default App;
