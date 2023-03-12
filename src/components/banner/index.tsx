import { FC } from "react";
import BannerImage from "../../assets/banner.jpg";
import { Image } from "antd";

export const Banner: FC = () => {
  return <Image src={BannerImage} />;
};
