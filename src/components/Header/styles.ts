import Styled from 'styled-components'

export const Container = Styled.header`
display: flex;
align-items: center;
margin: 10px 0px 0;
.User-link {
    margin-left: 35%;
    margin-right: 30%;
}
img {
    

    :hover {
        cursor: pointer;
        border-radius: 4px;
        animation:shadow-drop-2-center .4s cubic-bezier(.25,.46,.45,.94) both;
        @keyframes shadow-drop-2-center{0%{transform:translateZ(0);box-shadow:0 0 0 0 transparent}100%{transform:translateZ(50px);box-shadow:0 0 20px 0 rgba(0,0,0,.35)}}
    }
}

`

export const User = Styled.div`


> a {
    text-decoration:none; 
    font-size: 13px;
    color: #fff;
    display: flex;
    align-items: center;

    :hover {
        height: 50px;
        width: 120px;
        border-radius: 5px;
        animation:shadow-drop-2-center .4s cubic-bezier(.25,.46,.45,.94) both;
        @keyframes shadow-drop-2-center{0%{transform:translateZ(0);box-shadow:0 0 0 0 transparent}100%{transform:translateZ(50px);box-shadow:0 0 20px 0 rgba(0,0,0,.35)}}
    }
}
img{
    width:32px;
    height:32px;
    border-radius:50%;
    margin-right: 5px;
}`
