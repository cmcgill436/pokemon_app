const React = require("react");

const myStyle = {
  container: {
    backgroundColor: "#7dc9ab",
    textTransform: "capitalize",
    textAlign: "center",
    padding: "20px 0",
    border: "10px solid #1b7171",
  },
  header: {
    color: "#ffd54b ",
    fontSize: "50px",
    textShadow:
      "-1px -1px 0 #c13e5b, 1px -1px 0 #c13e5b, -1px 1px 0 #c13e5b, 1px 1px 0 #c13e5b",
  },
  h2: {
    fontSize: "30px",
    color: "#b184a3,",
    textShadow:
      "-1px -1px 0 #f37933, 1px -1px 0 #f37933, -1px 1px 0 #f37933, 1px 1px 0 #f37933",
  },
  link: {
    color: "#b184a3,",
    textShadow:
      "-1px -1px 0 #f37933, 1px -1px 0 #f37933, -1px 1px 0 #f37933, 1px 1px 0 #f37933",
  },
};

class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    console.log(pokemon, "IM HERE");
    return (
      <div style={myStyle.container}>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{pokemon.name}</h2>
        <img src={`${pokemon.img}.jpg`} />
        <br />
        <a style={myStyle.link} href="/pokemon">
          Back
        </a>
      </div>
    );
  }
}

module.exports = Show;
