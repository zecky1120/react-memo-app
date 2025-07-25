import Button from "./Button";
import Form from "./Form";
import useMemoHooks from "../hooks/useMemo";
import { useState } from "react";

export default function MemoApp() {
  const { memos, addMemo, updateMemo, destroyMemo } = useMemoHooks();
  const [memoState, setMemoState] = useState({
    memo: {
      title: "",
      content: "",
    },
    status: null,
  });

  const handleNewMemo = (mode) => {
    setMemoState((memoState) => ({
      ...memoState,
      memo: { title: "", content: "" },
      status: mode,
    }));
  };

  const handleEditMemo = (mode, memo) => {
    setMemoState((memoState) => ({
      ...memoState,
      memo: memo,
      status: mode,
    }));
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
      {memoState.status !== null && (
        <Form memo={memoState.memo} setMemoState={setMemoState}>
          {memoState.status === "new" && (
            <div className="d-flex justify-content-center">
              <Button
                text="追加する"
                onClick={() => {
                  addMemo(memoState.memo);
                  setMemoState((m) => ({
                    ...m,
                    status: null,
                  }));
                }}
              />
            </div>
          )}
          {memoState.status === "edit" && (
            <div className="d-flex justify-content-between">
              <Button
                text="更新する"
                onClick={() => {
                  updateMemo(memoState.memo);
                  setMemoState((m) => ({
                    ...m,
                    status: null,
                  }));
                }}
              />
              <Button
                text="削除する"
                onClick={() => {
                  destroyMemo(memoState.memo);
                  setMemoState((m) => ({
                    ...m,
                    status: null,
                  }));
                }}
              />
            </div>
          )}
        </Form>
      )}
    </>
  );
}
