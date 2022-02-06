import React from "react";
import { XLigerPrice, XLigerPriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/XLigerPrice",
  component: XLigerPrice,
};

const Template: React.FC<XLigerPriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <XLigerPrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  xligerPriceUsd: 20.0,
};
