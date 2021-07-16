import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class ButtonBar extends React.Component {
  render() {
     //list all buttons, load them into a single array after creation then add them to a map to send to the DOM
     var buttonList = ["Home", "Contact", "Web Scraper", "Mongo Backend"];
     for(var i = 0; i < buttonList.length; i++) {
       buttonList[i] = <Buttons name={buttonList[i]} />
     };
     const listedButtons = buttonList.map((button) =>
      button
     );

    return(
      <div id="navBar">
      {listedButtons}
      </div>
    );
  }
}


class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(i) {
    //change both <bodyFeild or another div added later> as well as the PageDescription and Project descriptoon
    console.log('triggered');
    PageDescription()
  }
  render() {
    return (
      <button name={this.props.name} onClick={this.handleClick}>{this.props.name}</button>
    );
  }
}

class PageDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Default content"
    }
  }
  render(i) {
    return (
      <div id="generalDescription">
      <p name="description">{this.state.message}</p>
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

        <PageDescription />
      </div>
    );
  }
}

ReactDOM.render(
  <BodyFeild />,
  document.getElementById('root')
)
