import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout, Space, Typography, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { BeneficiariesApi } from "../data/beneficiaries/api";
import { Beneficiary } from "../data/beneficiaries/types";

const { Title } = Typography;

const StyledLayout = styled(Layout)`
  padding: 0 8px;
`;

const StyledTitle = styled(Title)`
  margin: 16px 0;
`;

export const BeneficiaryDetail: FC = () => {
  const [beneficiary, setBeneficiary] = useState<Beneficiary>();
  const { token } = useParams() as { token: string };

  useEffect(() => {
    const fetchBeneficiary = async () => {
      const data = await BeneficiariesApi.getBeneficiaryByToken(token);
      setBeneficiary(data);
    };

    fetchBeneficiary();
  }, []);
  return (
    <StyledLayout>
      <Space>
        <Link to="/">
          <Button type="text">
            <LeftOutlined />
          </Button>
        </Link>
        <StyledTitle level={4}>Beneficiary</StyledTitle>
      </Space>
    </StyledLayout>
  );
};
