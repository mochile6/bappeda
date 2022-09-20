import React from "react";
import z from "zod";
import { Button, Input, Container } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { addData as _addData } from "../store/actions/resources";
import { RESOURCE_NAME } from "../utils/constant";

const inputSchema = z.object({
  kegiatan: z.string().min(1),
  satuan: z.string().min(1),
  target: z.string().min(1),
  pagu: z.string().min(1),
});

const InputPage = ({ addData }) => {
  const router = useRouter();
  const { handleSubmit, register } = useForm({
    resolver: zodResolver(inputSchema),
  });

  const onSubmit = async (values) => {
    await addData(RESOURCE_NAME.ANGGARANS, values);
    const confirm = window.confirm("Data berhasil ditambahkan");
    if (confirm) {
      // refresh going to same page
      router.push("/data");
    }
  };

  return (
    <Container>
      <form
        onSubmit={handleSubmit(onSubmit, console.log)}
        className="form-container"
      >
        <div className="form-outline mb-4">
          <p className="h3 mb-4 text-center">FORM DATA</p>
          <input
            type="text"
            id="form2Example1"
            className="form-control"
            {...register("kegiatan")}
          />
          <label className="form-label">kegiatan</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="satuan"
            id="form2Example2"
            className="form-control"
            {...register("satuan")}
          />
          <label className="form-label">Satuan</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="form2Example2"
            className="form-control"
            {...register("target")}
          />
          <label className="form-label">Target</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="form2Example2"
            className="form-control"
            {...register("pagu")}
          />
          <label className="form-label">Pagu</label>
        </div>

        <Button type="submit">Tambah</Button>
      </form>
    </Container>
  );
};

const connector = connect(null, { addData: _addData });

export default connector(InputPage);
