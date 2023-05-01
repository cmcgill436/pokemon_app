const React = require("react");

const myStyle = {
  color: "#ffd54b ",
  backgroundColor: "#7dc9ab",
  textAlign: "center",
  textShadow:
    "-1px -1px 0 #c13e5b, 1px -1px 0 #c13e5b, -1px 1px 0 #c13e5b, 1px 1px 0 #c13e5b",
};

class Index extends React.Component {
  render() {
    const { fruits } = this.props;
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
      </div>
    );
  }
}

module.exports = Index;
