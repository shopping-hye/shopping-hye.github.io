import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import { ProductDetails } from './components/ProductDetails/ProductDetails'
import { ProductCard } from './components/ProductCard/ProductCard'
import { Col, Row } from 'antd';
const { Header, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProductCards: true,
      showProductDetails0: false,
      showProductDetails1: false,
      showProductDetails2: false
    };
  }

  backToMainPage = () => {
    this.setState({
      showProductCards: true,
      showProductDetails0: false,
      showProductDetails1: false,
      showProductDetails2: false
    })
  }


  render() {
    const data = this.props.data;
    let path;
    if (this.state.showProductCards) {
      path  = '';
    } else if (this.state.showProductDetails0) {
      path = 'product_0';
    } else if (this.state.showProductDetails1) {
      path = 'product_1';
    } else {
      path = 'product_2';
    }
    const products = this.props.products;
    const prices = this.props.prices;
    const ProductCards = () => (
      <Row gutter={24}>
        <Col span={8} onClick={() => {
          this.setState({
            showProductCards: false,
            showProductDetails0: true,
            showProductDetails1: false,
            showProductDetails2: false
          })
        }}>
          <a>
            <ProductCard
              data={data}
              index={0}
              products={products}
              prices={prices}/>
          </a>
        </Col>
        <Col span={8} onClick={() => {
          this.setState({
            showProductCards: false,
            showProductDetails0: false,
            showProductDetails1: true,
            showProductDetails2: false
          })
        }}>
          <a>
            <ProductCard
              data={data}
              index={1}
              products={products}
              prices={prices}/>
          </a>
        </Col>
        <Col span={8} onClick={() => {
          this.setState({
            showProductCards: false,
            showProductDetails0: false,
            showProductDetails1: false,
            showProductDetails2: true
          })
        }}>
          <a>
            <ProductCard
              data={data}
              index={2}
              products={products}
              prices={prices}/>
          </a>
        </Col>
      </Row>
    )
    return (
      <Layout>
        <Header className='shopping-header'>
          <a to="/" onClick={this.backToMainPage}>
            <h1 style={{
              color: "#fadb14"
            }}>Shopping</h1>
          </a>
        </Header>
        <Layout>
          <Layout>
            <Breadcrumb style={{ margin: '16px 0', padding: '0 24px 0 24px' }}>
              <Breadcrumb.Item onClick={this.backToMainPage}>
                <a to="/" >Home</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{path}</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                backgroundColor: '#ffffff'
              }}
            >
              { this.state.showProductCards ? <ProductCards /> : null }
              { this.state.showProductDetails0 ? <ProductDetails data={data} index={0} products={products} prices={prices} backToMainPage={this.backToMainPage} /> : null }
              { this.state.showProductDetails1 ? <ProductDetails data={data} index={1} products={products} prices={prices} backToMainPage={this.backToMainPage} /> : null }
              { this.state.showProductDetails2 ? <ProductDetails data={data} index={2} products={products} prices={prices} backToMainPage={this.backToMainPage} /> : null }
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;