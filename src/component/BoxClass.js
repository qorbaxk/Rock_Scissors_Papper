import React, { Component } from 'react'

export default class BoxClass extends Component {
    constructor(){
        super();
        this.result="";
    }
    getResult = () =>{
        if(this.props.title === "Deadpool" && this.props.result !="Draw" && this.props.result != ""){
        this.result = this.props.result === "Win"?"Lose":"Win";
        }else {
        this.result = this.props.result;
        }
    };
 
 
    render() {
    this.getResult();
    return (
        <div className={`box ${this.result}`}>
            <h1>{this.props.title}</h1>
            <img className='item-img' src={this.props.item==null?this.props.basic:this.props.item.img}/>
            <h2>{this.result}</h2>
        </div>
    )
  }
}
