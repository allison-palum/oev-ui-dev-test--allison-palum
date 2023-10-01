import styled from 'styled-components'
import * as utilities from '../utilities';

export const Container = styled.article`
    font-family: ${utilities.TYPOGRAPHY.FONT_FAMILY};
    background-color: ${utilities.COLOURS.PRIMARY};
    border-radius: 16px;

    .card__image-container {
        background-color: ${utilities.COLOURS.BACKGROUND__IMAGE};
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
            color: ${utilities.COLOURS.TEXT};
        }

        .card__details__header {
            font-size: ${utilities.TYPOGRAPHY.h4.FONT_SIZE};
            line-height: ${utilities.TYPOGRAPHY.h4.LINE_HEIGHT};
            font-weight: ${utilities.TYPOGRAPHY.h4.FONT_WEIGHT};
            margin: 0 0 8px 0;
        }

        .card__details__description {
            font-size: ${utilities.TYPOGRAPHY.p.FONT_SIZE};
            line-height: ${utilities.TYPOGRAPHY.p.LINE_HEIGHT};
            font-weight: ${utilities.TYPOGRAPHY.p.FONT_WEIGHT};
            margin: 0;
        }

        .card__details__button {
            margin-top: 16px;
        }
    }

    &.card--selected {
        background-color: ${utilities.COLOURS.PRIMARY__SELECTED};
    }

    &:hover {
        cursor: pointer;
        background-color: ${utilities.COLOURS.PRIMARY__HOVER};
        transform: translateY(-0.25rem);
        transition: all 60ms ease-in 0s;
    }
`

export const Button = styled.button`
    cursor: pointer;
    text-transform: uppercase;
    background-color: ${utilities.COLOURS.BUTTON__DEFAULT};
    color: ${utilities.COLOURS.PRIMARY};
    font-size: ${utilities.TYPOGRAPHY.button.FONT_SIZE};
    line-height: ${utilities.TYPOGRAPHY.button.LINE_HEIGHT};
    font-weight: ${utilities.TYPOGRAPHY.button.FONT_WEIGHT};
    display: inline-block;
    border: none;
    padding: 16px 32px;
    border-radius: 8px;

    &:hover {
        background-color: ${utilities.COLOURS.BUTTON__HOVER};
        color: ${utilities.COLOURS.TEXT};
        transition: all 60ms ease-in 0s;
    }
`