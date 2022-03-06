import { useContext } from "react";
import { WizardContext } from "../provider/wizard-provider";

const useWizard = () => {
    const { wizardState, getwizard } = useContext(
        WizardContext
    );

    return { wizardState, getwizard };
};

export default useWizard;