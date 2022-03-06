import React from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import Profile from "./components/profile";
import Elixirs from "./components/elixirs";
import useWizard from "./hooks/wizard-hooks";

const App = () => {
  const { wizardState } = useWizard();
  return (
    <Layout>
      { wizardState.hasWizard ? (
        <>
          { wizardState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Elixirs />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;
