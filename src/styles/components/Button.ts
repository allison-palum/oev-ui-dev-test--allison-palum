import styled from 'styled-components'
import * as utilities from '../utilities';

export const Container = styled.button`
    cursor: pointer;
    text-transform: uppercase;
    background-color: ${utilities.colours.primary.DEFAULT};
    color: ${utilities.colours.neutrals.TEXT};
    font-size: 18px;
    line-height: 27px;
    font-weight: 700;
    display: inline-block;
    border: none;
    padding: 16px 32px;
    border-radius: 8px;

    &:hover {
        background-color: ${utilities.colours.secondary_blues.HOVER};
        transition: all 60ms ease-in 0s;
    }
`