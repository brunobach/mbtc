import styled from 'styled-components'

export const Container = styled.aside`
    height: 100%;
    background: #121212;
    color: #b3b3b3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 1px 3px 21px -6px rgba(0,0,0,0.75);
 > div {

    width: 25vw;
     padding: 20px 0px 20px 20px;
    
 }
 

`
export const Nav = styled.ul`
list-style: none;
margin-top: 25px;
&:first-child{
    margin: 0px;
}
> svg { 
    margin-left: 30%;
}
li{ 
    cursor: pointer;
    display: flex;
    align-items: center;
    span{
        font-size: 11px;
        text-transform: uppercase;
        line-height:22px;
        letter-spacing: 1.11px;
    }
    
}
li:hover {
    background-color: #fff1
}
    img {
        margin: 10px 10px 10px 10px;
    }
`

export const NewPlaylist = styled.button`
    background: transparent;
    border: 0;
    border-top: 1px solid #282828;
    font-size: 13px;
    color: #b3b3b3;
    display: flex;
    align-items: center;
    padding: 15px 25px;
    &:hover{
        color: #ffff;
    }
    
`