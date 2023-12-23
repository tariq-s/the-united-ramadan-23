import { FC } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PageWrapper } from "./styles";
import { Result } from "@zxing/library";
import { ProjectType } from "../data/project/types";

export const Scan: FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const project = searchParams.get("project");

  const onResult = (result?: Result | null) => {
    if (!result) {
      return;
    }

    let navigatePath;

    if (project === ProjectType.RamadanDistribution) {
      navigatePath = `/beneficiary/${result.getText()}`;
    } else if (project === ProjectType.BreadBasket) {
      navigatePath = `/bread-basket/beneficiary/${result.getText()}`;
    }

    if (navigatePath) {
      navigate(navigatePath);
    }
  };
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
        onResult={onResult}
      />
    </PageWrapper>
  );
};
