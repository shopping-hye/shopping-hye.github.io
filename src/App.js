import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import { ProductDetails } from './components/ProductDetails/ProductDetails'
import { ProductCard } from './components/ProductCard/ProductCard'
import { Col, Row } from 'antd';
const { Header, Content, Sider } = Layout;
import { Route, Link } from "react-router-dom";
import logo from '../public/logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showProductCards: true};
  }

  handleMouseMove = event => {
    if (event.type === 'mouseover') {
      console.log(`you moved in ${name} at: ${new Date()}`)
    }
    if (event.type === 'mouseout') {
      console.log(`you moved out ${name} at: ${new Date()}`)
    }
  }

  hideProductCards = () => {
    this.setState({
      showProductCards: false
    })
  }

  showProductCards = () => {
    this.setState({
      showProductCards: true
    })
  }


  render() {
    // const data = this.props.data;
    const products = this.props.products;
    const prices = this.props.prices;
    const ProductCards = () => (
      <Row gutter={24}>
        <Col span={6} onClick={this.hideProductCards}>
          <Link to="/0" >
            <ProductCard
              productId={products[0]}
              priceId={prices[0]}/>
          </Link>
        </Col>
        <Col span={6} onClick={this.hideProductCards}>
          <Link to="/1">
            <ProductCard
              productId={products[1]}
              priceId={prices[1]}/>
          </Link>
        </Col>
        <Col span={6} onClick={this.hideProductCards}>
          <Link to="/2">
            <ProductCard
              productId={products[2]}
              priceId={prices[2]}/>
          </Link>
        </Col>
      </Row>
    )
    return (
      <Layout>
        <Header className='shopping-header'>
          <Link to="/" onClick={this.showProductCards}>
            <img alt="logo" className="logo" src={logo} />
          </Link>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item onClick={this.showProductCards}><a>Home</a></Breadcrumb.Item>
              <Breadcrumb.Item>{window.location.pathname.substr(1)}</Breadcrumb.Item>
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
              { this.state.showProductCards ? null : <Route path="/0" ><ProductDetails products={products} prices={prices} showProductCards={this.showProductCards} /></Route> }
              { this.state.showProductCards ? null : <Route path="/1" ><ProductDetails products={products} prices={prices} showProductCards={this.showProductCards} /></Route> }
              { this.state.showProductCards ? null : <Route path="/2" ><ProductDetails products={products} prices={prices} showProductCards={this.showProductCards} /></Route> }
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;