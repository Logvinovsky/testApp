import React, { FC } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

interface ILoaderProps {
  height?: number;
  size?: number;
}

interface IWrapperProps {
  height: number
}

const Wrapper = styled.div<IWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.height ? `${props.height}px;` : "100vh;")};
`;

export const Loader: FC<ILoaderProps> = ({ height = 0, size }) => (
  <Wrapper height={height}>
    <CircularProgress color="primary" size={size} />
  </Wrapper>
);

