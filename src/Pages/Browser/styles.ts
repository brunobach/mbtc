import Styled from 'styled-components'

export const Container = Styled.div`
flex:1;
margin-top: 20px;
display: flex;
flex-direction: column;

    > pre {
        border-radius: 7px;
        background-color: #282A36;
        padding: 10px;
        border: 2px solid #282828;
        font-size: 1.0rem;
    }

`

export const Inputs = Styled.div`
.copied {
    background: #2ea44f;
    color: #fff;
    :hover {
        background: #2ea44f;
    }
}
display: flex;
justify-content: center;
align-self: center;
`

export const Button = Styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 300px;
height: 50px;
margin: 20px;
color: gray;
margin-top: 30px;
border-radius: 10px;
background: linear-gradient(145deg, #161616, #1a1a1a);
box-shadow:  34px 34px 37px #151515, 
             -34px -34px 37px #1b1b1b;


:hover {
cursor: pointer;
background: linear-gradient(145deg, #181818, #1a1a1a);
left: 1.6rem;
right: 1.6rem;
bottom: 0;
}


`