import React from 'react'
import {Grid, Form, Header, Icon, Segment, Button, Message} from 'semantic-ui-react'

export default function Login(){

    return(
        <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}
        </style>
        <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' textAlign='center'>Log-in to your account</Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='love@you.com' />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />
                <Button style={{backgroundColor: '#6FE3E3', color:'#FFF'}} fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New here ? <a href='#' style={{textDecoration:'underline'}}><strong> Join me !<Icon style={{marginLeft:'0.2em'}}name='heart'/></strong></a>
            </Message>
          </Grid.Column>
        </Grid>
        </div>
    )
}