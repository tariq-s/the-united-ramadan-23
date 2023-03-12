import { FC, useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import { PageWrapper } from "./styles";

export const Scan: FC = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <QrReader
        containerStyle={{
          height: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        videoContainerStyle={{ width: "100%", maxWidth: "500px" }}
        constraints={{ facingMode: "environment" }}
        onResult={(result) => {
          result && navigate(`/beneficiary/${result.getText()}`);
        }}
      />
    </PageWrapper>
  );
};
