import useAuthContext from "../hooks/useAuth";
import Button from "./Button";

export default function Header() {
  const { login, handleLogin } = useAuthContext();

  return (
    <>
      <header>
        <span className="logo f-bold">MemoApp</span>
        <Button
          text={login ? "ログアウト" : "ログイン"}
          onClick={() => handleLogin()}
        ></Button>
      </header>
    </>
  );
}
