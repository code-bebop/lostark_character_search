import { useLocation } from "react-router-dom";

import useEquipmentEngraves from "../../../hooks/useEquipmentEngraves";
import useProfileQuery from "../../../hooks/useProfileQuery";
import profileQueryAnalyzer from "../../../lib/profileQueryAnalyzer";
import { EquipmentResponse } from "../../../type/equipment";
import EquipmentEnvgraveOverview from "./EquipmentEnvgraveOverview";
import EquipmentList from "./EquipmentList";

const Equipment = () => {
  const location = useLocation();
  const { nickname } = location.state as { nickname: string };
  const profileQuery = useProfileQuery<EquipmentResponse>(
    "equipment",
    nickname
  );

  const data = profileQueryAnalyzer(profileQuery);
  const equipmentEngraves = useEquipmentEngraves(data);

  if (!("result" in data)) {
    return data;
  }

  return (
    <>
      <EquipmentList {...data} />
      <EquipmentEnvgraveOverview {...equipmentEngraves} />
    </>
  );
};

export default Equipment;
