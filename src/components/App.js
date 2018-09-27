import React from 'react';
import Thumbs from './Thumbs';
import Info from './Info';
import Search from './Search';

class App extends React.Component {
  constructor() {
    super();

    
    this.state ={
              image: "",
              imageArray:[],
              mainImage: "",
              credits: "",
              portfolio: "",
              searchTerm:"London",
              weather: ""
    }

    this.receiveSearch = this.receiveSearch.bind(this)
    this.receiveImage = this.receiveImage.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchTerm}&APPID=84f0f2104760927b465acbf6cca0ab2f`)
    .then(response => response.json())
    .then(body => {
      this.setState({weather: body.weather[0].description})
      return body.weather[0].description;
    })
    .then(weather => {
     return fetch(`https://api.unsplash.com/search/photos?query=${weather}&client_id=92a06a7bd308c84d1888039fa62f1b8706d57dd34c0894fdbb6b2e6b50b705df`)
    })  
    .then(response => response.json())
    .then(body => this.setState({
      imageArray: body.results,
      mainImage: body.results[0].urls.full
    }))
}


  receiveImage(image){
    this.setState({
    mainImage: image.urls.full,
      credits: image.user.name,
      portfolio: image.user.links.html
    })
    console.log(image)
  }


receiveSearch(text){
  this.setState({
    searchTerm: text
  }, () => this.componentDidMount())
}


  render() {
    return (
      <main className="content">
        <header className="header">
          <h1 className="title">
            <i>Meteor</i>
            <i>opolis</i>
          </h1>
        </header>

        <figure className="photo" id="photo">
          <img src={this.state.mainImage} />
        </figure>

        <Info  weather={this.state.weather} credits={this.state.credits} portfolio={this.state.portfolio}/>
        <Thumbs imageArray={this.state.imageArray} receiver={this.receiveImage}/>
        <Search  receiver={this.receiveSearch}/>
      </main>
    );
  }
}

export default App;
