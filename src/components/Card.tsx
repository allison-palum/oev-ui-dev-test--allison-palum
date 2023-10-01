import * as StyledButton from '../styles/components/Button';
import * as StyledCard from '../styles/components/Card';
import * as StyledTypgraphy from '../styles/components/Typography';

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
    <StyledCard.Container className={`card${isSelected ? ` card--selected` : ''}${button ? ` card--has-button` : ''}`}>
        <div className='card__image-container'>
            <img className='card__image-container__image' src={image} />
        </div>

        <div className='card__details'>
            <StyledTypgraphy.Header className='card__details__header'>
                {heading}
            </StyledTypgraphy.Header>

            <StyledTypgraphy.Body className='card__details__description'>
                {description}
            </StyledTypgraphy.Body>

            {button ? 
                <StyledButton.Container className='card__details__button'>
                    {button.label}
                </StyledButton.Container>
                : <></>
            }
        </div>
    </StyledCard.Container>
);
