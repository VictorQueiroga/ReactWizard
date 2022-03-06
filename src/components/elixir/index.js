import React from "react";
import * as S from "./styled"

const Elixir = ({ name }) => {
    return (
        <S.Wrapper>
            <S.WrapperName>Elixir: { name }</S.WrapperName>
        </S.Wrapper>
    );
};

export default Elixir;