import { createContext, useReducer, ReactNode } from "react";
import { moneyReducer, initialState } from "./moneyReducer";
import { iMoney, iAction } from "./iMoney";

const init = () => {
  const hasData = localStorage.getItem("money");
  if (hasData === null) {
    return initialState;
  }

  return JSON.parse(hasData);
};

type Props = { children: ReactNode };

type ContextDispatch = (action: iAction) => void;

type Context = { piggyBank: iMoney };

export const MyContextMoney = createContext<Context>({
   piggyBank: { currency: [] },
});

export const MyContextDispatch = createContext<ContextDispatch>(() => {});

export const MoneyContext = ({ children }: Props) => {
  const [piggyBank, dispatch] = useReducer(moneyReducer, initialState, init);

  return (
    <MyContextDispatch.Provider value={dispatch}>
      <MyContextMoney.Provider value={{ piggyBank }}>
        {children}
      </MyContextMoney.Provider>
    </MyContextDispatch.Provider>
  );
};