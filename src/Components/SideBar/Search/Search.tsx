import "./Search.css";
import { ReactComponent as Magnifier } from "../../../Assets/images/magnifier.svg";

export function Search() {
  function handleSearchBtn(e: React.MouseEvent<HTMLButtonElement>) {
    console.log("You clicked search!");
  }

  return (
    <div className="search-container">
      <div className="search-box">
        <button onClick={handleSearchBtn}>
          <Magnifier />
        </button>

        <input type="text" placeholder="Search or start new chat" />
      </div>
    </div>
  );
}
