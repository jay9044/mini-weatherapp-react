import React from 'react';
import Thumb from './Thumb';


class Thumbs extends React.Component {

  render(){

    return (
      <div className="thumbs" id="thumbs">
        {this.props.imageArray.map(image => 
          <Thumb key={image.id} receiver={this.props.receiver} image={image} on={image.id === this.props.mainImgID} />
        )}
      </div>
    );
  }
}

export default Thumbs;
