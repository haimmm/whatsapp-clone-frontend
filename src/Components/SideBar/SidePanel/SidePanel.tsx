import "./SidePanel.css";
import { Panel } from "../../../Layouts/Panel/Panel";
import defaultPicture from "../../../Assets/images/default_picture.png";
import { ReactComponent as CommunitiesSVG } from "../../../Assets/images/communities.svg";
import { ReactComponent as StatusSVG } from "../../../Assets/images/status.svg";
import { ReactComponent as NewMessageSVG } from "../../../Assets/images/NewMessage.svg";
import { ReactComponent as MenuSVG } from "../../../Assets/images/menu.svg";
import { useSlideContext } from "../../../context/SlideAnimationProvider";

export function SidePanel(): JSX.Element {
  const { toggleSlide } = useSlideContext();

  function handleCummunitiesBtn(e: React.MouseEvent<HTMLButtonElement>) {
    console.log("You clicked communities.");
  }

  function handleStatusBtn(e: React.MouseEvent<HTMLButtonElement>) {
    console.log("You clicked status.");
  }

  function handleMenuBtn(e: React.MouseEvent<HTMLButtonElement>) {
    console.log("You clicked menu.");
  }

  return (
    <Panel justifyContent={"space-between"}>
      <img className="rounded-image" src={defaultPicture} alt="profile" />
      <div className="buttons">
        <button onClick={handleCummunitiesBtn}>
          <CommunitiesSVG />
        </button>
        <button onClick={handleStatusBtn}>
          <StatusSVG />
        </button>
        <button onClick={toggleSlide}>
          <NewMessageSVG />
        </button>
        <button onClick={handleMenuBtn}>
          <MenuSVG />
        </button>
      </div>
    </Panel>
  );
}
