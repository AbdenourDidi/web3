import { ProviderWrapper as WebProviderWrapper } from "../../contexts/webAppContext";
import App from "../App/App";

const AppLoader = () => {
  return (
    <WebProviderWrapper>
      <App></App>
    </WebProviderWrapper>
  );
};

export default AppLoader;
