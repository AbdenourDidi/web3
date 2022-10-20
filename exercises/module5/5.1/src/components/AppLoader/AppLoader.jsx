import { ProviderWrapper as CounterProviderWrapper } from "../../contexts/CountersContext";
import App from "../App/App";

const AppLoader = () => {
  return (
    <CounterProviderWrapper>
      <App></App>
    </CounterProviderWrapper>
  );
};

export default AppLoader;
