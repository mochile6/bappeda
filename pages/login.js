import z from "zod";
import { Button, Container } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { loginUser as _loginUser } from "../store/actions/currentUser";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

const Login = ({ loginUser }) => {
  const router = useRouter();
  const { handleSubmit, register } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values) => {
    await loginUser(values);

    router.push("/");
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <Container>
      <form
        onSubmit={handleSubmit(onSubmit, console.log)}
        className="form-container"
      >
        <div className="form-outline mb-4">
          <p className="h3 mb-4 text-center">LOGIN</p>
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            {...register("email")}
          />
          <label className="form-label">Email address</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            {...register("password")}
          />
          <label className="form-label">Password</label>
        </div>

        <Button type="submit">Login</Button>
        <Button onClick={handleRegister} type="">
          Register
        </Button>
      </form>
    </Container>
  );
};

const connector = connect(null, { loginUser: _loginUser });

export default connector(Login);
