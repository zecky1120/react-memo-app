import "./common/Common.css";
import "./components/MemoApp.css";
import MemoApp from "./components/MemoApp";

function App() {
  return (
    <>
      <header>
        <span className="logo f-bold">MemoApp</span>
      </header>
      <div className="d-flex align-items-center justify-content-center wrapper">
        <div className="d-flex justify-content-center container">
          <MemoApp />
        </div>
      </div>
    </>
  );
}

export default App;
