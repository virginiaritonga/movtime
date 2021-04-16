import React from "react";

export default class Greetings extends React.Component {
  state = {
    greeting: "",
  };

  componentDidMount() {
    this.getHour();
  }

  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    this.setState({
      hour,
    });

    if (hour < 12) {
      this.setState({
        greeting: "morning",
      });
    }
    if (hour >= 12 && hour <= 18) {
      this.setState({
        greeting: "afternoon",
      });
    }
    if (hour >= 18 && hour <= 24) {
      this.setState({
        greeting: "evening",
      });
    }
  };

  render() {
    const { greeting } = this.state;
    return (
      <div className="greeting">
        <h2>{`Good ${greeting},`}</h2>
        <p>Let's get back to your movie time! &#x1F60a;</p>
      </div>
    );
  }
}
