import React, { useEffect, useState } from "react";
import z from "zod";
import { Button, Input, Container } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { getDataById, updateData } from "../store/actions/resources";
import { RESOURCE_NAME } from "../utils/constant";
import Cookies from "js-cookie";
import axios from "axios";

const updateSchema = z.object({
  kegiatan: z.string().min(1),
  satuan: z.string().min(1),
  target: z.string().min(1),
  pagu: z.string().min(1),
});

const UpdatePage = ({ anggarans, updateData }) => {
  const router = useRouter();
  const [dataAnggaran, setDataAnggaran] = useState({});

  const data = router.query;
  console.log(data);

  const getData = async (id) => {
    const res = await axios.get(
      `http://localhost:3001/anggarans/${id}`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
      // console error
    );
    // if error call it once again
    if (res.status === 500) {
      getData(id);
    }
    console.log(res.data);

    setDataAnggaran(res.data);
  };

  // call getdata twice
  useEffect(() => {
    // if data is not undefined fetch api
    getData(data.id);
  }, [data]);

  const { handleSubmit, register } = useForm({
    resolver: zodResolver(updateSchema),
  });

  const onSubmit = async (values) => {
    await updateData(RESOURCE_NAME.ANGGARANS, values);

    router.push("/data");
  };

  return (
    <Container>
      <form
        onSubmit={handleSubmit(onSubmit, console.log)}
        className="form-container"
      >
        <div className="form-outline mb-4">
          <p className="h3 mb-4 text-center">FORM UPDATE DATA</p>
          <input
            type="text"
            id="form2Example1"
            className="form-control"
            {...register("kegiatan")}
            defaultValue={dataAnggaran.kegiatan}
          />
          <label className="form-label">kegiatan</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="satuan"
            id="form2Example2"
            className="form-control"
            {...register("satuan")}
            defaultValue={dataAnggaran.satuan}
          />
          <label className="form-label">Satuan</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="form2Example2"
            className="form-control"
            {...register("target")}
            defaultValue={dataAnggaran.target}
          />
          <label className="form-label">Target</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="form2Example2"
            className="form-control"
            {...register("pagu")}
            defaultValue={dataAnggaran.pagu}
          />
          <label className="form-label">Pagu</label>
        </div>

        <Button type="submit">Tambah</Button>
      </form>
    </Container>
  );
};

const connector = connect(null, { updateData });

export default connector(UpdatePage);
