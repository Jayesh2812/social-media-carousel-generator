import { createContext, useContext } from "react";
import globalInitialValue from "../assets/globalInitialValue";

interface ICarouselItem {
  isHidden: boolean;
  header: string;
  description?: string;
}

interface Carousel {
  items: Array<ICarouselItem>;
  background: string;
  username: string;
  handle?: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  avatar?: Blob ; // To be decided
  socialHandle?: any; // To be decided
}
const GlobalStore = createContext(globalInitialValue as Carousel);

export const GlobalStoreProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <GlobalStore.Provider value={globalInitialValue}>{children}</GlobalStore.Provider>;
};

const useGlobalStore = () => useContext(GlobalStore);

export default useGlobalStore;
