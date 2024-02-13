import React from "react";
import ReactDOM from "react-dom/client";
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";
import Dapp from "./Dapp";
import { Provider } from "./context/todo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MetaMaskUIProvider
    sdkOptions={{
      dappMetadata: {
        name: "ToDo: D-App",
        url: window.location.href,
      },
    }}
  >
    <Provider>
      <Dapp />
    </Provider>
  </MetaMaskUIProvider>
);
