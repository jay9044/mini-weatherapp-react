import React from 'react';
class Thumbs extends React.Component {
  render(){
    return (
      <div className="info">
        <p className="info__item info__item--conditions" id="conditions">{this.props.weather}</p>
        <p className="info__item info__item--credits">
          <a href={this.props.portfolio} id="credit-user">{this.props.credits}</a>
          <span>on</span>
          <a href="#" id="credit-platform">Unsplash</a>
        </p>
      </div>
    );
  }
}

export default Thumbs;
