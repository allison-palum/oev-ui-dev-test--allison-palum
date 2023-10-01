import styled from 'styled-components'
import * as utilities from '../utilities';

export const Container = styled.article`
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
            margin: 0 0 8px 0;
        }

        .card__details__description {
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

export default {
    Container
};