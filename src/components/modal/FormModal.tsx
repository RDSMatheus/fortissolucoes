import {
  ArrowRightIcon,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Spinner,
} from "flowbite-react";
import { useModal } from "../../hooks/useModal";
import { FormProvider, useForm } from "react-hook-form";
import InputWithLabel from "../common/InputWithLabel";
import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { testSchema } from "../../schemas/test";
import { MdSecurity } from "react-icons/md";
import { BiLock } from "react-icons/bi";
import ToastComponent from "../common/ToastComponent";
import type { SignUp } from "../../types/auth";
import { SIGNUP } from "../../services/api";

const FormModal = () => {
  const { openModal, setOpenModal } = useModal();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastSuccess, setToastSuccess] = useState(true);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const form = useForm({
    mode: "all",
    resolver: zodResolver(testSchema),
    defaultValues: {
      email: "",
      confirmPassword: "",
      name: "",
      password: "",
      companyName: "",
      phone: "",
    },
  });

  const handleEmailSubmit = async (data: SignUp) => {
    try {
      const { url, options } = SIGNUP(data);

      const response = await fetch(url, options);

      const json = await response.json();

      console.log(json);

      if (!response.ok) throw new Error(json.error ?? json.message);

      setMessage(json.message);
      setShowToast(true);
      setToastSuccess(true);

      form.reset();

      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Error interno do servidor.");
      }
      setToastSuccess(false);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        console.log("trigou");
      }, 3000);
    }
  };

  return (
    <Modal
      show={openModal}
      size="lg"
      dismissible
      popup
      onClose={() => setOpenModal(false)}
    >
      <ModalHeader />
      <ModalBody>
        <div className="mb-10">
          <div className="bg-blue-600 p-5 w-fit rounded-full mx-auto mb-8">
            <MdSecurity className="text-white w-10 h-10 bg-blue-600 rounded-full" />
          </div>
          <h2 className="text-center text-3xl mb-3 font-poppins text-black/80">
            Comece seu teste grátis
          </h2>
          <p className="text-center text-black/70">
            Preencha abaixo parar liberar seu teste.
          </p>
        </div>
        <FormProvider {...form}>
          <form
            ref={formRef}
            onSubmit={form.handleSubmit(handleEmailSubmit)}
            className="grid grid-cols-2 gap-3"
          >
            <InputWithLabel
              label="Nome"
              type="text"
              required
              nameInSchema="name"
              placeholder="Insira seu nome"
            />
            <InputWithLabel
              label="Nome da loja"
              type="text"
              required
              nameInSchema="companyName"
              placeholder="Insira o nome da sua loja"
            />

            <InputWithLabel
              label="Email"
              required
              type="email"
              nameInSchema="email"
              placeholder="email@email.com"
            />
            <InputWithLabel
              label="Telefone"
              required
              type="text"
              nameInSchema="phone"
              placeholder="(00)00000-0000"
            />
            <InputWithLabel
              label="Senha"
              type="password"
              required
              nameInSchema="password"
              placeholder="*******"
            />
            <InputWithLabel
              label="Confirmação de senha"
              type="password"
              required
              nameInSchema="confirmPassword"
              placeholder="*******"
            />
            {form.formState.isSubmitting ? (
              <Button disabled className="cursor-pointer flex gap-2 col-span-2">
                Registrar <ArrowRightIcon /> <Spinner />
              </Button>
            ) : (
              <Button
                type="submit"
                className="cursor-pointer flex gap-2 col-span-2"
              >
                Registrar <ArrowRightIcon />
              </Button>
            )}
          </form>
        </FormProvider>
        <p className="text-center flex text-gray-600 items-center gap-2 justify-center mt-5">
          <BiLock className="w-4 h-4" /> Seus dados estão 100% seguros. Sem
          spam.
        </p>
        <ToastComponent
          errorMessage={errorMessage}
          message={message}
          setShowToast={setShowToast}
          showToast={showToast}
          toastSuccess={toastSuccess}
        />
      </ModalBody>
    </Modal>
  );
};

export default FormModal;
