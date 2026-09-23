import { Component } from "react";

class PlayerList extends Component{
    render(){
        const {onImage,onDelete}= this.props
        return(
            <ul>
          {this.props.playerData.map(({ id, name, club, photo }) => {
            return (
              <li key={id}>
                <img
                  onClick={()=> onImage(photo)}
                  src={photo}
                  alt={name}
                />
                <h2>{name}</h2>
                <p>{club}</p>
                <button onClick={()=> onDelete(id)} type="button">
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        )
    }
}

export default PlayerList