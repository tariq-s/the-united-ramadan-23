import { FC, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { setupAxios } from "./config/axios";
import { BeneficiaryDetail, Home } from "./pages";

export const App: FC = () => {
  useEffect(() => {
    setupAxios();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beneficiary/:token" element={<BeneficiaryDetail />} />
    </Routes>
  );
};
