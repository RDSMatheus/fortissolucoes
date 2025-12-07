import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router";

const Login = () => {
  const { isLogged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) navigate("/pdv");
  }, [isLogged]);

  return (
    <section className="grid place-items-center h-dvh w-dvw">
      <div className="shadow-[0_0_4px_2px_rgba(0,0,0,0.2)] bg-white rounded-2xl p-4">
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
