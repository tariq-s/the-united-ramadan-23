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
  justify-content: center;
  align-items: center;
  flex: auto;
`;

interface Props {
  project: ProjectType;
  title: string;
}

export const ProjectHome = ({ project, title }: Props) => {
  const linkTo = `/scan?project=${project}`;
  return (
    <PageWrapper>
      <StyledTitle level={4}>{title}</StyledTitle>
      <StyledContent>
        <Link to={linkTo}>
          <Button size="large" icon={<ScanOutlined />} type="primary">
            Scan QR
          </Button>
        </Link>
      </StyledContent>
      <Banner />
    </PageWrapper>
  );
};
