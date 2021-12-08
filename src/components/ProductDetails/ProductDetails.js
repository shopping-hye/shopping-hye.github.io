import React from 'react';
import 'antd/dist/antd.css';
import './ProductDetails.css';
import { Button, Image, Space, Row, Col, Modal } from 'antd';
import { post } from '../../api/api';
import { getPriceImageUri, getProductImageUri } from "../utils";
import { products as productsConfig } from '../../product_config.json';

export class ProductDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			okText: 'Copy Testing ID'
		}
	}

	checkout= () => {
		this.setState({
			modalVisible: true
		});

		const { data, index, products, prices } = this.props;
		data.checkout_item = products[index] + '' + prices[index];
		// save to api
		console.log(`Submitting the data: ${JSON.stringify(data, null, 2)}`);
		post(data, true).then(res => {}).catch(err => {
			console.log('failed to save the data', err)
		});
	}

	copyTestingId() {
		navigator.clipboard.writeText(this.props.data.version + this.props.data.session_id)
			.then(res => console.log(`${this.props.data.version + this.props.data.session_id} copied`))
			.catch(err => console.log(err))

		this.setState({
			okText: 'Copied!'
		})
	}

	handleMouseMoveDetailsImage = (event) => {
		const { data, index, products, prices } = this.props;
		const imageKey = 'product_details_image_' + products[index] + '_' + prices[index];
		const now = Date.now();
		if (event.type === 'mouseenter') {
			data[imageKey].push(now + '-in');
			console.log(`Moved in ${imageKey} at: ${new Date(now).toLocaleString()}`)
		}
		if (event.type === 'mouseleave') {
			data[imageKey].push(now + '-out');
			console.log(`Moved out ${imageKey} at: ${new Date(now).toLocaleString()}`)
		}
	}

	handleMouseMoveDetailsTitleDescription = (event) => {
		const { data, index, products, prices } = this.props;
		const tdKey = 'product_details_tile_description_' + products[index] + '_' + prices[index];
		const now = Date.now();
		if (event.type === 'mouseenter') {
			data[tdKey].push(now + '-in');
			console.log(`Moved in ${tdKey} at: ${new Date(now).toLocaleString()}`)
		}
		if (event.type === 'mouseleave') {
			data[tdKey].push(now + '-out');
			console.log(`Moved out ${tdKey} at: ${new Date(now).toLocaleString()}`)
		}
	}

	handleMouseMoveDetailsPrice = (event) => {
		const { data, index, products, prices } = this.props;
		const priceKey = 'product_details_price_' + products[index] + '_' + prices[index];
		const now = Date.now();
		if (event.type === 'mouseenter') {
			data[priceKey].push(now + '-in');
			console.log(`Moved in ${priceKey} at: ${new Date(now).toLocaleString()}`)
		}
		if (event.type === 'mouseleave') {
			data[priceKey].push(now + '-out');
			console.log(`Moved out ${priceKey} at: ${new Date(now).toLocaleString()}`)
		}
	}

	render() {
		const { data, index, products, prices } = this.props;
		const productImageUri = getProductImageUri(products[index]);
		const priceImageUri = getPriceImageUri(prices[index]);

		return (
			<Row gutter={[16, 16]}>
				<Col span={8}>
					<Image onMouseEnter={this.handleMouseMoveDetailsImage}
								 onMouseLeave={this.handleMouseMoveDetailsImage}
								 src={productImageUri}
								 preview={false}/>
				</Col>
				<Col span={16}>
					<div onMouseEnter={this.handleMouseMoveDetailsTitleDescription}
							 onMouseLeave={this.handleMouseMoveDetailsTitleDescription}>
						<h1 style={{
							fontSize: '40px',
							fontWeight: 'bold'
						}}>
							{productsConfig[index].name}
						</h1>
						<p style={{
							fontSize: '20px',
						}}>{productsConfig[index].description}</p>
					</div>
					<div>
						<img
							onMouseEnter={this.handleMouseMoveDetailsPrice}
							onMouseLeave={this.handleMouseMoveDetailsPrice}
							style={{
								height: '150px',
								width: '400px'
							}}
							src={priceImageUri}/>
					</div>
					<Space>
						<a>
							<Button size="large" type="default" onClick={this.props.backToMainPage.bind(this)}>Back</Button>
						</a>
						<Button size="large" type="primary" onClick={this.checkout}>Checkout</Button>
						<Modal
							title="Your response have been saved!"
							centered
							visible={this.state.modalVisible}
							onOk={() => this.copyTestingId()}
							closable={false}
							cancelButtonProps={{disabled: true}}
							okText={this.state.okText}
						>
							<p>
								Click the button to copy your testing ID and enter it back in the Qualtrics. Your testing ID is: <strong>{data.version + data.session_id}</strong>
								<br />Then you can close this window.
							</p>
						</Modal>
					</Space>
				</Col>
			</Row>
		)
	}
}