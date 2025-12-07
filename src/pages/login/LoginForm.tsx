import { FormProvider, useForm } from "react-hook-form";
import InputWithLabel from "../../components/common/InputWithLabel";
import { Button, Spinner } from "flowbite-react";
import { useAuth } from "../../hooks/useAuth";

const LoginForm = () => {
  const { login } = useAuth();
  const form = useForm({
    defaultValues: { email: "", password: "" },
  });

  const handlelogin = async (data: { email: string; password: string }) => {
    try {
      await login(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <form className="grid" onSubmit={form.handleSubmit(handlelogin)}>
          <InputWithLabel
            label="Login"
            type="text"
            placeholder="Insira seu login"
            required={true}
            nameInSchema="email"
          />
          <InputWithLabel
            label="Password"
            type="text"
            placeholder="*******"
            required={true}
            nameInSchema="password"
          />
          {form.formState.isSubmitting ? (
            <Button disabled>
              Logando... <Spinner />
            </Button>
          ) : (
            <Button type="submit">Entrar</Button>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
