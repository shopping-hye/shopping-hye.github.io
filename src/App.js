import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { grey } from '@ant-design/colors';
import { ProductDescription } from './components/ProductDescription/ProductDescription'
import { ProductCard } from './components/ProductCard/ProductCard'
import { Col, Row } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  handleMouseMove = event => {
    if (event.type === 'mouseover') {
      console.log(`you moved in ${name} at: ${new Date().toLocaleTimeString()}`)
    }
    if (event.type === 'mouseout') {
      console.log(`you moved out ${name} at: ${new Date().toLocaleTimeString()}`)
    }
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo"/>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
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
              <Row gutter={16}>
                <Col span={5}>
                  <ProductCard
                    name={'coffee machine'}
                    imageUri={'https://www.techinn.com/f/13774/137743100/philips-ep2235-espresso-coffee-machine.jpg'}
                    description={'a machine used to make coffee automatically'}/>
                </Col>
                <Col span={5}>
                  <ProductCard
                    name={'toaster'}
                    imageUri={'https://target.scene7.com/is/image/Target/GUEST_d8a811c3-5f0a-4131-8abf-8dfca482136f?wid=488&hei=488&fmt=pjpeg'}
                    description={'a toast machine for your everyday breakfast'}/>
                </Col>
                <Col span={5}>
                  <ProductCard
                    name={'fry pan'}
                    imageUri={'https://catalog.carlislefsp.com/images/1600x1600/332285.jpg'}
                    description={'a must have pan in your kitchen'}/>
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;