import React, { useEffect, useState } from "react";
import useWizard from "../../hooks/wizard-hooks";
import Elixir from "../elixir";
import * as S from "./styled";

const Elixirs = () => {
    const { wizardState } = useWizard();
    const [ hasElixirForSearch, setHasElixirForSearch ] = useState(true);
    
    useEffect( () => {
        if(wizardState.hasWizard){
            setHasElixirForSearch((wizardState.elixirs != null));
        }
        
    }, [wizardState.elixirs,wizardState.hasWizard]);

    return (
        <>
            { hasElixirForSearch !== null ? (
                <S.WrapperTabs selectedTabClassName="is_selected" selectedTabPanelClassName="is_selected">
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            { wizardState.elixirs.map( (item) => (

                                <Elixir name={item.name}/>

                                 ) ) }
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                </S.WrapperTabs>
            ) : (
                <></>
            )}
        </>
    );
};

export default Elixirs;