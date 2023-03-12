import { FC, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { BeneficiaryDetail, Home } from "./pages";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beneficiary/:token" element={<BeneficiaryDetail />} />
    </Routes>
  );
};
