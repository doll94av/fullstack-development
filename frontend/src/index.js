import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class ButtonBar extends React.Component {
  render() {
    return(
      <div id="navBar">
      <button>Home</button>
      <button>Contact</button>
      <button>web scraper</button>
      </div>
    );
  }
}

class BodyFeild extends React.Component {
  render() {
    return (
      <div id="bodyFeild">
        <h1 id="banner">Welcome to my Portfolio {this.props.name}</h1>
        <ButtonBar />
        <p> Goals I want to accomplish</p>
        <ul>
          <li>add a box within this box for the code</li>
          <li>add a Sidebar menu</li>
          <li>find a way to render new information within the feild based on the button click</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <BodyFeild />,
  document.getElementById('root')
)
