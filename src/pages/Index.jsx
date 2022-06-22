import React from "react";
import { Tabs } from "element-react";

import ConfigList from "../views/ConfigList";
import AddConfig from "../views/AddConfig";

import "./index.css"

const { Component } = React

class Index extends Component{


  render(){
    return (
      <div className="index-page">
        <div className="title">EBU七部开发一部接口配置管理</div>
        <Tabs  value="basic-config">
          <Tabs.Pane label="配置列表" name="basic-config">
            <ConfigList/>
          </Tabs.Pane>
          <Tabs.Pane label="添加配置" name="param-config">
            <AddConfig/> 
          </Tabs.Pane>
        </Tabs>
      </div>
    )
  }
}

export default Index