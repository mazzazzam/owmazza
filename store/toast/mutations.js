export default {
  showToast: (state, toastText) => {
    state.toast.show = true;
    state.toast.text = toastText;
  },
  hideToast: (state) => {
    state.toast.show = false;
    state.toast.text = "";
  },
};
