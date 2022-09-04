import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import { connect } from "react-redux";
import { RESOURCE_NAME } from "../utils/constant";
import { getResources } from "../store/selector/resources";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Home = ({ anggarans }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        An API is always needed to create mobile applications, single page
        applications, use AJAX calls and provide data to clients. An popular
        architectural style of how to structure and name these APIs and the
        endpoints is called REST(Representational Transfer State). HTTP 1.1 was
        designed keeping REST principles in mind. REST was introduced by Roy
        Fielding in 2000 in his Paper Fielding Dissertations
      </p>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  anggarans: getResources(RESOURCE_NAME.ANGGARANS)(state),
});

const connector = connect(mapStateToProps);

export default connector(Home);
