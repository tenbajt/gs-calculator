import styled from "styled-components"

export const Container = styled.div`
    width: 17rem;
    max-width: 100%;
    margin: 2rem auto;
    padding: 0.25rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border-radius: 0.375rem;
    background-color: #1F1F1F;
`;

export const Expression = styled.div`
    height: 17px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.875rem;
    text-align: right;
`;

export const Input = styled.input`
    width: 100%;
    display: block;
    appearance: none;
    color: white;
    font-size: 1.75rem;
    text-align: right;
    border: none;
    background-color: transparent;
    &:focus {
        border: none;
        outline: none;
    }
`;

export const Error = styled.div`
    color: red;
    text-align: right;
`;