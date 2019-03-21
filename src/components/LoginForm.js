import React from 'react'

import Amplify from 'aws-amplify';
import awsmobile from '../aws-exports';

import { Grid, Form, Header, Icon, Segment, Button, Message, Dimmer, Loader} from 'semantic-ui-react';

Amplify.configure(awsmobile);

export default function LoginForm (props){
    
    const loginForm = (
        <div className="login-form">
            <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" textAlign="center">
                        Log-in to your account
                    </Header>
                    <Form size="large" onSubmit={props.handleSubmit}>
                        <Segment stacked>
                            <Form.Input
                                fluid
                                icon="user"
                                iconPosition="left"
                                placeholder="username"
                                name="username"
                                onChange={props.handleChange}
                                value={props.username}
                            />
                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                                name="password"
                                onChange={props.handleChange}
                                value={props.password}
                            />
                            <Button style={{ backgroundColor: '#6FE3E3', color: '#FFF' }} fluid size="large">
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New here ?{' '}
                        <a href="#" style={{ textDecoration: 'underline' }}>
                            <strong>
                                Join me !<Icon style={{ marginLeft: '0.2em' }} name="heart" />
                            </strong>
                        </a>
                        <Message hidden={!props.errMess} negative>
                            <p>Wrong username or password. Try again <Icon name="thumbs up"/></p>
                        </Message>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    );

    return (
        <div className="login">
            {loginForm}
        </div>
    )
}