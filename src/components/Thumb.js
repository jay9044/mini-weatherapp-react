import React from 'react'
import cx from 'classnames'

class Thumb extends React.Component {
    constructor(){
        super()

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        this.props.receiver(this.props.image)
    }

    
    render(){
        const classes =cx('thumbs__link', {
            'active': this.props.on
        })



      return (
                <img className={classes} onClick={this.handleClick} src={this.props.image.urls.thumb} />
      );
    }
  }
  
  export default Thumb;