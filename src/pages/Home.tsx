import { FC } from "react";
import { Typography, Layout, Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageWrapper } from "./styles";
import { ScanOutlined } from "@ant-design/icons";
import { Banner } from "../components/banner";
import { ProjectType } from "../data/project/types";

const { Title } = Typography;
const { Content } = Layout;

const StyledTitle = styled(Title)`
  text-align: center;
  margin-top: 28px;
`;

const StyledContent = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: auto;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid purple;
  padding: 20px;
  font-size: large;
  border-radius: 4px;
  color: purple;
`;

export const Home = () => {
  return (
    <PageWrapper>
      <StyledTitle level={4}>The United Foundation</StyledTitle>
      <StyledContent>
        <Link to="/ramadan-distribution">
          <Card>Ramadan Distribution</Card>
        </Link>
        <Link to="/bread-basket">
          <Card>Bread Basket</Card>
        </Link>
      </StyledContent>
      <Banner />
    </PageWrapper>
  );
};
