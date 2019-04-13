import React, { Component } from "react";
import img1 from "./img1.png";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import "./App.css";
import Box from "./components/box";

class App extends Component {
  render() {
    return (
      <div className="box">
        <h1>Notre équipe</h1>

        <div className="bloc">
          {" "}
          <Box name="Donia Lajimi" des="Devloppement Web" source={img4} />
        </div>
        <div className="bloc">
          {" "}
          <Box name="Rayen Chniti" des="Developpement Web" source={img2} />
        </div>
        <div className="bloc">
          {" "}
          <Box name="Siwar Lahresh" des="Developpement Web" source={img3} />
        </div>
        <div className="bloc">
          {" "}
          <Box name="Zeineb Daghmoura" des="Majnouna" source={img1} />
        </div>
      </div>
    );
  }
}

export default App;
