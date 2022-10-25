import { ProviderWrapper as VoteProviderWrapper } from "../../contexts/VoteContext";
import App from "../App/App";

const AppLoader = () => {
  return (
    <VoteProviderWrapper>
      <App></App>
    </VoteProviderWrapper>
  );
};

export default AppLoader;
