import { Panel } from "../../../Layouts/Panel/Panel";
import "./MainPanel.css";
// import CurrentChatIcon from '../../../Assets/images/currentContact.png'
import { ReactComponent as SearchIcon } from "../../../Assets/images/magnifier.svg";
import { ReactComponent as MenuSVG } from "../../../Assets/images/menu.svg";
import defaultPicture from "../../../Assets/images/default_picture.png";

export function MainPanel(): JSX.Element {
  function handleNwMessageBtn(e: React.MouseEvent<HTMLButtonElement>) {
    console.log("You clicked new message.");
  }

  function handleMenuBtn(e: React.MouseEvent<HTMLButtonElement>) {
    console.log("You clicked menu.");
  }

  return (
    <Panel justifyContent={"space-between"}>
      <img className="rounded-image" src={defaultPicture} alt="profile" />
      <div className="main-panel-buttons">
        <button onClick={handleNwMessageBtn}>
          <SearchIcon />
        </button>
        <button onClick={handleMenuBtn}>
          <MenuSVG />
        </button>
      </div>
    </Panel>
  );
}
