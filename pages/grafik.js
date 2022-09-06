import { Container } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

const Grafik = () => {
  return (
    
      <div className="container-fluid">
        <h1>Grafik For Example</h1>
        <p className={styles.text}>
          An API is always needed to create mobile applications, single page
          applications, use AJAX calls and provide data to clients. An popular
          architectural style of how to structure and name these APIs and the
          endpoints is called REST(Representational Transfer State). HTTP 1.1
          was designed keeping REST principles in mind. REST was introduced by
          Roy Fielding in 2000 in his Paper Fielding Dissertations
        </p>
      </div>

  );
};

export default Grafik;
