"use client";

import React from "react";
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
  ReactTabsFunctionComponent,
  TabProps,
} from "react-tabs";
import "react-tabs/style/react-tabs.css";
const CustomTab: ReactTabsFunctionComponent<TabProps> = ({
  children,
  ...otherProps
}) => (
  <Tab className={"flex flex-row bg-red-600 h-[20px] w-fit "} {...otherProps}>
    <h1 className={"w-fit font-bold"}>{children}</h1>
  </Tab>
);

CustomTab.tabsRole = "Tab";
export const PanelTab = () => {
  return (
    <Tabs>
      <TabList>
        <CustomTab>Title 1</CustomTab>
        <CustomTab>Title 2</CustomTab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
};
