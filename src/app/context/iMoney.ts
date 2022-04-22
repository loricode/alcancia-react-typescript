export interface iMoney {
   currency:MoneyData[] 
}


export interface MoneyData {
   id:string;
   value:string;
}


export interface iAction {
  type:string;
  payload:any
}