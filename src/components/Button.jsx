import "../components/Button.css";

export default function Button({ text, onClick }) {
  return (
    <div className="d-flex justify-content-center">
      <button className="btn f-bold" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
