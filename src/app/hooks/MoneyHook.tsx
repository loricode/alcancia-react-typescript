import { useContext } from "react";
import {
  MyContextMoney,
  MyContextDispatch
} from "../context/MoneyContext";

export const useMoney = () => useContext(MyContextMoney);

export const useDispatch = () => useContext(MyContextDispatch);