import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Beneficiary, Home } from "./pages";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beneficiary" element={<Beneficiary />} />
    </Routes>
  );
};
