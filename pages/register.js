import z from "zod";
import { Button, Container } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { registerUser as _registerUser } from "../store/actions/currentUser";

const registerSchema = z.object({
  email: z.string().email(),
  dinas: z.string().min(1),
  password: z.string().min(1),
  username: z.string().min(1),
});

const Regis = ({ registerUser }) => {
  const router = useRouter();
  const { handleSubmit, register } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (values) => {
    await registerUser(values);

    router.push("/");
  };

  return (
    <Container>
      <form
        onSubmit={handleSubmit(onSubmit, console.log)}
        className="form-container"
      >
        <div className="form-outline mb-4">
          <p className="h3 mb-4 text-center">Register</p>
          <input
            type="text"
            id="form2Example1"
            className="form-control"
            {...register("dinas")}
          />
          <label className="form-label">Dinas</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="form2Example2"
            className="form-control"
            {...register("username")}
          />
          <label className="form-label">Username</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example3"
            className="form-control"
            {...register("email")}
          />
          <label className="form-label">Email address</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example4"
            className="form-control"
            {...register("password")}
          />
          <label className="form-label">Password</label>
        </div>

        <Button type="POST">Daftar</Button>
      </form>
    </Container>
  );
};

const connector = connect(null, { registerUser: _registerUser });

export default connector(Regis);
