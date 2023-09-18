import { useNavigate } from "react-router-dom";

export function Error() {
  const navigate = useNavigate();
  return (
    <div className="error">
      <h3 className="error__h3">Ups... Something went wrong!</h3>
      <button onClick={() => navigate(-1)} className="error__btn">
        {" "}
        &larr; Go back!{" "}
      </button>
    </div>
  );
}
