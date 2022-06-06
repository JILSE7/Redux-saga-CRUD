import { Provider } from "react-redux";
import SagaRouter from "./router/SagaRouter";
import store from "./redux/Store";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <Provider store={store}>
      <SagaRouter/>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </Provider>
  );
}

export default App;
