import { FC } from "react";
import { Link } from "react-router-dom";
import { Layout, Space, Typography, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import styled from "styled-components";

const { Title } = Typography;

const StyledLayout = styled(Layout)`
  padding: 0 8px;
`;

const StyledTitle = styled(Title)`
  margin: 16px 0;
`;

export const Beneficiary: FC = () => {
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
