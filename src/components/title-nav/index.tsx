import { LeftOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

const { Title } = Typography;

export const TitleNav: FC<{ title: ReactNode }> = ({ title }) => {
  return (
    <Space>
      <Link to="/">
        <Button type="text">
          <LeftOutlined />
        </Button>
      </Link>
      <Title level={4}>{title}</Title>
    </Space>
  );
};
