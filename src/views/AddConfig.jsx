import React from "react";
import { Steps } from "element-react/next";
import { Button } from "element-react";
import '../css/AddConfig.css'
import BrowseBoxCom from "../components/browse-box-com/BrowseBoxCom";

class AddConfig extends React.Component{

  render(){
    return (
      <div className="config-list">
        <div className="step-wrap">
          <Steps space={180} active={1}>
            <Steps.Step title="基本数据" description="配置基础参数"></Steps.Step>
            <Steps.Step title="接口数据" description="配置接口数据"></Steps.Step>
            <Steps.Step title="响应数据" description="配置接口数据"></Steps.Step>
            <Steps.Step title="其他配置" description="配置响应参数"></Steps.Step>
            <Steps.Step title="完成" description="配置完成"></Steps.Step>
          </Steps>
        </div>
        
        <div className="tab-page">
          这个是页面
          <BrowseBoxCom></BrowseBoxCom>
        </div>
        <div className="step-btn">
          <Button type="primary" icon="arrow-left">上一步</Button>
          <Button type="primary">下一步<i className="el-icon-arrow-right el-icon-right"></i></Button>
        </div>
      </div>
    )
  }
}

export default AddConfig