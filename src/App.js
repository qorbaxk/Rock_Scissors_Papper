import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

//1. 박스 2개(타이틀, 사진, 결과값)
//2. 가위 바위 보 선택 버튼
//3. 버튼을 클릭하게 되면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 34의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 테두리 컬러 승패무에 따라 다르게

const choice = {
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


function App() {

  const [userSelect, setUserSelect] = useState(null);

  const gameOn = (userChoice) => {
    setUserSelect(choice[userChoice])
  };

  return (
    <div>
      <div className="explain">
        Hi! Spider-Man! <br></br>
        you have to beat Deadpool!
      </div>
      <div className="main">
        <Box title="Spiderman" basic="img/spiderman.png" item={userSelect} />
        <h1>vs</h1>
        {/*<Box title="Deadpool" basic="img/deadpool.png" />*/}
      </div>
      <div className="btn">
        <button onClick={()=>gameOn('rock')}>
          <img src={"img/btn-rock.png"}></img>
        </button>
        <button onClick={()=>gameOn('scissors')}>
          <img src={"img/btn-scissor.png"}></img>
        </button>
        <button onClick={()=>gameOn('paper')}>
          <img src={"img/btn-paper.png"}></img>
        </button>
      </div>
    </div>
  );
}

export default App;
