import React, { Component } from 'react'
import "./App.css";
import BoxClass from './component/BoxClass'


//const는 export 바깥에다가 써야 정의됨
const choice1 = {
    rock:{
      name: "Rock",
      img:"img/s-rock.png"
    },
    scissors:{
      name:"Scissors",
      img:"img/s-scissor.png"
    },
    paper:{
      name:"Paper",
      img:"img/s-paper.png"
    }
};

const choice2 = {
    rock:{
      name: "Rock",
      img:"img/d-rock.png"
    },
    scissors:{
      name:"Scissors",
      img:"img/d-scissor.png"
    },
    paper:{
      name:"Paper",
      img:"img/d-paper.png"
    }
};


export default class AppClass extends Component {
  
    constructor(){
        super();
        this.state={
            user:null,
            computer:null,
            result:"",
        }
    };

    gameOn = (userChoice) => {
        let computerChoice = this.randomChoice();
        this.setState({
            user:choice1[userChoice],
            computer:computerChoice,
            result:this.judgement(choice1[userChoice],computerChoice)
        });
        //여기는 this.state.user() 이렇게 쓰는게 아니고 ()에 들어가는 값만 써주면됨
        //함수 호출시에도 this.  꼭 붙이기
    };

    randomChoice=()=>{
        let itemArray = Object.keys(choice2);
        let randomItem = Math.floor(Math.random()*itemArray.length);
        let final = itemArray[randomItem];
        return choice2[final];
    };

    judgement=(user,computer)=>{
        let us = user.name;
        let cs = computer.name;
        if(us == cs){
        return "Draw"
        }else if(us == "Rock"){
        return cs=="Scissors"?"Win":"Lose"
        }else if(us == "Scissors"){
        return cs=="Paper"?"Win":"Lose"
        }else if(us == "Paper"){
        return cs=="Rock"?"Win":"Lose"
        }
    };


  
  
  
    render() {
    return (
        <div>
            <div className="explain">
            Hi! Spider-Man! <br></br>
            you have to beat Deadpool!
            </div>
        
            <div className="main">
            <BoxClass title="Spiderman" basic="img/spiderman.png" item={this.state.user} result={this.state.result}/>
            <h1><br></br><br></br><br></br><br></br>vs</h1>
            <BoxClass title="Deadpool" basic="img/deadpool.png" item={this.state.computer} result={this.state.result}/>
            </div>
            <div className="btn">
            <button onClick={()=>this.gameOn('rock')}>
                <img className="b-img" src={"img/btn-rock.png"}></img>
            </button>
            <button onClick={()=>this.gameOn('scissors')}>
                <img className="b-img" src={"img/btn-scissor.png"}></img>
            </button>
            <button onClick={()=>this.gameOn('paper')}>
                <img className="b-img" src={"img/btn-paper.png"}></img>
            </button>
            </div>
        </div>
    )
  }
}
