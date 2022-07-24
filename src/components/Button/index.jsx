import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "antd/dist/antd.min.css";
import { Button as AntdButton } from "antd";

const StyledButton = styled(AntdButton)`
  && {
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.labelColor};
    border: ${(props) => props.border};
  }
`;

export const Button = ({
  loading,
  size,
  label,
  disabled,
  htmlType,
  type,
  shape,
  backgroundColor,
  labelColor,
  border,
}) => {
  return (
    <StyledButton
      type={type}
      size={size}
      htmlType={htmlType}
      disabled={disabled}
      loading={loading}
      shape={shape}
      backgroundColor={backgroundColor}
      labelColor={labelColor}
      border={border}
    >
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  labelColor: PropTypes.string,
  htmlType: PropTypes.string,
  label: PropTypes.string.isRequired,
  border: PropTypes.string,
  type: PropTypes.oneOf([
    "primary",
    "ghost",
    "dashed",
    "link",
    "text",
    "default",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  shape: PropTypes.oneOf(["circle", "round", "default"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  backgroundColor: null,
  onClick: () => console.log("clicked"),
};
