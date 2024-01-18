import Swal from "sweetalert2";

export const Error = () => {
  Swal.fire({
    toast: true,
    position: "top-end",
    title: "Algo deu errado, formulário não enviado!",
    showConfirmButton: false,
    timerProgressBar: true,
    icon: "error",
    color: "red",
    showCloseButton: true,
    timer: 2500,
  });
};
