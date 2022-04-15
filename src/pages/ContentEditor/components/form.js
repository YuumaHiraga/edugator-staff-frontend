import { Component } from "react";

/*
const RegistrationForm = (html) => {
  const paperStyle = { padding: "0 15px 40px 15px", width: 250 };
  const btnStyle = { marginTop: 10 };
  const inputStyle = {
    borderStyle: "solid",
    marginBottom: 10,
    fontSize: 15,
    paddingLeft: 10,
    paddingTop: 8,
    paddingBottom: 8,
    width: 240,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 4,
  };
  const labelStyle = { display: "block", marginBottom: 1 };
};

*/

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      visibility: "react",
    };
  }
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(JSON.stringify(this.state, null, 2));
    event.preventDefault(); //Prevents page fresh on submit, disable if needed
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Content Title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleInput}
          />
        </div>
        <div>
          <label>Visibility</label>
          <select
            name="visibility"
            value={this.state.visibility}
            onChange={this.handleInput}
          >
            <option value="public">Public (Visible to Students)</option>
            <option value="private">Private (Staff Only)</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default RegistrationForm;