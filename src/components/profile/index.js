import React from "react";
import useWizard from "../../hooks/wizard-hooks";
import * as S from "./styled";

const Profile = () => {
    const { wizardState } = useWizard();

    return (
        <S.Wrapper>
            <h1>First name:</h1>
            <span>{wizardState.wizard.firstName}</span>
            <h1>Last name:</h1>
            <span>{wizardState.wizard.lastName}</span>
        </S.Wrapper>
    )
};

export default Profile;