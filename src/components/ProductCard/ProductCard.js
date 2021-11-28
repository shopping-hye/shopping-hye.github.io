import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';

const { Meta } = Card;

export class ProductCard extends React.Component {
	constructor(props) {
		super(props);
	}

	handleMouseMove = (event) => {
		if (event.type === 'mouseenter') {
			console.log(`you moved in ${this.props.name} at: ${new Date().toLocaleTimeString()}`)
		}
		if (event.type === 'mouseleave') {
			console.log(`you moved out ${this.props.name} at: ${new Date().toLocaleTimeString()}`)
		}
	}

	render() {
		const { name, imageUri, description } = this.props;
		return (
			<div onMouseEnter={this.handleMouseMove}
					 onMouseLeave={this.handleMouseMove}>
				<Card
					hoverable
					cover={<img alt="example" src={imageUri} />}
				>
					<Meta title={name} description={description} />
				</Card>
			</div>
		)
	}
}