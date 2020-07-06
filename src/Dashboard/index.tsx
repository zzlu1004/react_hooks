import React from 'react';
// import logo from './logo.svg';
import '../App.css';
import { Layout } from 'antd';
import  LeftNav from './LeftNav'
import  CreateRouter  from '../router'
import { BrowserRouter as Router } from 'react-router-dom'

const { Content, Footer, Sider } = Layout;



function Index(){
    return (
        <div className="App">
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider>
                        <LeftNav />
                    </Sider>
                    <Layout className="site-layout">
                    {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <CreateRouter />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </Router>
        </div>
    );
    
}

export default Index;
