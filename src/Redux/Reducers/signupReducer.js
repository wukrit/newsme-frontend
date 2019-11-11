const initialState = {
  loginEmail: "",
  loginPassword: "",
  email: "",
  password: "",
  name: "",
  step: 1,
  validEmail: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_EMAIL":
      return { ...state, email: payload };
    case "SET_LOGIN_EMAIL":
      return { ...state, loginEmail: payload };
    case "SET_LOGIN_PASSWORD":
      return { ...state, loginPassword: payload };
    case "SET_PASSWORD":
      return { ...state, password: payload };
    case "SET_NAME":
      return { ...state, name: payload };
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "INVALID_EMAIL":
      return { ...state, validEmail: false };
    case "SIGNUP":
      return { email: "", password: "", name: "", loginEmail: "", loginPassword: "", step: 1 };
    default:
      return state;
  }
};
