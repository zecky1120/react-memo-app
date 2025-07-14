import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

export default function useMemo() {
  const storedMemos = JSON.parse(localStorage.getItem("memos") ?? "null") ?? [];
  const [memos, setMemos] = useState(storedMemos);
  const [memo, setMemo] = useState({
    title: "",
    content: "",
  });
  const [status, setStatus] = useState(null);

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

  const handleToggleMemoForm = (mode, memo) => {
    setStatus(mode);
    if (mode === "new") {
      setMemo({ title: "", content: "" });
    } else if (mode === "edit") {
      setMemo({ id: memo.id, title: memo.title, content: memo.content });
    }
  };

  return [
    addMemo,
    updateMemo,
    destroyMemo,
    handleToggleMemoForm,
    memo,
    memos,
    status,
    setMemo,
    setStatus,
  ];
}
