import React from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router-dom";

class ContactPage extends React.Component {
  state = {
    value: "",
    isEmpty: true
  };
  handleChange = e => {
    if (e.target.value.length > 0) {
      this.setState({
        value: e.target.value,
        isEmpty: false
      });
    } else {
      this.setState({
        value: e.target.value,
        isEmpty: true
      });
    }
  };
  handleSubmit = e => {
    e.preventDeafault();
    this.setState({
      value: "",
      isEmpty: true
    });
  };
  render() {
    return (
      <div className="contact">
        <form>
          <h3>Napisz do nas</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Wpisz wiadomość..."
          ></textarea>
          <button onClick={this.handleSubmit}>Wyślij</button>
        </form>
        <Prompt
          when={!this.state.isEmpty}
          message={
            "Masz niewypełniony formularz, czy na pewno chcesz opuścić tę stronę"
          }
        />
      </div>
    );
  }
}

export default ContactPage;
