import "./common/Common.css";
import "./components/Memo.css";
import Memo from "./components/Memo";

function App() {
  return (
    <>
      <header>
        <span className="logo f-bold">MemoApp</span>
      </header>
      <div className="d-flex align-items-center justify-content-center wrapper">
        <div className="d-flex justify-content-center container">
          <Memo />
        </div>
      </div>
    </>
  );
}

export default App;
