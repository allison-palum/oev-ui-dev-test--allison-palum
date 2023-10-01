import * as Styled from "../styles/components";

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

console.log(Styled.Typography.Container)

export const Card: React.FunctionComponent<CardProps> = ({
    image,
    heading,
    description,
    button,
    isSelected,
}) => (
    <Styled.Card.Container className={`card${isSelected ? ` card--selected` : ''}`}>
        <div className='card__image-container'>
            <img className='card__image-container__image' src={image} />
        </div>

        <div className='card__details'>
            <Styled.Typography.Header className='card__details__header'>
                {heading}
            </Styled.Typography.Header>

            <Styled.Typography.Body className='card__details__description'>
                {description}
            </Styled.Typography.Body>

            {button ? 
                <Styled.Button.Container className='card__details__button'>
                    {button.label}
                </Styled.Button.Container>
                : <></>
            }
        </div>
    </Styled.Card.Container>
);
