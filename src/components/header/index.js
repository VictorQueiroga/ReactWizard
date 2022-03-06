import React, { useState } from "react";
import * as S from "./styled";
import useWizard from "../../hooks/wizard-hooks";

const Header = () => {
    const { getwizard } = useWizard();
    const [firstNameForSearch, setFirstNameForSearch] = useState('');
    const [lastNameForSearch, setLastNameForSearch] = useState('');

    const submitGetWizard = () => {
        if(!firstNameForSearch && !lastNameForSearch){
            return;
        }

        return getwizard(firstNameForSearch, lastNameForSearch);
    }



    return (
        <header>
            <S.Wrapper>
                <input id="firstname" type="text" placeholder="Type first name for search" onChange={event => setFirstNameForSearch(event.target.value)} />
                <input id="lastname" type="text" placeholder="Type last name for search" onChange={event => setLastNameForSearch(event.target.value)} />
                <button  onClick={submitGetWizard}>
                    <span>Search</span>
                </button>
            </S.Wrapper>
        </header>
    );

};

export default Header;