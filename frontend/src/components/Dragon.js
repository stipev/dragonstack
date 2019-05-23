import React from "react";
import DragonAvatar from "./DragonAvatar";
import { Button } from "react-bootstrap";

const DEFAULT_DRAGON = {
  dragonId: " ",
  birthdate: " ",
  nickname: " ",
  generationId: " ",
  traits: []
};

class Dragon extends React.Component {
  state = {
    dragon: DEFAULT_DRAGON
  };
  componentDidMount() {
    //this.fetchDragon();
  }

  fetchDragon = () => {
    fetch("http://localhost:3000/dragon/new").then(response => {
      response
        .json()
        .then(json => {
          //console.log(json.dragon.traits);
          this.setState({ dragon: json.dragon });
        })
        .catch(error => console.error(error));
    });
  };

  //getDragon() {}
  render() {
    //console.log(this.state.dragon);
    return (
      <div>
        <Button onClick={this.fetchDragon}>New dragon</Button>
        <DragonAvatar dragon={this.state.dragon} />
      </div>
    );
  }
}

export default Dragon;
