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
    <Styled.Container className="card">
        <div className="card__image">
            <img src={image} />
        </div>

        <div className="card__heading">{heading}</div>

        <div className="card__description">{description}</div>

        <Styled.Button className="card__button">{button.label}</Styled.Button>
    </Styled.Container>
);
