import useAuthContext from "../hooks/useAuth";
import Button from "./Button";

export default function Header() {
  const { login, handleLogin } = useAuthContext();

  return (
    <>
      <header>
        <div className="d-flex justify-content-between align-items-center header-container">
          <span className="logo f-bold">MemoApp</span>
          <Button
            text={login ? "ログアウト" : "ログイン"}
            onClick={() => handleLogin()}
          ></Button>
        </div>
      </header>
    </>
  );
}
