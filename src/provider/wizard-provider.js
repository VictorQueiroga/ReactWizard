import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const WizardContext = createContext({
    loading: false,
    wizard: {},
    elixirs: [],
});

const WizardProvider = ({ children }) => {
    const [wizardState, setWizardState] = useState({
        hasWizard: false,
        loading: false,
        wizard: {
            firstName: undefined,
            lastName: undefined,
        },
        elixirs: [],
    });

    const getWizard = (FirstName, LastName) => {
        setWizardState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        api.get(`Wizards?FirstName=${FirstName}&LastName=${LastName}`)
        .then(({ data }) => {
            setWizardState((prevState) => ({
                ...prevState,
                hasWizard: true,
                wizard: {
                    firstName: data[0].firstName,
                    lastName: data[0].lastName,
                },
                elixirs: data[0].elixirs,
            }));
        })
        .finally(() => {
            setWizardState((prevState) => ({
                ...prevState,
                loading: !prevState.loading,
            }));    
        });
    }

    const contextValue = {
        wizardState,
        getwizard: useCallback((FirstName, LastName) => getWizard(FirstName, LastName),[]),
    };

    return (
        <WizardContext.Provider value={contextValue}>
            { children }
        </WizardContext.Provider>
    );
};

export default WizardProvider;

