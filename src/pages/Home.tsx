import { FC } from "react";
import { Typography, Layout, Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageWrapper } from "./styles";

const { Title } = Typography;
const { Content } = Layout;

const StyledTitle = styled(Title)`
  text-align: center;
  margin-top: 40px;
`;

const StyledContent = styled(Content)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: auto;
`;

export const Home: FC = () => {
  return (
    <PageWrapper>
      <StyledTitle level={4}>The United - Ramadan Kits 2023</StyledTitle>
      <StyledContent>
        <Link to="/beneficiary/1">
          <Button type="primary">Beneficiary Info</Button>
        </Link>
      </StyledContent>
    </PageWrapper>
  );
};
