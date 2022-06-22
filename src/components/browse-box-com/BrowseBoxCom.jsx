import React from "react";
import { AutoComplete,Tag,Button } from "element-react";
import './index.css'
import { Dialog,Pagination } from "element-react/next";
import { Table } from "element-react";

class BrowseBoxCom extends React.Component{
  
  constructor(props){
    super(props);
    this.tRef = React.createRef();
  }

  componentDidMount(){
    if(this.tRef){
      let _this = this
      let input = this.tRef.current.__domNode.children[0].children[1]
      input.addEventListener('keydown', function(ev) {
        if ((ev.key === 'Backspace' || ev.keyCode == 8) && !this.value) {
          console.log("删除数据！")
          _this.state.tags.pop()
          _this.setState({
            tags:[..._this.state.tags]
          })
        }
      })
    }
  }

  state = {
    browseBoxBorder:"",
    dialogVisible:false,
    restaurants: [
      {
        date: '2016-05-02',
        name: '王小虎1',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎2',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎3',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      } 
    ],
    value: '',
    tags:[],
    table : {
      columns: [
        {
          label: "日期",
          prop: "date",
          minWidth: 150
        },
        {
          label: "姓名",
          prop: "name",
          minWidth: 100
        },
        {
          label: "地址",
          prop: "address",
          minWidth:200,
        }
      ],
      data: [{
        date: '2016-05-02',
        name: '王小虎1',
        value: '王小虎1',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎2',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎3',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  
  }

  querySearch(queryString, cb) {
    const { restaurants } = this.state;
    const results = queryString ? restaurants.filter(this.createFilter(queryString)) : [];
    // 调用 callback 返回建议列表的数据
    cb(results);
  }

  createFilter(queryString) {
    return (restaurant) => {
      console.log(queryString,restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      return (restaurant.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
    };
  }
  customItem = (option)=>{
    return option.item.name
  }

  handleSelect(item) {
    console.log(item)
    this.setState({
      tags:[item]
    }) 
  }

  clickSearchIcon = ()=>{
    this.setState({
      dialogVisible:true
    })
  }
  

  clickRow = (row, event, column)=>{
    this.setState({
      tags:[row],
      dialogVisible:false
    })
  }

  deleteTag = (tag)=>{
    let index = this.state.tags.findIndex(item=>item.name = tag.name)
    this.state.tags.splice(index,1)
    this.setState({
      tags:[...this.state.tags]
    })
  }

  render() {
    return (
      <div className="browse-page">
        <div className={`browse-box ${this.state.browseBoxBorder}`}>
          <div className="tags">
              {
                this.state.tags.map(item=>{
                  return (
                    <Tag type='primary'
                    closable
                    onClose={()=>{this.deleteTag(item)}}
                    >{item.name}</Tag>
                  )
                })
              }
          </div>
          <AutoComplete
            className="my-autocomplete"
            icon="search"
            placeholder="请输入内容"
            value={this.state.value}
            ref={this.tRef}
            onFocus={()=>{this.setState({browseBoxBorder:'focus-border'})}}
            onBlur={()=>{this.setState({browseBoxBorder:''})}}
            onIconClick={this.clickSearchIcon}
            fetchSuggestions={this.querySearch.bind(this)}
            customItem={this.customItem}
            onSelect={this.handleSelect.bind(this)}
          ></AutoComplete>
        </div>
        <Dialog
          title="流程"
          size="tiny"
          style={{width:'60vw',minHeight:'420px'}}
          visible={ this.state.dialogVisible }
          onCancel={ () => this.setState({ dialogVisible: false }) }
          lockScroll={ false }
        >
          <Dialog.Body style={{maxHeight:'300px'}}>
            <Table
              style={{width:'100%'}}
              maxHeight={300}
              onRowClick={this.clickRow}
              stripe={true}
              columns={this.state.table.columns}
              data={this.state.table.data} />
            <div className="pagination">
              <Pagination layout="total, sizes, prev, pager, next, jumper" total={400} pageSizes={[100, 200, 300, 400]} pageSize={100} currentPage={5}/>
            </div>
        </Dialog.Body>
          <Dialog.Footer className="dialog-footer">
            <Button onClick={ () => this.setState({ dialogVisible: false }) }>取消</Button>
            <Button type="primary" onClick={ () => this.setState({ dialogVisible: false }) }>确定</Button>
          </Dialog.Footer>
        </Dialog>
      </div> 
    )
}
}

export default BrowseBoxCom