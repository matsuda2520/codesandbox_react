import "./styles.css";

// import　括弧なしはdefault export 括弧ありはnamed exportか特定のobject
import ColofulMessage from "./components/ColorfulMessage";

export default function App() {
  const onClickButton = () => alert();
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Hello CodeSandbox</h1>
      <ColofulMessage color="blue" message="元気ですか" />
      {/* タグに囲んだ値はprops.children  */}
      <ColofulMessage color="pink" message="元気ですよ">
        うん
      </ColofulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </div>
  );
}
