const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Add another Pokemon!</h1>
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" />
          Img: <input type="text" name="img" />
          <input type="submit" value="Add Pokemon" />
        </form>
      </div>
    );
  }
}

module.exports = New;
