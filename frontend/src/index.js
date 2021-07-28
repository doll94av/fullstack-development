import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



//define button class -- set the name and onclick that we inherit from the bodyFeild class.
class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  //will need to test but I do believe that this will be deprecated and done a seperate way
  handleClick(i) {
    //change both <bodyFeild or another div added later> as well as the PageDescription and Project descriptoon

  }
  render() {
    return (
      <a href="/#" name={this.props.name} onClick={this.props.buttonClick} class="styledButton">{this.props.name}</a>
    );
  }
}


//most of the main work is done here, construct the button nav bar as well as create the text feilds that are filled using the backend
class BodyFeild extends React.Component {
  //default text
  state = {
    generalText: 'Welcome!',
    projectText: 'Welcome to my portfolio! Thank you for stopping by to check it out. This is an ever evolving website as I dive into the (MERN) stack. I initally started with only a basic understanding of web development but have slowly been building my knowledge based as I have worked on this project.',
    codeText: '',
    additonalText: 'take your shoes off and stay awhile :D'
  }

  //what we want to do is dynamically grab the relevant information such as grabbing information from the mongo backend!!!
  grabNewText(event) {

    //currently this works with no spaces (might want to add logic to trim spaces if I really care about it)
    //Strucutre in the backend mimics what we have in the frontend so sending data back and fourth is clear
    //fetch('http://localhost:3001/'+ event.target.name)
    fetch('http://35.172.216.189:32392/'+ event.target.name)
      .then(response => response.json())
      .then(data =>
        this.setState({
          generalText: <h1>{data.generalText}</h1>,
          projectText: data.projectText,
          codeText: data.codeText,
          additonalText: data.additonalText,
          page: event.target.name
        }),
      );

    //this is the button that was clicked
    console.log(event.target.name)
  }


  render() {

    //if there is a need to add a new button, all that should be needed is to add it to this list and create a get endpoint in the node Backend
    //essentially we cycle through the array and add the name property and assign it the bodyFeild getNewText for its onClick
    var buttonList = ["Home", "Contact", "WebScraper", "MongoBackend", "Resume"];
    for(var i = 0; i < buttonList.length; i++) {
      buttonList[i] = <Buttons name={buttonList[i]} buttonClick={this.grabNewText.bind(this)} class="styledButton"/>
    }
    const listedButtons = buttonList.map((button) =>
     button
    );
    return (

      //simply place relevant divs, within each div set the relevant state to place text
      //the state is changed within the grabNewText OnClick, all data is pulled from the mongoDB that backs this
      <div id="bodyFeild">
        <div id="navBar">
        {listedButtons}
        </div>
        <div id="generalDescription">
          {this.state.generalText}
        </div>
        <div id="projectDescription">
          {this.state.projectText}
        </div>
        <div id="additonalText">
          {this.state.additonalText}
        </div>
        <div id={this.state.page}>
          <pre>{this.state.codeText}</pre>
        </div>

      </div>
    );
  }
}

ReactDOM.render(
  <BodyFeild />,
  document.getElementById('root')
)
