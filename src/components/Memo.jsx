import Button from "./Button";
import Form from "./Form";
import useMemoHooks from "./useMemoHooks";

export default function Memo() {
  const [
    addMemo,
    updateMemo,
    destroyMemo,
    handleToggleMemoForm,
    memo,
    memos,
    status,
    setMemo,
    setStatus,
  ] = useMemoHooks();

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
                onClick={() => handleToggleMemoForm("edit", memo)}
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
        <Button
          text="新規追加する"
          onClick={() => handleToggleMemoForm("new")}
        />
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
