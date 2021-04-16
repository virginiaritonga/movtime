import React from 'react';
import axios from 'axios';

export default class Quotes extends React.Component {
    adviceRef = React.createRef();
      state = {
      advice: '',
    }
  
    componentDidMount() {
      this.fetchAdvice();
    }
  
    fetchAdvice = () => {
      axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
          const { advice } = response.data.slip;
  
          this.setState({ advice });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    render() {
      return (
        <div className="app">
          <div className="container">
            <p className="quotes"><i>"{this.state.advice}"</i></p>
          </div>
        </div>
      );
    }
  }
