import { memo } from "react";
import { useStyles } from "../styles/styles";
import { Header, Sidebar, Content } from "./sections";

const Wrapper = () => {
  const styles = useStyles();

  return (
    <div className={`${styles.root}`}>
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};

export default memo(Wrapper);
