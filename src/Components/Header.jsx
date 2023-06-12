import React, { useState } from 'react'
import styled from 'styled-components'
import { selectCars } from '../features/car/carSlice'
import { useSelector
 } from 'react-redux'

function Header() {
const [burgerStatus, setBurgerStatus] = useState(true)
const cars = useSelector(selectCars)
console.log(cars)
  return (
    <Container>
 <a href='/'>
  <img src="/images/logo.svg" alt="" />
 </a>
<Menu>
  {cars && cars.map((car,index) =>
<a key={index} href="#">{car}</a>
  
  )}


</Menu>

<RightMenu>

  <a href="#">Shop</a>
  <a href="#"> Account</a>
<MenuButton onClick={() => setBurgerStatus(false)}>Menu</MenuButton>

</RightMenu>
<BurgerNav show={burgerStatus}>
  <CloseWrapper>

  <CloseButton onClick={() => setBurgerStatus(true)}>close</CloseButton>
  </CloseWrapper>
  {cars && cars.map((car,index) =>
<li><a key={index} href="#">{car}</a></li>

  
  )}
  
</BurgerNav>
    </Container>
  )

}
export default Header

const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
padding:0 20px ;
top:0;
left:0;
right:0;
z-index:1;
justify-content:space-between;

img {
  cursor:pointer;
}

`

const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a {
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;
  flex-wrap:nowrap;
}

@media(max-width:768px) {
  display:none;
}
`
const RightMenu = styled.div`
display:flex;
align-items:center;
a {
  font-weight:600;
  text-transform:uppercase;
margin-right:10px;

}

`
const MenuButton = styled.div`

background-color:#e2e3e3;
height:20px;
width:60px;
color:#393c41;
text-align:center;
border-radius:4px;
align-items:center;
cursor:pointer;
margin-left:10px;
`

const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
tex-align:start;
transform:${props => props.show ? 'translateX(100%)' : 'translateX(0)' };
transition: transform 0.3s; 
li {
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,0.2);

  a{
    font-weight:600;

  }
}
`

const CloseButton = styled.div`
background-color:rgba(0,0,0,0.2);
height:20px;
width:50px;
text-align:center;
color:white;
border-radius:5px;
right:0;
cursor:pointer;

`
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`