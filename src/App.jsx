import "./common/Common.css";
import "./components/MemoApp.css";
import MemoApp from "./components/MemoApp";
import Header from "./components/Header";
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Header />
        <div className="d-flex align-items-center justify-content-center wrapper">
          <div className="d-flex justify-content-center container">
            <MemoApp />
          </div>
        </div>
      </AuthContextProvider>
    </>
  );
}

export default App;
