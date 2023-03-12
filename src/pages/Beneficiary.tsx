import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Space, Typography, Button, Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { BeneficiariesApi } from "../data/beneficiaries/api";
import { Beneficiary } from "../data/beneficiaries/types";
import { Spin } from "antd";
import { PageWrapper } from "./styles";
import { TitleNav } from "../components/title-nav";

const { Title } = Typography;

const CenterAlignedContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: auto;
`;

const RecievedKitSection = styled(Space)`
  font-size: 16px;
  position: absolute;
  bottom: 50px;
  right: 50px;
`;

export const BeneficiaryDetail: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [beneficiary, setBeneficiary] = useState<Beneficiary>();
  const [kitReceived, setKitRecieved] = useState(beneficiary?.receivedKit);
  const { token } = useParams() as { token: string };

  useEffect(() => {
    BeneficiariesApi.getBeneficiaryByToken(token)
      .then(setBeneficiary)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setKitRecieved(beneficiary?.receivedKit);
  }, [beneficiary]);
  return (
    <PageWrapper>
      <TitleNav title="Beneficiary Information" />
      {isError && (
        <CenterAlignedContent>An error has occured</CenterAlignedContent>
      )}
      {isLoading && !isError && (
        <CenterAlignedContent>
          <Spin />
        </CenterAlignedContent>
      )}
      {!isLoading && !isError && (
        <>
          <Title level={5}>Name: {beneficiary?.name}</Title>
          <Title level={5}>Phone: {beneficiary?.phone}</Title>
          <Title level={5}>Address: {beneficiary?.address}</Title>
          <Title level={5}>
            Kit status: {kitReceived ? "Delivered" : "Not delivered"}
          </Title>
          <RecievedKitSection size={20}>
            <strong>Delivered kit:</strong>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              checked={kitReceived}
              disabled={kitReceived}
              onChange={(checked) => {
                BeneficiariesApi.updateBeneficiary({
                  ...beneficiary,
                  receivedKit: checked,
                });
                setKitRecieved(checked);
              }}
            />
          </RecievedKitSection>
        </>
      )}
    </PageWrapper>
  );
};
