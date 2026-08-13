import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Modal from "./components/layout/Modal";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Register";

function App() {
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <>
      <Navbar
        onOpenLogin={() => openModal("login")}
        onOpenRegister={() => openModal("register")}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>

      <Modal isOpen={modalType !== null} onClose={closeModal}>
        {modalType === "login" ? <LoginForm compact /> : null}
        {modalType === "register" ? <RegisterForm compact /> : null}
      </Modal>
    </>
  );
}

export default App;
