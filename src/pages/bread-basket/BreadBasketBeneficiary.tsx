import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Space, Typography, Tag, Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Spin } from "antd";
import { PageWrapper } from "../styles";
import { TitleNav } from "../../components/title-nav";
import { BreadBasketBeneficiary } from "../../data/bread-basket-beneficiaries/types";
import { BreadBasketBeneficiariesApi } from "../../data/bread-basket-beneficiaries/api";

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

const DeliveredForSection = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

const getCurrentDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm: number | string = today.getMonth() + 1;
  let dd: number | string = today.getDate();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  return yyyy + "-" + mm + "-" + dd;
};

const isSameMonthYear = (d1: string, d2: string) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  return (
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

const getDateDisplayValue = (d: string) => {
  const date = new Date(d);

  return date.toLocaleString("default", {
    month: "short",
    year: "numeric",
  });
};

export const BreadBasketBeneficiaryDetail: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [beneficiary, setBeneficiary] = useState<BreadBasketBeneficiary | null>(
    null
  );
  const [deliveredFor, setDeliveredFor] = useState(
    beneficiary?.deliveredFor || []
  );
  const { token } = useParams() as { token: string };

  const currentDate = getCurrentDate();
  const isDeliveredForThisMonth = !!deliveredFor.find((d) =>
    isSameMonthYear(d, currentDate)
  );
  const currentDateDisplayValue = getDateDisplayValue(currentDate);

  useEffect(() => {
    BreadBasketBeneficiariesApi.getBeneficiaryByToken(token)
      .then(setBeneficiary)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setDeliveredFor(beneficiary?.deliveredFor || []);
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
      {!isLoading && !isError && !beneficiary && (
        <CenterAlignedContent>
          Beneficiary information not found
        </CenterAlignedContent>
      )}
      {!isLoading && !isError && beneficiary && (
        <>
          <Title level={5}>Token: {beneficiary.token}</Title>
          <Title level={5}>Name: {beneficiary.name}</Title>
          <Title level={5}>Phone: {beneficiary.contact}</Title>
          <Title level={5}>Delivery status: </Title>
          {deliveredFor.length !== 0 ? (
            <DeliveredForSection>
              {deliveredFor.map((d) => (
                <Tag key={d}>{getDateDisplayValue(d)}</Tag>
              ))}
            </DeliveredForSection>
          ) : (
            "Baskets not delivered yet"
          )}

          <RecievedKitSection size={20}>
            <strong>
              {isDeliveredForThisMonth
                ? `Delivered for: ${currentDateDisplayValue}`
                : `Mark delivered for: ${currentDateDisplayValue}`}
            </strong>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              checked={isDeliveredForThisMonth}
              disabled={isDeliveredForThisMonth}
              onChange={(checked) => {
                if (!checked) {
                  return;
                }

                const updatedDeliveredFor = [...deliveredFor, currentDate];
                BreadBasketBeneficiariesApi.updateBeneficiary({
                  ...beneficiary,
                  deliveredFor: updatedDeliveredFor,
                });
                setDeliveredFor(updatedDeliveredFor);
              }}
            />
          </RecievedKitSection>
        </>
      )}
    </PageWrapper>
  );
};
