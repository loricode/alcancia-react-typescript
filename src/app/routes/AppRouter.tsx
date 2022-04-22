import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardRouter } from "./DashboardRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<DashboardRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
