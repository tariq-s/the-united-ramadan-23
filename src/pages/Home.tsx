import { FC } from "react";
import { Typography, Layout, Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

const { Title } = Typography;
const { Content } = Layout;

const StyledLayout = styled(Content)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled(Title)`
  text-align: center;
`;

const StyledContent = styled(Content)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Home: FC = () => {
  return (
    <StyledLayout>
      <StyledTitle level={4}>The United - Ramadan Kits 2023</StyledTitle>
      <StyledContent>
        <Link to="/beneficiary/0">
          <Button type="primary">Beneficiary</Button>
        </Link>
      </StyledContent>
    </StyledLayout>
  );
};
