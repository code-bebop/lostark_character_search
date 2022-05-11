import { useEffect } from "react";
import { useState } from "react";
import { EquipmentResponse } from "./../type/equipment";

export interface EquipmentEngraves {
  [key: string]: {
    level: number;
    isReduced: boolean;
  };
}

const useEquipmentEngraves = (
  data: EquipmentResponse | JSX.Element | undefined
) => {
  const [equipmentEngraves, setEquipmentEngraves] = useState<EquipmentEngraves>(
    {}
  );

  useEffect(() => {
    setEquipmentEngraves({});
    const _equipmentEngraves: EquipmentEngraves = {};

    if (typeof data === "undefined") return;
    if (!("result" in data)) return;

    data?.equipmentList.map((equipment, index) => {
      if (!equipment.option?.engravingEffects) return;
      Object.values(equipment.option.engravingEffects).forEach(
        ({ name, value, isReduced }, index) => {
          const level = Number(value);

          !_equipmentEngraves[name]
            ? (_equipmentEngraves[name] = { level, isReduced })
            : (_equipmentEngraves[name].level += level);
        }
      );
    });

    const sortedForLevel = Object.entries(_equipmentEngraves)
      .sort(([, { level: a }], [, { level: b }]) => b - a)
      .reduce<EquipmentEngraves>((r, [k, v]) => ({ ...r, [k]: v }), {});
    const sortedForIsReduced = Object.entries(sortedForLevel)
      .sort(([, { isReduced: a }], [, { isReduced: b }]) => {
        if (a && b) return 1;
        if (a && !b) return 1;
        if (!a && !b) return 1;
        if (!a && b) return -1;
        return 1;
      })
      .reduce<EquipmentEngraves>((r, [k, v]) => ({ ...r, [k]: v }), {});

    setEquipmentEngraves(sortedForIsReduced);
  }, [data]);

  return equipmentEngraves;
};

export default useEquipmentEngraves;
