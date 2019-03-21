import React from 'react'
import {Container, Responsive} from 'semantic-ui-react'

export default function Footer(){

    return(
        <div className="copyright">
            <br/>
            <Container text>
                <Responsive as={Container}>
                    <p className ="text-copyright"></p>
                </Responsive>
            </Container>
        </div>

    )

}