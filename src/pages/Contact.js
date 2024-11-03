import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search;

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name"); // ?name="mario"

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>
        Since then, the Latin-like text has been the printing industry's
        standard for fake, or dummy, text. Before electronic publishing,
      </p>
    </div>
  );
}
