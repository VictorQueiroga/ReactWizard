import React from "react";
import App from "./App";
import WizardProvider from "./provider/wizard-provider";
import { ResetCSS } from "./global/resetCSS";


const Providers = () => {
    return (
      <main>
        <WizardProvider>
            <ResetCSS />
            <App />
        </WizardProvider>
      </main>
    );
  };
  
  export default Providers;