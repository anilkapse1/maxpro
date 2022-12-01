import {createGlobalStyle} from 'styled-components';

export const GlobalStyle=createGlobalStyle`
*{
    margin:0px;
    padding:0px;
    text-decoration:none!important;
    text-transform:capitalize;
    transition: 0.2s linear;
    font-family: 'Poppins', sans-serif;
}
html {
    font-size: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scroll-padding-top: 8.5rem;
}
html::-webkit-scrollbar {
    width: .2rem;
}
html::-webkit-scrollbar-track {
    background-color: #fff;
}
html::-webkit-scrollbar-thumb {
    background: purple;
    border-radius: 5rem;
}
img {
  width: 100%;
  -o-object-fit: cover;
    object-fit: cover;
}

.mt-1{
    margin-top:10px;
}
.mt-2{
    margin-top:20px;
}
.mt-3{
    margin-top:30px;
}
.mt-4{
    margin-top:40px;
}
.mt-5{
    margin-top:50px;
}
.mt-6{
    margin-top:60px;
}

.pt-1{
    padding-top:10px;
}
.pt-2{
    padding-top:20px;
}
.pt-3{
    padding-top:30px;
}
.pt-4{
    padding-top:40px;
}
.pt-5{
    padding-top:50px;
}
.pt-6{
    padding-top:60px;
}

button.customButton{
    border:1px solid yellow!important;
    color:${({theme})=>theme.colors.white}!important;
    border-radius:10px!important;
    text-transform:capitalize!important;
    font-size:1.2rem!important;
    position:relative!important;
    text-transform: unset!important;
    &:hover{
        background-color:${({theme})=>theme.colors.text1}!important;
        border:1px solid ${({theme})=>theme.colors.text1}!important;        
    }
}

`;