import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Dimmer, Loader } from "semantic-ui-react";
import Amplify, { Auth } from "aws-amplify";
import aws_exports from "../aws-exports";
import LoginForm from "./LoginForm";
import PageHeader from "./PageHeader";

Amplify.configure(aws_exports);

class Login extends Component {
	constructor() {
		super();

		this.state = {
			username: "",
			password: "",
			signedIn: false,
			errMess: false,
			isLoading: false
		};

		this.signIn = this.signIn.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleLoading = this.handleLoading.bind(this);
	}

	handleLoading() {
		setTimeout(() => {
			this.setState({
				isLoading: false
			});
		}, 1000);
	}

	signIn() {
		const { username, password } = this.state;

		Auth.signIn({
			username: username,
			password: password
		})
			.then(() =>
				this.setState({
					isLoading: true,
					signedIn: true
				})
			)
			.catch(() => {
				this.setState({
					isLoading: true,
					errMess: true
				});
			});
	}

	handleSubmit(event) {
		event.preventDefault();

		this.handleLoading();
		this.signIn();
		this.setState({
			username: "",
			password: "",
			isLoading: false
		});

		event.target.reset();
	}

	handleChange(event) {
		if (event.target.name === "username") {
			this.setState({
				username: event.target.value
			});
		} else if (event.target.name === "password") {
			this.setState({
				password: event.target.value
			});
		}
	}

	render() {
		const myLoader = (
			<Dimmer active style={{ background: "rgb(79, 79, 79", color: "#6FE3E3" }}>
				<Loader size="large" content="loading..." />
			</Dimmer>
		);

		if (this.state.signedIn === false) {
			return (
				<div className="login">
					{this.state.isLoading ? (
						myLoader
					) : (
							<LoginForm
								handleChange={this.handleChange}
								handleSubmit={this.handleSubmit}
								username={this.state.username}
								password={this.state.password}
								errMess={this.state.errMess}
							/>
						)}
				</div>
			);
		} else {
			return (
				<div className="dahsboard">
					{this.state.isLoading ? myLoader : <PageHeader />}
				</div>
			);
		}
	}
}

export default Login;
