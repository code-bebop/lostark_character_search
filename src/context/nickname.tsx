import { createContext, Dispatch, useContext, useReducer } from "react";

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
      console.table(action);
      return { ...state, nickname: action.payload };
    default:
      throw new Error("invalid action type");
  }
};

const NicknameStateContext = createContext<NicknameState>({
  nickname: "",
});
const NicknameDispatchContext = createContext<Dispatch<NicknameAction>>(
  () => {}
);

export const useNicknameState = () => {
  const state = useContext(NicknameStateContext);
  return state;
};
export const useNicknameDispatch = () => {
  const dispatch = useContext(NicknameDispatchContext);
  return dispatch;
};

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
