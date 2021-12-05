import React from 'react';
import 'antd/dist/antd.css';
import './ProductDetails.css';
import { Button, Image, Space, Row, Col } from 'antd';
import { checkout} from "../../api";
import { Link} from "react-router-dom";
import { getPriceImageUri, getProductImageUri } from "../utils";
import { products as productsConfig } from '../../product_config.json';

export class ProductDetails extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		const path = Number(window.location.pathname.substr(1));
		const { products, prices } = this.props;
		const productImageUri = getProductImageUri(products[path]);
		const priceImageUri = getPriceImageUri(prices[path]);

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
						{productsConfig[path].name}
					</h1>
					<div>
						<img style={{
							height: '150px',
							width: '400px'
						}}
							src={priceImageUri}/>
					</div>
					<p style={{
						fontSize: '20px',
					}}>{productsConfig[path].description}</p>
					<Space>
						<Link to="/">
							<Button size="large" type="default" onClick={this.props.showProductCards.bind(this)}>Back</Button>
						</Link>
						<Button size="large" type="primary" onClick={checkout}>Checkout</Button>
					</Space>
				</Col>
			</Row>
		)
	}
}