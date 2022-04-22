import { ADDMONEY, GETMONEY } from "./actions";
import { iAction, iMoney } from "./iMoney";

export const initialState:iMoney = {
   currency: []
};

export const moneyReducer = (state = initialState, action: iAction) => {
  switch (action.type) {
    case GETMONEY:
      return state;
    case ADDMONEY:
      return  { currency:[...state.currency, { ...action.payload }]};

    default:
      return state;
  }
};