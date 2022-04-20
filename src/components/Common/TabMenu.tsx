import { Link } from "react-router-dom";

const TabMenu = () => {
  return (
    <div>
      <Link to="/item">아이템</Link>
      <Link to="/skill">스킬</Link>
      <Link to="/anotherCharacter">다른 캐릭터</Link>
    </div>
  );
};

export default TabMenu;
