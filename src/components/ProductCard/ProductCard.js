import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col} from 'antd';
import './ProductCard.css';
import { getProductImageUri, getPriceImageUri } from '../utils'
import { products as productsConfig } from '../../product_config.json';

const { Meta } = Card;

export class ProductCard extends React.Component {
	handleMouseMove = (event) => {
		if (event.type === 'mouseenter') {
			console.log(`you moved in ${this.props.name} at: ${new Date().toLocaleTimeString()}`)
		}
		if (event.type === 'mouseleave') {
			console.log(`you moved out ${this.props.name} at: ${new Date().toLocaleTimeString()}`)
		}
	}

	render() {
		const { index, products, prices } = this.props;
		const productImageUri = getProductImageUri(products[index]);
		const priceImageUri = getPriceImageUri(prices[index]);

		return (
			<div
				className="product-card"
				onMouseEnter={this.handleMouseMove}
				onMouseLeave={this.handleMouseMove}>
				<Card
					hoverable
					cover={<img src={productImageUri} />}
				>
					<Row gutter={20}>
						<Col span={14}>
							<Meta
								title={name} description={productsConfig[index].name} />
						</Col>
						<Col span={6}>
							<img style={{
								position: "absolute",
								width: 140,
								height: 60,
								top: 0,
								right: 0,
								bottom: 0,
								left: 0,
							}} src={priceImageUri} />
						</Col>
					</Row>
				</Card>
			</div>
		)
	}
}