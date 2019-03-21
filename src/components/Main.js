import React from 'react'
import { Container, Header, Responsive, Transition } from 'semantic-ui-react'

import Icons from './Icon'
import Footer from './Footer'

export default function Main(props){
    
    const mainContent = (
        <Container  text  textAlign='left'>
            <Responsive as={Container}>                
                <Header size="large">I'm <strong>Andrew Philippick</strong>, engineering student specialized in <strong>Data Analysis</strong>, and entrepreneur in the making.</Header>
                <p id="small-description">I'm currently living in Paris, and looking for an end-of-study internship.</p>
                <hr style={{marginRight:'1em', height:'1px', backgroundColor:"#FFF"}}/>
            </Responsive>
        </Container>
    )
    
    return (
        <div className="main-content">
            <Transition visible={props.visible} animation="fade up" duration={900}>
                <div className="animation">
                    {mainContent}
                    <Icons/>
                    <Footer/>
                </div>
            </Transition>
        </div>
    )
}