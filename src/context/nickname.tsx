import React, { createContext, Dispatch, useContext, useReducer } from "react";

interface NicknameState {
  nickname: string;
}
type NicknameAction = { type: "NICKNAME/UPDATE"; payload: string };

const initailState: NicknameState = {
  nickname: "",
};

const reducer = (
  state: NicknameState,
  action: NicknameAction
): NicknameState => {
  switch (action.type) {
    case "NICKNAME/UPDATE":
      return { ...state, nickname: action.payload };
    default:
      throw new Error("invalid action type");
  }
};

const NicknameStateContext = createContext<null | NicknameState>(null);
const NicknameDispatchContext = createContext<null | Dispatch<NicknameAction>>(
  null
);

export const NicknameProvider = ({ children }: { children: JSX.Element }) => {
  const [nicknameState, nicknameDispatch] = useReducer(reducer, initailState);

  return (
    <NicknameStateContext.Provider value={nicknameState}>
      <NicknameDispatchContext.Provider value={nicknameDispatch}>
        {children}
      </NicknameDispatchContext.Provider>
    </NicknameStateContext.Provider>
  );
};

export default "";
