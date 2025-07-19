import { nanoid } from "nanoid";
import { useEffect } from "react";

export default function useMemo({ memos, setMemos, memo, setMemo, setStatus }) {
  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  const addMemo = () => {
    if (!memo.title) {
      alert("タイトルは必ず入力してください");
      return;
    }
    const newMemo = { id: nanoid(), title: memo.title, content: memo.content };
    setMemos([newMemo, ...memos]);
    setMemo({ title: "", content: "" });
    setStatus(null);
  };

  const updateMemo = () => {
    const updateMemos = memos.map((m) => {
      return m.id === memo.id
        ? { ...m, title: memo.title, content: memo.content }
        : m;
    });
    setMemos(updateMemos);
    setStatus(null);
  };

  const destroyMemo = () => {
    const destroyMemos = memos.filter((m) => {
      return m.id !== memo.id;
    });
    setMemos(destroyMemos);
    setStatus(null);
  };

  return { addMemo, updateMemo, destroyMemo };
}
