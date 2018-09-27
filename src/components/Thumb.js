import React from 'react'
import cx from 'classnames'
class Thumb extends React.Component {
    constructor(){
        super()

        this.state ={on: false};
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        this.props.receiver(this.props.image)

        this.setState({
            on: !this.state.on
        })
    }

    render(){
        const classes =cx('thumbs__link', {
            'active': this.state.on
        })



      return (
                <img className={classes} onClick={this.handleClick} src={this.props.image.urls.thumb} />
      );
    }
  }
  
  export default Thumb;