import React from "react";

import { Table,Select,Button,Input } from "element-react";
import { Pagination,Tag } from "element-react/next";
import '../css/ConfigList.css'

class ConfigList extends React.Component{

  state = {
    columns: [
      {
        label: "唯一标识",
        prop: "uniqueCode",
        width:120
      },
      {
        label: "请求地址",
        prop: "requestUrl",
        width: 360
      },
      {
        label: "请求方式",
        prop: "requestType",
        width:100,
        render: (row, column, index)=>{
          if(row.requestType == '0'){
            return <span>GET</span>
          }
          if(row.requestType == '1'){
            return <span>POST</span>
          }
        }
      },
      {
        label: "请求格式",
        prop: "contentType",
        width: 200,
        render: (row)=>{
          if(row.contentType == 0)
              return (<span>json</span>)
          if(row.contentType == 1)
              return (<span>form-data</span>)
          if(row.contentType == 2)
              return (<span>x-www-form-urlencoded</span>)
          }
        
      },
      {
        label: "描述",
        prop: "requestDesc",
        width:300
      },
      {
        label: "数据来源",
        prop: "dataSource",
        width: 100,
        render: (row)=>{
          if(row.dataSource == 0){
            return <span>流程</span>
          }
          if(row.dataSource == 1){
           return <span>建模</span> 
          }
        }
      },
      {
        label: "是否启用",
        prop: "enableStatus",
        width:100,
        render: (row)=>{
          if(row.enableStatus == 0){
            return <Tag type="danger">禁用</Tag>
          }
          if(row.enableStatus == 1){
            return <Tag type="success">启用</Tag>
          }
        }
      },
      {
        label: "操作",
        prop: "zip",
        fixed: 'right',
        width:180,
        render: (row,column,index)=>{
            return (
              <div className="operation-btn">
                  <Button type="text">查看</Button>
                  {row.enableStatus == 0 ? 
                  <Button type="text" className="warning">禁用</Button>
                  : <Button type="text" className="success">启用</Button>}
                  <Button type="text" className="info">编辑</Button>
                  <Button type="text" className="danger">删除</Button>
              </div>
            )
        }
      }
    ],
    data: [{
      uniqueCode:'uniqueCode',
      requestUrl:"https://www.baidu.com",
      requestType:'0',
      contentType:"0",
      requestDesc:'描述',
      dataSource:"0",
      enableStatus:'1'
    },{
      uniqueCode:'uniqueCode',
      requestUrl:"https://www.baidu.com",
      requestType:'0',
      contentType:"1",
      requestDesc:'描述，我是一大堆描述数据，说明这个API是干啥用的！',
      dataSource:"1",
      enableStatus:'0'
    },{
      uniqueCode:'uniqueCode',
      requestUrl:"https://www.baidu.com",
      requestType:'1',
      contentType:"2",
      requestDesc:'描述',
      dataSource:"0",
      enableStatus:'1'
    }],
    options: [{
      value: '0',
      label: 'POST'
    }, {
      value: '1',
      label: 'GET'
    }],
    value:""
  }



  render(){
    return (
      <div className="config-list">
        <div className="search">
          <div className="input-item">
            <label>接口名称：</label>
            <Input placeholder="请输入接口名称" size="small"/>
          </div>
          <div className="input-item">
            <label>唯一标识：</label>
            <Input placeholder="请输入接唯一标识" size="small"/>
          </div>
          <div className="input-item">
            <label>请求方式：</label>
            <Select value={this.state.value} size="small" clearable={true}>
            {
              this.state.options.map(el => {
                return <Select.Option key={el.value} label={el.label} value={el.value} />
              })
            }
          </Select>
          </div>
          <div className="input-item btn-wrap">
            <Button type="primary" icon="search">搜索</Button>
            <Button type="danger" icon="close">重置</Button>
          </div>
        </div>
        <div className="table-title">
          <div className="title-text">接口列表</div>
          <div className="btn-wrap">
            <Button type="primary" size="small" icon="plus">添加接口</Button>
          </div>
        </div>
        <Table
          fit
          columns={this.state.columns}
          data={this.state.data}
          border={true}
        />
        <div className="pagination">
          <Pagination layout="total, sizes, prev, pager, next, jumper" total={400} pageSizes={[100, 200, 300, 400]} pageSize={100} currentPage={5}/>
        </div>
      </div>
    )
  }
}

export default ConfigList