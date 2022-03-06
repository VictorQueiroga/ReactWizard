import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "react-tabs";


export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;


export const WrapperTab = styled(Tab)`
border-radius: 16px;
border: 1px solid #ccc;
padding: 16px;
user-select: none;
cursor: pointer;
z-index: 99999;
background-color: "#fff";
margin: 8px;
&:focus {
  outline: none;
}
&.is-selected {
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
}
`;

export const WrapperTabPanel = styled(TabPanel)`
padding: 16px;
border: 1px solid "#ccc";
margin-top: -5px;
&.is-selected {
  display: block;
}
`;

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;