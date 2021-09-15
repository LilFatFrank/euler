import localClasses from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={`${localClasses.container}`}>
      <div className={`${localClasses.loader}`} />
    </div>
  );
};

export default Loader;
