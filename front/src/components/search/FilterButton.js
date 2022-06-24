import { useState } from "react";

export default function FilterButton(props) {
  const [active, setActive] = useState(false);

  const activeClass = `opacity-${active ? "100" : "25"}`;

  const handleClick = () => setActive((prev) => !prev);

  return (
    <button className={`btn ${activeClass} w-75`} onClick={handleClick}>
      {props.children}
    </button>
  );
}
