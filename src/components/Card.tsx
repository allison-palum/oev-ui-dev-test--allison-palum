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
    <Styled.Container className={`card${isSelected ? ` card--selected` : ''}`}>
        <div className='card__image-container'>
            <img className='card__image-container__image' src={image} />
        </div>

        <div className='card__details'>
            <h4 className='card__details__header'>
                {heading}
            </h4>

            <p className='card__details__description'>
                {description}
            </p>

            {button ? 
                <Styled.Button className='card__details__button'>
                    {button.label}
                </Styled.Button>
                : <></>
            }
        </div>
    </Styled.Container>
);
