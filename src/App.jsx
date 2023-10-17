import "./styles.css";

// import　括弧なしはdefault export 括弧ありはnamed exportか特定のobjectを指定してのexport
import { ColorfullMessage } from "./components/ColorfulMessage";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  console.log("最初");
  const [num, setNum] = useState(0); // 変数名、変数を更新する関数 useStateの引数で初期値
  const [ishow, setIsShow] = useState(true);

  const onClickButton = () => {
    setNum(num + 1);
  };
  const onClickSwitchShow = () => {
    setIsShow(!ishow);
  };

  useEffect(() => {
    console.log("useEffect");
    if (num % 3 === 0) {
      ishow || setIsShow(true);
    } else {
      ishow && setIsShow(false);
    }
  }, [num]);

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Hello CodeSandbox</h1>
      <ColorfullMessage color="blue" message="元気ですか" />
      {/* タグに囲んだ値はprops.children  */}
      <ColorfullMessage color="pink" message="元気ですよ">
        うん
      </ColorfullMessage>
      <button onClick={onClickButton}>ボタン</button>
      <br />
      <button onClick={onClickSwitchShow}>on/off</button>
      <p>{num}</p>
      {/* 左がtrueなら右を返す */}
      {ishow && <p>(^_-)-☆</p>}
    </div>
  );
}
