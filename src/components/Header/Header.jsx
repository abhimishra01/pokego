import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "antd/dist/antd.min.css";

import { colors } from "utils/themes/colors";
import Button from "components/Button";
import pokelogo from "images/pokelogo.png";

const StyledHeader = styled.header`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border-bottom: 1px solid ${colors.primaryGray};
  background-color: ${colors.secondaryGray};
  color: ${colors.primaryWhite};
  padding: 0.5rem 1.2rem;
  max-height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: -1.5rem 0.5rem 2.6rem ${colors.primaryGray};
`;

const StyledLogo = styled.img`
  height: 18rem;
`;

const StyledSubHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin-left: 0.5rem;
`;

const StyledText = styled.span`
  font-size: 1.5em;
`;

export default function Header({ user, onLogin, onLogout, onCreateAccount }) {
  return (
    <StyledHeader className="wrapper">
      <StyledSubHeader>
        <StyledLogo src={pokelogo} alt="pokelogo" />
      </StyledSubHeader>
      <div>
        {user ? (
          <AvatarContainer>
            <StyledText className="welcome">
              Welcome, <b>{user.name}</b>!
            </StyledText>
            <ButtonContainer>
              <Button
                size="small"
                shape="round"
                onClick={onLogout}
                label="Log out"
                border="0.02rem solid #001"
              />
            </ButtonContainer>
          </AvatarContainer>
        ) : (
          <AvatarContainer>
            <ButtonContainer>
              <Button
                size="small"
                shape="round"
                onClick={onLogin}
                label="Log in"
                border="0.02rem solid #001"
              />
            </ButtonContainer>
            <ButtonContainer>
              <Button
                primary
                size="small"
                shape="round"
                onClick={onCreateAccount}
                label="Sign up"
                border="0.02rem solid #001"
              />
            </ButtonContainer>
          </AvatarContainer>
        )}
      </div>
    </StyledHeader>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
  onCreateAccount: PropTypes.func,
};
