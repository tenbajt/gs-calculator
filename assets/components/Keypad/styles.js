import styled from "styled-components";

export const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.125rem;
`;

export const Button = styled.button`
    aspect-ratio: 16/9;
    margin: 0;
    padding: 0.5rem;
    appearance: none;
    font-size: 0.875rem;
    color: white;
    border: none;
    border-radius: 0.25rem;
    background-color: #4F4F4F;
`;