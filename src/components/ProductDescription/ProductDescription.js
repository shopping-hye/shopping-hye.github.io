import React from 'react';
import 'antd/dist/antd.css';
import './ProductDescription.css';
import { Image, Rate } from 'antd';

export class ProductDescription extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name, description, imageUri } = this.props;
		return (
			<div>
				<Image
					width={200}
					src={imageUri}
				/>
				<p>{name}</p>
				<Rate disabled value={4}/>
			</div>
		)
	}
}