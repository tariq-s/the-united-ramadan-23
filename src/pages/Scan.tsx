import { FC, useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import { PageWrapper } from "./styles";

export const Scan: FC = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <QrReader
        videoContainerStyle={{ height: "100%" }}
        constraints={{ facingMode: "environment" }}
        onResult={(result) => {
          result && navigate(`/beneficiary/${result.getText()}`);
        }}
      />
    </PageWrapper>
  );
};
