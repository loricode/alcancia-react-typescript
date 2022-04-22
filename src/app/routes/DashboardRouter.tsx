import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import ButtonAppBar from "../components/appBar/AppBar";

//confing
import { NameRoutes } from '../config/nameRoutes';

//views
import { Home } from "../views/home/Home";
import { HowManyCoins } from "../views/howManyCoins/HowManyCoins";
import { HowMuchMoney } from "../views/howMuchMoney/HowMuchMoney";
import { SaveMoney } from "../views/saveMoney/SaveMoney";

//context
import { MoneyContext } from '../context/MoneyContext'
import { QuantityCoin } from "../views/quantityCoin/QuantityCoin";
import { CurrencyAmount } from "../views/currencyAmount/CurrencyAmount";

export const DashboardRouter = () => {
  return (

    <React.Fragment>
      <MoneyContext>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={NameRoutes.saveMoney} element={<SaveMoney />} />
          <Route path={NameRoutes.quantityCoin} element={<QuantityCoin />} />
          <Route path={NameRoutes.currencyAmount} element={<CurrencyAmount />} />
          <Route path={NameRoutes.howManyCoins} element={<HowManyCoins />} />
          <Route path={NameRoutes.howMuchMoney} element={<HowMuchMoney />} />
        </Routes>
      </MoneyContext>
    </React.Fragment>
  );
};
