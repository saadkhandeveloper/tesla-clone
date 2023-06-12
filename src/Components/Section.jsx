import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({title, description, backgroundImg,leftBtnText,rightBtnText}) {
  return (
    <Wrap bgImage={backgroundImg}>
         <Fade bottom>

     <ItemText>
<h1>{title}</h1>
<p>{description}</p>
     </ItemText>
         </Fade>
     <Buttons>
     <Fade bottom>

     <ButtonGroup>
<LeftButton>
{leftBtnText}
</LeftButton>
{ rightBtnText && 
  <RightButton>
{rightBtnText}
</RightButton>
}


     </ButtonGroup>
    </Fade>
<DownArrow src="/images/down-arrow.svg">

</DownArrow>
     </Buttons>

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
z-index:-1;
  width: 100vw;
  height: 100vh;
//   background-image: url('/images/model-y.jpg');
background-image: ${props => `url("images/${props.bgImage}")`};
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
align-items:center;

`;


const ItemText = styled.div`
z-index:10;
 padding-top:15vh;
 text-align:center;
`;


const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
cursor:pointer;
@media (max-width:768px) {
    flex-direction:column;
}
`;
const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
margin:8px;
&:hover {
  opacity:1;
}

`;
const RightButton = styled(LeftButton)`
background-color:white;
color:black;
opacity:0.65;
`;


const DownArrow = styled.img`
margin-top:20px;
height:40px;
overflow-x:hidden;
animation:animateDown infinite 1.5s;
`;

const Buttons = styled.div`
display:flex;
flex-direction:column;
cursor:pointer;

`;