import { useParams as pram } from "react-router-dom";
import { useNavigate as nav } from "react-router-dom";

export default function User() {
  const routeParam = pram();
  console.log(routeParam);
  const na = nav();
  function handleclick() {
    na("/home");
  }

  return (
    <>
      <h1>User ID: {routeParam.id}</h1>
      <button onClick={handleclick}>User Button Clicked</button>
    </>
  );
}
