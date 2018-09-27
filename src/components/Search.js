import React from 'react';

class Search extends React.Component {
  constructor(){
    super()
    this.state = {
      text: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

handleChange(event){
  this.setState({
    text:event.target.value
  })
}

handleSubmit(event){
    
    event.preventDefault(),
    this.props.receiver(this.state.text)
    this.setState({
     text: ""
    })
}

  render(){
    return (
      <div className="controls">
        <form onSubmit={this.handleSubmit} className="search" id="search">
          <label className="search__label" htmlFor="search-tf">City</label>
          <input onChange={this.handleChange} className="search__input" id="search-tf" name="city" placeholder="Enter city name" autoComplete="city" value={this.state.text}/>
          <button className="btn search__btn">Go</button>
        </form>
      </div>
    );
  }
}

export default Search;
