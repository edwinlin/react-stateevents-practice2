import React, { Component } from "react";

class BeyCard extends React.Component {

// state = {
//   delete: this.props.delete
// }
//  handleClick = () => {
//    this.setState({delete:true})
//  }

  render() {
// console.log(this.state.delete)
  // if(this.state.delete != "false"){
  //   return <div></div>
  // }else{
    return (
      <div>
        <h3>{this.props.bey.name}</h3>
        <img onClick={()=> this.props.onClick(this.props.bey)} src={this.props.bey.img} alt='blank'/>
      </div>
    );

  // }
  }
}

export default BeyCard;
