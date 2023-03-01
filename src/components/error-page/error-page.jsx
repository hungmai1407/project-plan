import "./error-page.scss";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return <h1>Error Page: {<i>{error.statusText || error.message}</i>} </h1>;
}
