import { createContext, useContext, type Dispatch } from "react";

export interface ModalI {
  openModal: boolean;
  setOpenModal: Dispatch<React.SetStateAction<boolean>>;
}

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("useModal deve ser usado dentro de um ModalProvider");
  return context;
};

export const ModalContext = createContext<null | ModalI>(null);
