import React from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import './App.css';
import {Link} from 'react-router-dom';

import Main from './components/Main';


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className='Header-color' title= {<Link style = {{textDecoration: 'none', color: 'white'}} to= '/'>My Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</ Link>
                
                <Link to="/projects">Projects</ Link>
                <Link to="/contact">Contact</ Link>
            </Navigation>
        </Header>
        <Drawer title= {<Link style = {{textDecoration: 'none', color: 'grey'}} to= '/'>My Portfolio</Link>}>
            <Navigation>
                <Link to="/resume">Resume</ Link>
                <Link to="/aboutme">About Me</ Link>
                <Link to="/projects">Projects</ Link>
                <Link to="/contact">Contact</ Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
