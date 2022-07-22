import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background-color: #F0F2F5;

        --blue-color: #5429CC;
        --blue-light-color: #6933FF;

        --green-color: #33CC95;
        --red-color: #E62E4D;
        --text-title-color: #363F5F;
        --text-body-color: #969CB3;
        --shape-color: #FFFFFF;

    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body, input, button, text-area{
        font-family: 'Poppins', Arial, Helvetica, sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }
    body{
        background-color: var(--background-color);
        -webkit-font-smoothing: antialiased;
    }
    button{
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
    .react-modal-overlay{
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background-color: var(--background-color);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }
    .react-modal-close {
        position: absolute;
        border: 0;
        background-color: transparent;
        top: 1.5rem;
        right: 1.5rem;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.7);
        }
    }
`;
