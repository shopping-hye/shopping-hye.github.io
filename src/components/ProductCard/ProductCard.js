import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col} from 'antd';
import './ProductCard.css';
import { getProductImageUri, getPriceImageUri } from '../utils'
import { products as productsConfig } from '../../product_config.json';

const { Meta } = Card;

export class ProductCard extends React.Component {
	handleMouseMoveCardWhole = (event) => {
		const { data, index, products, prices } = this.props;
		const wholeKey = 'product_cards_whole_' + products[index] + '_' + prices[index];
		const now = Date.now();
		if (event.type === 'mouseenter') {
			data[wholeKey].push(now + '-in');
			console.log(`Moved in ${wholeKey} at: ${new Date(now).toLocaleString()}`)
		}
		if (event.type === 'mouseleave') {
			data[wholeKey].push(now + '-out');
			console.log(`Moved out ${wholeKey} at: ${new Date(now).toLocaleString()}`)
		}
	}

	handleMouseMoveCardImage = (event) => {
		const { data, index, products, prices } = this.props;
		const cardKey = 'product_cards_price_' + products[index] + '_' + prices[index];
		const now = Date.now();
		if (event.type === 'mouseenter') {
			data[cardKey].push(now + '-in');
			console.log(`Moved in ${cardKey} at: ${new Date(now).toLocaleString()}`)
		}
		if (event.type === 'mouseleave') {
			data[cardKey].push(now + '-out');
			console.log(`Moved out ${cardKey} at: ${new Date(now).toLocaleString()}`)
		}
	}


	render() {
		const { index, products, prices } = this.props;
		const productImageUri = getProductImageUri(products[index]);
		const priceImageUri = getPriceImageUri(prices[index]);

		return (
			<div
				className="product-card"
				onMouseEnter={this.handleMouseMoveCardWhole}
				onMouseLeave={this.handleMouseMoveCardWhole}>
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
							<img
								onMouseEnter={this.handleMouseMoveCardImage}
								onMouseLeave={this.handleMouseMoveCardImage}
								style={{
								width: '210px',
								height: '70px'
							}} src={priceImageUri} />
						</Col>
					</Row>
				</Card>
			</div>
		)
	}
}