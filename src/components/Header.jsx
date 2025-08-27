import useAuth from "../hooks/useAuth";
import Button from "./Button";

export default function Header() {
  const { isLoggedIn, handleLogin } = useAuth();

  return (
    <>
      <header>
        <div className="d-flex justify-content-between align-items-center header-container">
          <span className="logo f-bold">MemoApp</span>
          <Button
            text={isLoggedIn ? "ログアウト" : "ログイン"}
            onClick={() => handleLogin()}
          ></Button>
        </div>
      </header>
    </>
  );
}
