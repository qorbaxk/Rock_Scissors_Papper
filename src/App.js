import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

//1. 박스 2개(타이틀, 사진, 결과값)
//2. 가위 바위 보 선택 버튼
//3. 버튼을 클릭하게 되면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 34의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 테두리 컬러 승패무에 따라 다르게


//버튼선택시 넘어오는 선택값에 따라 넘겨주는 값
//스파이더맨 버전
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
}
//데드풀 버전
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
}

function App() {

  //바로바로 값을 바꿔주기 위해 스테이트 활용
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");


  //유저가 버튼 선택시 실행되는 게임시작 함수
  const gameOn = (userChoice) => {
    setUserSelect(choice1[userChoice]);
    //버튼선택시 컴퓨터의 랜덤함수도 동시 실행
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    //판단하는 함수 유저값과 컴퓨터값을 같이 넘겨줌
    setResult(judgement(choice1[userChoice],computerChoice));
    
  
  };

  //유저입장에서 승패 판단하는 함수
  const judgement = (user,computer)=>{
  
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

    
  }

  //컴퓨터가 랜덤하게 값을 뽑는 함수
  const randomChoice = ()=>{
    //객체에 키값만 뽑아서 배열로 만들어주는 함수
    let itemArray = Object.keys(choice2);
    //랜덤함수를 0,1,2로 나올수있게 변환
    let randomItem = Math.floor(Math.random()*itemArray.length);
    //인덱스 번호로 아이템이 반환
    let final = itemArray[randomItem];
    //final의 인덱스값으로 choice2중에 선택해서 컴퓨터값을 넘기는 것
    return choice2[final];
  }


  return (
    
    <div>
      <div className="explain">
        Hi! Spider-Man! <br></br>
        you have to beat Deadpool!
      </div>
    
      <div className="main">
        <Box title="Spiderman" basic="img/spiderman.png" item={userSelect} result={result}/>
        <h1><br></br><br></br><br></br><br></br>vs</h1>
        <Box title="Deadpool" basic="img/deadpool.png" item={computerSelect} result={result}/>
      </div>
      <div className="btn">
        <button onClick={()=>gameOn('rock')}>
          <img className="b-img" src={"img/btn-rock.png"}></img>
        </button>
        <button onClick={()=>gameOn('scissors')}>
          <img className="b-img" src={"img/btn-scissor.png"}></img>
        </button>
        <button onClick={()=>gameOn('paper')}>
          <img className="b-img" src={"img/btn-paper.png"}></img>
        </button>
      </div>
    </div>
  );

    
  
}



export default App;
