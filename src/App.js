import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import { ProductDetails } from './components/ProductDetails/ProductDetails'
import { ProductCard } from './components/ProductCard/ProductCard'
import { Col, Row } from 'antd';
const { Header, Content, Sider } = Layout;
import { Route, Link } from "react-router-dom";

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
    let path;
    if (this.state.showProductCards) {
      path  = '';
    } else {
      path = window.location.pathname.substr(1);
    }
    const products = this.props.products;
    const prices = this.props.prices;
    const ProductCards = () => (
      <Row gutter={24}>
        <Col span={6} onClick={this.hideProductCards}>
          <Link to="/0" >
            <ProductCard
              index={0}
              products={products}
              prices={prices}/>
          </Link>
        </Col>
        <Col span={6} onClick={this.hideProductCards}>
          <Link to="/1">
            <ProductCard
              index={1}
              products={products}
              prices={prices}/>
          </Link>
        </Col>
        <Col span={6} onClick={this.hideProductCards}>
          <Link to="/2">
            <ProductCard
              index={2}
              products={products}
              prices={prices}/>
          </Link>
        </Col>
      </Row>
    )
    return (
      <Layout>
        <Header className='shopping-header'>
          <Link to="/" onClick={this.showProductCards}>
            <h1 style={{
              color: "#fadb14"
            }}>Hye</h1>
          </Link>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item onClick={this.showProductCards}>
                <Link to="/" >Home</Link>
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