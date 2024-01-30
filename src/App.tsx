import { ConfigProvider, Flex } from "antd";
import React from "react";
import CarouselItem from "./components/CarouselItem";
import Editor from "./components/Editor";
import MiniCarousel from "./components/MiniCarousel";
import { GlobalStoreProvider } from "./contexts/global.context";

const App: React.FC = () => (
  <div>
    <ConfigProvider>
      <GlobalStoreProvider>
        <Flex gap={"1em"} vertical>
          <Flex gap={"1em"}>
            <CarouselItem />
            <Editor />
          </Flex>
          <MiniCarousel />
        </Flex>
      </GlobalStoreProvider>
    </ConfigProvider>
  </div>
);

export default App;
