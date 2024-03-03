import { LeftOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

export const TitleNav: FC<{ title: ReactNode }> = ({ title }) => {
  const navigate = useNavigate();
  return (
    <Space>
      <Button onClick={() => navigate(-1)} type="text">
        <LeftOutlined />
      </Button>
      ;mfvmf
      <Title level={4}>{title}</Title>
    </Space>
  );
};
