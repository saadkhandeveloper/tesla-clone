import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container className='home'>
   
      <Section
      title="Model S"
      description="order Online for Touchless Delivery"
      backgroundImg="model-s.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = "Existing inventory"
      />


      <Section
      title="Model Y"
      description="order Online for Touchless Delivery"
      backgroundImg="model-y.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = "Existing inventory"
      />


      <Section
      title="Model 3"
      description="order Online for Touchless Delivery"
      backgroundImg="model-3.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = "Existing inventory"
      />

      <Section
      title="Model X"
      description="order Online for Touchless Delivery"
      backgroundImg="model-x.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = "Existing inventory"
      />


      <Section
      title="Lowest Cost Solar Panels in America"
      description="Money Back guaantee"
      backgroundImg="solar-panel.jpg"
      leftBtnText = " Order Now"
      rightBtnText = "Learn more"
      />


      <Section
      title="Solar for New Roofs"
      description="Solar Roof Costs Less Than a New Roof"
      backgroundImg="solar-roof.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = "Existing inventory"
      />

      <Section
      title="Accessories"
      description="Solar Roof Costs Less Than a New Roof"
      backgroundImg="accessories.jpg"
      leftBtnText = "SHOP NOW"
      
      />

     
    </Container>
  )
}

export default Home

const Container = styled.div`
height:100vh;


`
