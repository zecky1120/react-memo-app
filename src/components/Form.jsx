import "../components/Form.css";
import useAuthContext from "../hooks/useAuth";

export default function Form(props) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleInputForm(e) {
    props.setMemo((memo) => ({ ...memo, [e.target.name]: e.target.value }));
  }

  const { login } = useAuthContext();
  const isDisabled = {
    disabled: !login,
    readOnly: !login,
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column form-container"
      >
        <div className="d-flex flex-column form-control-box">
          <label className="form-label">タイトル</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={props.memo.title}
            onChange={handleInputForm}
            {...isDisabled}
          ></input>
        </div>
        <div className="d-flex flex-column form-control-box">
          <label className="form-label">内容</label>
          <textarea
            rows={5}
            className="form-control"
            name="content"
            value={props.memo.content}
            onChange={handleInputForm}
            {...isDisabled}
          ></textarea>
        </div>
        {props.children}
      </form>
    </>
  );
}
