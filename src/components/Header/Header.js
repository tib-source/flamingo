import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
`;

const Icon = styled.div``;
const Header = (props) => {
  return (
    <HeaderWrapper>
      <Icon>FLAMINGO</Icon>
    </HeaderWrapper>
  );
};

export default Header;
