import React from "react";
import BeyCard from '../Components/BeyCard'


class BeyContainer extends React.Component {

  state = {
    beyImages:[]
  };

  componentDidMount(){

    fetch('http://localhost:3001/beys').then(resp=>resp.json())
    .then(beyImages=>this.setState({beyImages}))
  }

  handleClick=(beyObj)=>{
    // console.log(e.target.parentElement.id)
    let newState = this.state.beyImages.filter(ele=>ele.id != beyObj.id)
    this.setState({beyImages:newState})
  }

  render() {

    let beyCards = this.state.beyImages.map(image=><BeyCard key={image.id} bey={image} onClick={this.handleClick}/>)

    return (
      <div className="index">
        <h1>Index</h1>
        <div>{beyCards}</div>
      </div>
    );
  }
}

export default BeyContainer;
