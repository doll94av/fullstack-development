import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(i) {
    //change both <bodyFeild or another div added later> as well as the PageDescription and Project descriptoon
    console.log('triggered');


  }
  render() {
    return (
      <button name={this.props.name} onClick={this.props.buttonClick}>{this.props.name}</button>
    );
  }
}


class BodyFeild extends React.Component {

  //default text
  state = {
    generalText: 'Welcome to my portfolio! I put together this small site to demonstrate some of my knowledge as well as grow my skillset. This site is built using MERN as a stack, when I started this project I had little frontend and backend knowlege. Spending time here has helped teach me how different components link together as well as how to manage a fullstack project from start to finish (though this is ever growing). Please feel free to check it out, any advice or comments are always welcome! All of my contact details will be available on the contact page.',
    projectText: '',
    codeText: ''
  }

  //what we want to do is dynamically grab the relevant information such as grabbing information from the mongo backend!!!
  grabNewText(event) {
    var generalText = ''
    var projectText = ''
    var codeText = ''

    //test logic
    //currently this works with no spaces (might want to add logic to trim spaces if I really care about it)

    fetch('http://localhost:3001/'+ event.target.name)
      .then(response => response.json())
      .then(data => console.log(data));
    this.setState({
      generalText: generalText,
      projectText: projectText,
      codeText: codeText
    });

    //this is the button that was clicked
    console.log(event.target.name)
  }


  render() {

    var buttonList = ["Home", "Contact", "WebScraper", "MongoBackend"];
    for(var i = 0; i < buttonList.length; i++) {
      buttonList[i] = <Buttons name={buttonList[i]} buttonClick={this.grabNewText.bind(this)} />
    };
    const listedButtons = buttonList.map((button) =>
     button
    );
    return (
      <div id="bodyFeild">
        <h1 id="banner">Welcome to my Portfolio</h1>
        <div id="navBar">
        {listedButtons}
        </div>
        <div id="generalDescription">
          {this.state.generalText}
        </div>
        <div id="projectDescription">
          {this.state.projectText}
        </div>
        <div id="codeSnippet">
          {this.state.codeText}
        </div>

      </div>
    );
  }
}

ReactDOM.render(
  <BodyFeild />,
  document.getElementById('root')
)
