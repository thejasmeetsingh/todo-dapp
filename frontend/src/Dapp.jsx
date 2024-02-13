import { MetaMaskButton, useAccount, useSDK } from "@metamask/sdk-react-ui";
import "./index.css";
import App from "./components/App";

const Dapp = () => {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return (
      <div className="text-center">
        <MetaMaskButton theme={"light"} color="white"></MetaMaskButton>
      </div>
    );
  }

  return <App />;
};

export default function () {
  const { ready } = useSDK();
  let content = <Dapp />;

  if (!ready) {
    content = <div className="text-center">Loading...</div>;
  }

  return <div className="container mx-auto mt-20 py-12">{content}</div>;
}
