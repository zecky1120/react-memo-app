import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

export default function useMemo() {
  const storedMemos = JSON.parse(localStorage.getItem("memos") ?? "null") ?? [];
  const [memos, setMemos] = useState(storedMemos);

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  const addMemo = (memo) => {
    if (!memo.title) {
      alert("タイトルは必ず入力してください");
    }
    const newMemo = { id: nanoid(), title: memo.title, content: memo.content };
    setMemos([newMemo, ...memos]);
  };

  const updateMemo = (memo) => {
    const updateMemos = memos.map((m) => {
      return m.id === memo.id
        ? { ...m, title: memo.title, content: memo.content }
        : m;
    });
    setMemos(updateMemos);
  };

  const destroyMemo = (memo) => {
    const destroyMemos = memos.filter((m) => {
      return m.id !== memo.id;
    });
    setMemos(destroyMemos);
  };

  return { memos, addMemo, updateMemo, destroyMemo };
}
