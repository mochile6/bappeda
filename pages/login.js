import z from "zod";
import { Button, Input, Stack, Text, Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { loginUser as _loginUser } from "../store/actions/currentUser";
import Form from "../comps/Form";

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

  return (
    <Box>
      <Form onSubmit={handleSubmit(onSubmit, console.log)}>
        <Stack spacing={3}>
          <Text>Login</Text>
          <Input {...register("email")} placeholder={"Email"} />
          <Input
            type={"password"}
            {...register("password")}
            placeholder={"Password"}
          />
          <Button type={"submit"}>Login</Button>
        </Stack>
      </Form>
    </Box>
  );
};

const connector = connect(null, { loginUser: _loginUser });

export default connector(Login);
