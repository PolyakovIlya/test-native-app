import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import styles from '../styles/variables';

class Loader extends Component {
    render() {
        return (
            <Wrapper>
                <Element />
                <Element />
                <Element />
                <Element />
            </Wrapper>
        );
    }
}

const Wrapper = styled.View`
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
`;

const keyFrames = keyframes`
    0% {
         transform: rotate(0deg);
    }
    100% {
         transform: rotate(360deg);
    }
`;


const Element = styled.View`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid ${styles.backgroundPrimary};
    border-radius: 50%;
    animation: ${keyFrames} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${styles.backgroundPrimary} transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
`;


export default Loader;