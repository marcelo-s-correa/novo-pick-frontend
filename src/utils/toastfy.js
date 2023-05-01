import Toastify from "toastify-js";

export const showToast = (
  message,
  time,
  gravity,
  position,
  backgroundColor
) => {
  Toastify({
    text: message,
    duration: time,
    gravity: gravity,
    position: position,
    backgroundColor: backgroundColor,
    stopOnFocus: true,
  }).showToast();
};
