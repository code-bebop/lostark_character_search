import { useLocation } from "react-router-dom";

const Avatar = () => {
  const { state } = useLocation();
  const { nickname } = state as { nickname: string };

  return <p>{`Avatar ${nickname}`}</p>;
};

export default Avatar;
