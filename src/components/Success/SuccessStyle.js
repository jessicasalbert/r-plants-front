import styled from 'styled-components'

// export const Background = styled.section`
//     position: relative;
//     top: 0;
//     bottom: 0;
//     height: 100vh;
//     width: 100vw;
//     z-index: 0;
//     background-image: url("https://i.ibb.co/hCkRkjk/Card-40.png");
//     background-attachment: fixed;
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: 100vw;
//     @media screen and (max-width: 926px) {
//         background-size: 150vh;
//         }
//     }
// `

export const Background = styled.div`
    height: 100vh;
    min-height: 500px;
    background-image: url("https://i.ibb.co/hCkRkjk/Card-40.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #1d3557;
`

export const Card = styled.div`
    h2 {
        font-size: 3rem;
        font-weight: normal;
        padding-bottom: 20px;
    }
    box-shadow: 8px 8px 8px -6px rgba(0,0,0,.5);
    display: flex;
    position: absolute;
    top: 37%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 25rem;
    width: 25rem;
    border-radius: 25px;
    background-color: rgba(255,255,255,0.5);
    @media screen and (max-width: 768px) {
        height: 20rem;
        width: 20rem;
        h2 {
        font-size: 2rem;
        font-weight: normal;
        padding-bottom: 15px;
        }
    }
`