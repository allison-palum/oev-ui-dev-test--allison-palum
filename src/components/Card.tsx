import * as Styled from "../styles/Card";

export interface CardProps {
    image: string;
    heading: string;
    description?: React.ReactNode;
    button: {
        href: string;
        label: string;
    };
    isSelected: boolean;
}

export const Card: React.FunctionComponent<CardProps> = ({
    image,
    heading,
    description,
    button,
    isSelected,
}) => (
    <Styled.Container className={isSelected ? `card card--selected` :  `card`}>
        <div className={isSelected ? `card__image card__image--selected` :  `card__image`}>
            <img src={image} />
        </div>

        <div className={isSelected ? `card__heading card__heading--selected` :  `card__heading`}>
            {heading}
        </div>

        <div className={isSelected ? `card__description card__description--selected` :  `card__description`}>
            {description}
        </div>

        <Styled.Button className={isSelected ? `card__button card__button--selected` :  `card__description`}>
            {button.label}
        </Styled.Button>
    </Styled.Container>
);
