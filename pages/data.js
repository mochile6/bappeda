import _ from "lodash";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { connect } from "react-redux";
import { RESOURCE_NAME } from "../utils/constant";
import { getAllData as _getAllData } from "../store/actions/resources";
import { getResources } from "../store/selector/resources";
import { deleteData } from "../store/actions/resources";
import Cookies from "js-cookie";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import axios from "axios";

const Data = ({ anggarans, getAllData }) => {
  useEffect(() => {
    (async () => {
      await getAllData("anggarans");
    })();
    console.log(anggarans);
  }, [anggarans]);

  const router = useRouter();

  const handleTambah = () => {
    router.push("/input");
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/anggarans/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    window.location.reload();
  };

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
        Data
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>userId</Th>
              <Th>Bidang Urusan</Th>
              <Th>kegiatan</Th>
              <Th>Satuan</Th>
              <Th>Target</Th>
              <Th>Pagu</Th>
            </Tr>
          </Thead>
          <Tbody>
            {_.map(anggarans?.rows ?? [], (anggaran) => (
              <Tr key={anggaran.userId}>
                {/* <Td>{anggaran.id}</Td> */}
                <Td>{anggaran.userId}</Td>
                <Td>{anggaran.bidangUrusan}</Td>
                <Td>{anggaran.kegiatan}</Td>
                <Td>{anggaran.satuan}</Td>
                <Td>{anggaran.target}</Td>
                <Td>{anggaran.pagu}</Td>
                <Button>
                  <a href={`/update?id=${anggaran.id}`}>Edit</a>
                </Button>
                <Button
                  onClick={() => {
                    handleDelete(anggaran.id);
                  }}
                >
                  <a>Delete</a>
                </Button>
              </Tr>
            ))}
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

      <Button onClick={handleTambah} colorScheme="blue">
        Tambah
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  anggarans: getResources(RESOURCE_NAME.ANGGARANS)(state),
});

const connector = connect(mapStateToProps, {
  getAllData: _getAllData,
});

export default connector(Data);
