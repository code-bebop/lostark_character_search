import { useLocation } from "react-router-dom";

import useEquipmentEngraves from "../../../hooks/useEquipmentEngraves";
import useProfileQuery from "../../../hooks/useProfileQuery";
import EquipmentEnvgraveOverview from "./EquipmentEnvgraveOverview";
import EquipmentList from "./EquipmentList";

const Equipment = () => {
  const location = useLocation();
  const { nickname } = location.state as { nickname: string };
  const { data, isLoading, isError } = useProfileQuery("equipment", nickname);

  const equipmentEngraves = useEquipmentEngraves(data);

  if (isLoading) {
    return <p>로딩 중 . . .</p>;
  }
  if (typeof data === "undefined") {
    return <p>데이터가 undefined인 상태입니다.</p>;
  }
  if (isError || data.result === "Error") {
    return (
      <>
        <p>에러 발생</p>
        <p>{data.result_error}</p>
      </>
    );
  }

  return (
    <>
      <EquipmentList {...data} />
      <EquipmentEnvgraveOverview {...equipmentEngraves} />
    </>
  );
};

export default Equipment;
