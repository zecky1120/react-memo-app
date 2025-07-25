import "../components/Form.css";

export default function Form(props) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleInputForm(e) {
    props.setMemoState((memoState) => ({
      ...memoState,
      memo: {
        ...memoState.memo,
        [e.target.name]: e.target.value,
      },
    }));
  }

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
          ></textarea>
        </div>
        {props.children}
      </form>
    </>
  );
}
