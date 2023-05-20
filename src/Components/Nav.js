import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Home from './Home';
import Services from "./Services";

export default function Nav() {
    return (
        <Tabs defaultActiveKey="home" id="tabMenu" className="mb-3">
            <Tab eventKey="home" title="Home">
                <Home />
            </Tab>
            <Tab eventKey="services" title="Services">
                <Services />
            </Tab>
        </Tabs>
    )
};