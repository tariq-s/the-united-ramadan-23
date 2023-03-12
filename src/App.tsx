import { FC, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { BeneficiaryDetail, Home } from "./pages";
import { Scan } from "./pages/Scan";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scan" element={<Scan />} />
      <Route path="/beneficiary/:token" element={<BeneficiaryDetail />} />
    </Routes>
  );
};
