import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div `
    margin: 40px
`;

export const StyledButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 2rem;
    top: 2rem;
    padding: 1rem;
    background: #fff;
    box-shadow: 2px 3px 10px rgba(0,0,0,0.15);
`;

export const StyledHeading = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 2rem;
`;