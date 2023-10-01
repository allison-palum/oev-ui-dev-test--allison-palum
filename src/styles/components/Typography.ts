import styled from 'styled-components'
import * as colours from '../utilities/colours';

// basics
export const FONT_FAMILY = 'Gotham';
export const FONT_COLOUR = `${colours.neutrals.TEXT}`;

export const Header = styled.h4`
    font-family: ${FONT_FAMILY};
    color: ${FONT_COLOUR};
    font-size: 20px;
    line-height: 30px;
    font-weight: 700;
`;

export const Body = styled.p`
    font-family: ${FONT_FAMILY};
    color: ${FONT_COLOUR};
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
`;

export default {
    FONT_FAMILY,
    FONT_COLOUR,
    Header,
    Body
}