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
  ul: {
    listStyleType: "none",
    fontSize: "30px",
  },
  link: {
    textDecoration: "none",
    color: "#f37933",
    textShadow:
      "-1px -1px 0 #385ca9, 1px -1px 0 #385ca9, -1px 1px 0 #385ca9, 1px 1px 0 #385ca9",
  },
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={myStyle.container}>
        <a href="/pokemon/new">Add another Pokemon!</a>
        <h1 style={myStyle.header}>See All The Pokemon!</h1>
        <ul style={myStyle.ul}>
          {pokemon.map((pokemon, x) => {
            console.log(pokemon);
            return (
              <li key={x}>
                <a style={myStyle.link} href={`/pokemon/${pokemon._id}`}>
                  {pokemon.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
