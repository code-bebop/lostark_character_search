import { useLocation } from "react-router-dom";

import useEquipmentEngraves from "../../../hooks/useEquipmentEngraves";
import useProfileQuery from "../../../hooks/useProfileQuery";
import profileQueryAnalyzer from "../../../lib/profileQueryAnalyzer";
import { EquipmentResponse } from "../../../type/equipment";
import { ViewWrapper } from "../../Common/ViewWrapper";
import EquipmentEnvgraveOverview from "./EquipmentEnvgraveOverview";
import EquipmentList from "./EquipmentList";
import EquipmentSkeleton from "./EquipmentSkeleton";

const Equipment = () => {
  const location = useLocation();
  const { nickname } = location.state as { nickname: string };

  const profileQuery = useProfileQuery<EquipmentResponse>(
    "equipment",
    nickname
  );

  const data = profileQueryAnalyzer(profileQuery);
  const equipmentEngraves = useEquipmentEngraves(data);

  if (profileQuery.isLoading) {
    return (
      <ViewWrapper>
        {new Array(10).fill(0).map(() => {
          return <EquipmentSkeleton />;
        })}
      </ViewWrapper>
    );
  }

  if (!("result" in data)) {
    return data;
  }

  return (
    <ViewWrapper>
      <EquipmentList {...data} />
      <EquipmentEnvgraveOverview {...equipmentEngraves} />
    </ViewWrapper>
  );
};

export default Equipment;
