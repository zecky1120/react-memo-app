import Button from "./Button";
import Form from "./Form";
import useMemoHooks from "../hooks/useMemo";
import { useState } from "react";

export default function MemoApp() {
  const storedMemos = JSON.parse(localStorage.getItem("memos") ?? "null") ?? [];
  const [memos, setMemos] = useState(storedMemos);
  const [memo, setMemo] = useState({
    title: "",
    content: "",
  });
  const [status, setStatus] = useState(null);

  const { addMemo, updateMemo, destroyMemo } = useMemoHooks({
    memos,
    setMemos,
    memo,
    setMemo,
    setStatus,
  });

  const handleNewMemo = (mode) => {
    setStatus(mode);
    setMemo({ title: "", content: "" });
  };

  const handleEditMemo = (mode, memo) => {
    setStatus(mode);
    setMemo(memo);
  };

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
                onClick={() => handleEditMemo("edit", memo)}
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
        <Button text="新規追加する" onClick={() => handleNewMemo("new")} />
      </div>
      {status !== null && (
        <Form memo={memo} setMemo={setMemo} setStatus={setStatus}>
          {status === "new" && (
            <div className="d-flex justify-content-center">
              <Button text="追加する" onClick={() => addMemo()} />
            </div>
          )}
          {status === "edit" && (
            <div className="d-flex justify-content-between">
              <Button text="更新する" onClick={() => updateMemo()} />
              <Button text="削除する" onClick={() => destroyMemo()} />
            </div>
          )}
        </Form>
      )}
    </>
  );
}
