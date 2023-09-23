
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

function HeaderLink({page}){

    function formatLink(text){
        // Replace underscores with spaces
        text = text.replace(/-/g, ' ');

        // Capitalize the first letter of each word
        return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    return(
        <RouterLink to={`/${page}`} style={{ textDecoration: 'none', color: '#9d9d9d' }}>
            <LinkContainer>
                    <Link>{formatLink(page)}</Link>
            </LinkContainer>
        </RouterLink>
    )
}

const LinkContainer = styled.div`
    background-color: #252525;
    border-radius: 40px;
    padding: 1rem;
    margin-top: 1.6vw;

    height: .7rem;
    display: flex;
    width: 10vw;
    justify-content: center;
    align-items: center;

    &:hover{
        cursor: pointer;
    }
`;

const Link = styled.div`
    font-weight: 600;
`;

HeaderLink.propTypes = {
    page: PropTypes.string.isRequired,
};

export default HeaderLink;
