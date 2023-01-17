import { ProviderWrapper as CounterProviderWrapper } from "../../contexts/VotesContext";
import App from "../App/App";

const AppLoader = () => {
  return (
    <CounterProviderWrapper>
      <App></App>
    </CounterProviderWrapper>
  );
};

export default AppLoader;
