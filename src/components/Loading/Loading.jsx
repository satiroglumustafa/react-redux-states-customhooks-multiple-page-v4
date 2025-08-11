import { Spinner } from "react-bootstrap";
import "./Loading.css";
const Loading = () => {
  return (
    <>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
};

export default Loading;
