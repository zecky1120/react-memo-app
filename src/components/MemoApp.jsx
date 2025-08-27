import Button from "./Button";
import Form from "./Form";
import useMemoHooks from "../hooks/useMemo";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function MemoApp() {
  const { memos, addMemo, updateMemo, destroyMemo } = useMemoHooks();
  const [memo, setMemo] = useState(null);

  const handleNewMemo = () => {
    setMemo({ title: "", content: "" });
  };

  const handleEditMemo = (memo) => {
    setMemo(memo);
  };

  const { isLoggedIn } = useAuth();

  return (
    <>
      <div className="d-flex flex-column memo-list-container">
        <ul className="d-flex flex-column memo-list">
          {memos.length === 0 ? (
            <li className="d-flex justify-content-center">
              メモがまだありません
            </li>
          ) : (
            memos.map((memo) => (
              <li
                onClick={() => handleEditMemo(memo)}
                key={memo.id}
                className="memo-list-item"
              >
                <div className="d-flex memo-list-item-link">
                  <span className="f-bold">{memo.title}</span>
                </div>
              </li>
            ))
          )}
        </ul>
        {isLoggedIn ? (
          <Button text="新規追加する" onClick={() => handleNewMemo()} />
        ) : null}
      </div>
      {memo !== null && (
        <Form memo={memo} setMemo={setMemo}>
          {!memo.id && isLoggedIn && (
            <div className="d-flex justify-content-center">
              <Button
                text="追加する"
                onClick={() => {
                  addMemo(memo);
                  setMemo(null);
                }}
              />
            </div>
          )}
          {memo.id && isLoggedIn && (
            <div className="d-flex justify-content-between">
              <Button
                text="更新する"
                onClick={() => {
                  updateMemo(memo);
                  setMemo(null);
                }}
              />
              <Button
                text="削除する"
                onClick={() => {
                  destroyMemo(memo);
                  setMemo(null);
                }}
              />
            </div>
          )}
        </Form>
      )}
    </>
  );
}
