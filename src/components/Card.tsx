import * as Styled from "../styles/components/Card";

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
    <Styled.Container className={`card${isSelected ? `--selected` : ''}`}>
        <div className={`card__image-container${isSelected ? `--selected` : ''}`}>
            <img className={`card__image-container__image${isSelected ? `--selected` : ''}`} src={image} />
        </div>

        <h4 className={`card__heading${isSelected ? `--selected` : ''}`}>
            {heading}
        </h4>

        <p className={`card__description${isSelected ? `--selected` : ''}`}>
            {description}
        </p>

        <Styled.Button className={`card__button${isSelected ? `--selected` : ''}`}>
            {button.label}
        </Styled.Button>
    </Styled.Container>
);
