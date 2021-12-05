import React from 'react';
import 'antd/dist/antd.css';
import './ProductDetails.css';
import { Button, Image, Space, Row, Col } from 'antd';
import { post} from "../../api";
import { Link} from "react-router-dom";
import { getPriceImageUri, getProductImageUri } from "../utils";
import { products as productsConfig } from '../../product_config.json';

export class ProductDetails extends React.Component {
	checkout= () => {
		const { data, products, prices } = this.props;

		// calculate the diff
		for(let i = 0; i < 3; i++) {
			// sanitize the product cards
			let product_cards = data['product_cards_' + products[i] + '_' + prices[i]];
			console.log(`${'product_cards_' + products[i] + '_' + prices[i]} length=${product_cards.length}`)
			let product_cards_diff = [];
			for(let j = 1; j < product_cards.length - 1; j += 2) {
				let diff = (product_cards[j] - product_cards[j-1]);
				product_cards_diff.push(diff/1000);
			}
			data['product_cards_' + products[i] + '_' + prices[i]] = product_cards_diff;
		}

		// save to api
		console.log(`Submitting the data: ${JSON.stringify(data, null, 2)}`);
		post(data).then(res => {}).catch(err => {
			console.log('failed to save the data')
		});
	}



	render() {
		const { data, index, products, prices } = this.props;
		const productImageUri = getProductImageUri(products[index]);
		const priceImageUri = getPriceImageUri(prices[index]);

		return (
			<Row gutter={[16, 16]}>
				<Col span={8}>
					<Image src={productImageUri}/>
				</Col>
				<Col span={16}>
					<h1 style={{
						fontSize: '40px',
						fontWeight: 'bold'
					}}>
						{productsConfig[index].name}
					</h1>
					<p style={{
						fontSize: '20px',
					}}>{productsConfig[index].description}</p>
					<div>
						<img
							style={{
								height: '150px',
								width: '400px'
							}}
							src={priceImageUri}/>
					</div>
					<Space>
						<Link to="/">
							<Button size="large" type="default" onClick={this.props.showProductCards.bind(this)}>Back</Button>
						</Link>
						<Button size="large" type="primary" onClick={this.checkout}>Checkout</Button>
					</Space>
				</Col>
			</Row>
		)
	}
}