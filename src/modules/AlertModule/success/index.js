import Swal from "sweetalert2";

export const Success = () => {
  Swal.fire({
    toast: true,
    position: "top-end",
    title: "Formulário enviado com sucesso!",
    showConfirmButton: false,
    timerProgressBar: true,
    icon: "success",
    color: "green",
    showCloseButton: true,
    timer: 2000,
  });
};
