import { MoneyData } from '../context/iMoney';

export const sumMoney = (data: MoneyData[] = []): number => {

   if (data.length === 0) return 0;
 
   let result = 0;
 
   data.forEach(item => result += parseInt(item.value));
 
   return result;
 }
 
 export const sumCoin = (data: MoneyData[] = [],  coin:string = ''): number => {

  if (data.length === 0) return 0;

  let result = 0;

  const newArrayCoin =  data.filter((item) => item.value === coin);

  result = newArrayCoin.length;

  return result;
}

export const sumAmountCoin = (data: MoneyData[] = [],  coin:string = ''): number => {

  if (data.length === 0) return 0;

  let result = 0;

  data.forEach(item => {
     if(item.value === coin){
      result += parseInt(item.value)
     }
  });

 
  return result;
}
