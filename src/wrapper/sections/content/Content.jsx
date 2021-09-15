import Routes from "../../../routes/Routes";
import { useStyles } from "../../../styles/styles";
import classes from "../../../styles/app.module.scss";

const Content = () => {
  const styles = useStyles();

  return (
    <main className={styles.content}>
      <div className={styles.toolbar}></div>
      <section className={classes.contentSection}>
        <Routes />
      </section>
    </main>
  );
};

export default Content;
