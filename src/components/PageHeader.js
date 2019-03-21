import React from 'react';
import { Container, Image, Responsive, Segment, Menu, Dropdown } from 'semantic-ui-react';

export default function PageHeader() {


    const trigger = (
        <span>
            <Image circular src="./avatar.png" avatar />{" "}Andrew
        </span>
    )


    const options = [
        { key: 'user', text: 'Account', icon: 'user' },
        { key: 'settings', text: 'Settings', icon: 'settings' },
        { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
    ]

    const DropdownImageTrigger = () => (
        <Dropdown trigger={trigger} options={options} pointing='top right' icon={null} />
    )

    return (
        <div className="header">
            <Responsive>
                <Menu
                    fixed={true}
                    size='large'
                >
                    <Container>
                        <Menu.Item onClick={() => console.log('hey')}>Home</Menu.Item>
                        <Menu.Item onClick={() => console.log('hey')}>LinkedIn</Menu.Item>
                        <Menu.Item onClick={() => console.log('hey')}>GitHub</Menu.Item>
                        <Menu.Item onClick={() => console.log('hey')}>Cryptocurrencies</Menu.Item>
                        <Menu.Item position='right'>{DropdownImageTrigger()}</Menu.Item>
                    </Container>
                </Menu>
            </Responsive>
        </div>
    );
}