import { FC, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { BeneficiaryDetail } from "./pages/ramadan-distribution";
import { Scan } from "./pages/Scan";
import { ProjectHome } from "./pages/ProjectHome";
import { ProjectType } from "./data/project/types";
import { Home } from "./pages/Home";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/ramadan-distribution"
        element={
          <ProjectHome
            project={ProjectType.RamadanDistribution}
            title="Ramadan Distribution Drive"
          />
        }
      />
      <Route
        path="/bread-basket"
        element={
          <ProjectHome project={ProjectType.BreadBasket} title="Bread Basket" />
        }
      />
      <Route path="/scan" element={<Scan />} />
      <Route path="/beneficiary/:token" element={<BeneficiaryDetail />} />
    </Routes>
  );
};
