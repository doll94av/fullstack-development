import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import portrait from './photoOfMe.png';


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

class Home extends React.Component {
constructor(props) {
  super(props)
}
  render() {
    return (
        <div>
        <div id="generalDescription">
          <h1>Home</h1>
        </div>
        <div id="projectDescriptionHome">
          <div id="homeleft">
          <p id="homeProject">Hello! My name is Austin Doll, I graduated from Central Michigan University in 2018 with a major in Computer Science. I have spent the last three years working at Dynatrace as both a Consultant and a Customer Solutions Engineer. During my time in these roles I have worked with just about every cloud provider that is available along with becoming certified in both Kubernetes and Cloud Foundry. In the future I hope to be in a position to use my knowledge of APM software along with container orchestration to move into a cloud or platform engineering role. The wonderful thing about being in my current position is that I have been allowed to be exposed to just about every platform and technology under the sun. Coming out of college I did not have a firm idea of what I wanted to do within the Computer Science field, with so many choices it was impossible to know without giving something a shot. Over time, I found myself more drawn to infrastructure, in particular cloud infrastructure. From there it made sense to me to get familiar with containers as that seems to be the trend lately. Now, having a strong troubleshooting foundation and a firm understanding of how all of the pieces fit together I feel confident and ready to take on any challenges that may come my way.</p>
          <p>Outside of work, I enjoy Disc Golfing and riding my longboard during the summer and praying the cold away during the winters. One of the hobbies that takes up the most of my time is cooking! I love cooking just about any cuisine I can get my hands on with my current favorites being Italian and Thai style noodles. Along with all of this, I am an avid board game fanatic and absolutely love getting together with some friends and trying out something new.</p>
          </div>
          <div id="homeright"><img src={portrait} alt="Photo of Austin Doll" id="portrait" /></div>
        </div>
        <div id="additonalText">
        </div>
      </div>
    );
  }
}


class Portfolio extends React.Component {
constructor(props) {
  super(props)
}
  render() {
    return (
        <div>
        <div id="generalDescription">
          <h1>Portfolio Project</h1>
        </div>
        <div id="projectDescriptionHome">
        <p>I set off to learn how a full stack application is built and developed. I wanted to build something of my own that would give me confidence in my knowledge of how applications work as well as learning more about how tools like GitHub can be used to control how my app is versioned and built. When I started working on this project I had essentially no knowledge of JavaScript or how to connect apps from frontend to database. This project most likely will be ever evolving as I learn new technologies and improve the general layout and style of this website along with adding new projects as I bring them to competition. I also have a passion for Kubernetes and want to become a defacto expert in it, I started by getting Kubernetes Administrator certified and I am using a single node cluster to run this application. By doing this, I learned how different components can reach out to each other in a kube-manner and how microservices and applications can be efficiently ran in the cloud/containerized. If you have any questions or want to get ahold of me for an opportunity please check out my contact page and reach out however you prefer!</p>
        </div>
        <div id="additonalText">
        <a href="https://github.com/doll94av/fullstack-development">Check out this project on GitHub</a>
        </div>
      </div>
    );
  }
}

class Contact extends React.Component {
constructor(props) {
  super(props)
}
  render() {
    return (
        <div>
        <div id="generalDescription">
          <h1>Contact Information</h1>
        </div>
        <div id="projectDescription">
        <p>Please feel free to contact me using any of the below:</p>
        <p>Email: austindoll94@gmail.com</p>
        <p>Phone: (248) 820-9684</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/austindoll40/">Linkedin.com/austindoll40</a></p>
        </div>
      </div>
    );
  }
}


//most of the main work is done here, construct the button nav bar as well as create the text feilds that are filled using the backend
class BodyFeild extends React.Component {
  //default text
  state = {
    generalText: <h1>Welcome!</h1>,
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
    this.clickedHome=event.target.name;
  }


  render() {

    //if there is a need to add a new button, all that should be needed is to add it to this list and create a get endpoint in the node Backend
    //essentially we cycle through the array and add the name property and assign it the bodyFeild getNewText for its onClick
    var buttonList = ["Home", "Contact", "WebScraper", "Portfolio", "Resume"];
    for(var i = 0; i < buttonList.length; i++) {
      buttonList[i] = <Buttons name={buttonList[i]} buttonClick={this.grabNewText.bind(this)} class="styledButton"/>
    }
    const listedButtons = buttonList.map((button) =>
     button
    );
    var clickedHome = "Home";
    console.log(this.clickedHome);
    if(clickedHome == this.clickedHome){

      return (

        //simply place relevant divs, within each div set the relevant state to place text
        //the state is changed within the grabNewText OnClick, all data is pulled from the mongoDB that backs this
        <div id = "bodyFeild">
        <div id="navBar">
        {listedButtons}
        </div>
        <Home />
        </div>
      );
    }
    else if("Contact" == this.clickedHome){

      return (
      //simply place relevant divs, within each div set the relevant state to place text
      //the state is changed within the grabNewText OnClick, all data is pulled from the mongoDB that backs this
      <div id = "bodyFeild">
        <div id="navBar">
         {listedButtons}
        </div>
        <Contact />
      </div>
      );
    }
    else if("Portfolio" == this.clickedHome){

      return (
      //simply place relevant divs, within each div set the relevant state to place text
      //the state is changed within the grabNewText OnClick, all data is pulled from the mongoDB that backs this
      <div id = "bodyFeild">
        <div id="navBar">
         {listedButtons}
        </div>
        <Portfolio />
      </div>
      );
    }
    else return (
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
        <div id={this.state.page}>
          <pre>{this.state.codeText}</pre>
        </div>
        <div id="additonalText">
          {this.state.additonalText}
        </div>

      </div>
    );
  }
}

ReactDOM.render(
  <BodyFeild />,
  document.getElementById('root')
)
