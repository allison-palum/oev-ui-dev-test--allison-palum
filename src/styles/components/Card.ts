import styled from 'styled-components'
import * as utilities from '../utilities';

export const Container = styled.article`
    font-family: ${utilities.TYPOGRAPHY.FONT_FAMILY};
    background-color: ${utilities.COLOURS.BACKGROUND};

    .card__image-container {
        background-color: ${utilities.COLOURS.BACKGROUND__IMAGE};

        .img {

        }
    }
`

export const Button = styled.button`
    background-color: #eee;
    cursor: pointer;
    display: inline-block;
    padding: 6px 10px;

    &:hover {
        background-color: #ccc;
    }
`