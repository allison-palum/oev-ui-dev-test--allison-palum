import styled from 'styled-components'
import * as utilities from '../utilities';

export const Container = styled.article`
    font-family: ${utilities.typography.FONT_FAMILY};
    background-color: ${utilities.colours.background.DEFAULT};
    border-radius: 16px;

    .card__image-container {
        background-color: ${utilities.colours.neutrals.IMAGE_BACKGROUND};
        border-radius: 16px 16px 0 0;

        .card__image-container__image {
            width: 100%;
            height: 100%;
        }
    }

    .card__details {
        padding: 32px;

        .card__details__header,
        .card__details__description {
            color: ${utilities.colours.neutrals.TEXT};
        }

        .card__details__header {
            font-size: ${utilities.typography.h4.FONT_SIZE};
            line-height: ${utilities.typography.h4.LINE_HEIGHT};
            font-weight: ${utilities.typography.h4.FONT_WEIGHT};
            margin: 0 0 8px 0;
        }

        .card__details__description {
            font-size: ${utilities.typography.p.FONT_SIZE};
            line-height: ${utilities.typography.p.LINE_HEIGHT};
            font-weight: ${utilities.typography.p.FONT_WEIGHT};
            margin: 0;
        }

        .card__details__button {
            margin-top: 16px;
        }
    }

    &.card--selected {
        background-color: ${utilities.colours.secondary_purples.SELECTED};
    }

    &:hover {
        cursor: pointer;
        background-color: ${utilities.colours.secondary_purples.HOVER};
        transform: translateY(-0.25rem);
        transition: all 60ms ease-in 0s;
    }
`

export const Button = styled.button`
    cursor: pointer;
    text-transform: uppercase;
    background-color: ${utilities.colours.primary.DEFAULT};
    color: ${utilities.colours.neutrals.TEXT};
    font-size: ${utilities.typography.button.FONT_SIZE};
    line-height: ${utilities.typography.button.LINE_HEIGHT};
    font-weight: ${utilities.typography.button.FONT_WEIGHT};
    display: inline-block;
    border: none;
    padding: 16px 32px;
    border-radius: 8px;

    &:hover {
        background-color: ${utilities.colours.secondary_blues.HOVER};
        color: ${utilities.colours.neutrals.TEXT};
        transition: all 60ms ease-in 0s;
    }
`