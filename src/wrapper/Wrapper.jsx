import { memo } from "react";
import { Header, Sidebar } from "./sections";

const Wrapper = () => {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
};

export default memo(Wrapper);
