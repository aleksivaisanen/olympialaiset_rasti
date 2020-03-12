import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    persoona: "",
    ominaisuus: "",
    tehtava: ""
  }

  componentDidMount = () => {
    var persoonaList = ["suomenruotsalainen", "puliukko", "nörtti", "lääkäri", "aikuisopiskelija", "tuutori", "crossfittaaja", "teekkari", "humanisti", "puistokemisti"]
    var ominaisuusList = ["besserwisser", "hölöttäjä", "vitsiniekka", "kevytsarjalainen", "ensikertalainen", "isäm maam puallustaja,,!11", "vegaani", "lihansyöjä", "lihapää", "perverssi"]
    var tehtavaList = ["pyydä laulua jatkuvasti", "huutele törkeyksiä puheenvuorojen päälle", "pidä pitkä, tylsä ja paikallaan polkeva puheenvuoro", "haasta riitaa",
      "keksi mahdollisimman typerä aasinsilta", "pyydä laulua", "suolaa toinen sitsaaja", "valita ruoasta", "kehu ruokaa", "kerro vitsi improvisoidulla saksan kielellä", "riko etikettiä törkeästi"]
    this.setState({
      persoona: persoonaList[Math.floor(Math.random() * persoonaList.length)],
      ominaisuus: ominaisuusList[Math.floor(Math.random() * ominaisuusList.length)],
      tehtava: tehtavaList[Math.floor(Math.random() * tehtavaList.length)]
    })
  }


  render() {
    return (
      <div className="App">
        <p>
          <b>Persoona:</b> {this.state.persoona}
        </p>
        <p>
          <b>Ominaisuus:</b> {this.state.ominaisuus}
        </p>
        <p>
          <b>Tehtävä:</b> {this.state.tehtava}
        </p>

      </div>
    );
  }

}

export default App;
