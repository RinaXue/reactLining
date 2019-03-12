import React,{Component} from 'react'
import './Orderlist.scss'
import { Tabs, WhiteSpace } from 'antd-mobile';



class Com extends Component{
  constructor(props){
    super(props);
    this.state={
      tabs : [
        { title: <div>待付款</div> },
        { title: <div>待发货</div> },
        { title: <div>待收货</div> },
        { title: <div>已完成</div> }
      ]
    }
  }
  render(){
    return(
      <div className='content'>
          <Tabs tabs={this.state.tabs}
            initialPage={0}
            // onChange={(tab, index) => { console.log('onChange', index, tab); }}
            // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          >
            <div className='kuang'>
            待付款
            </div>
            <div className='kuang'>
            待发货
            </div>
            <div className='kuang'>
            待收货
            </div>
            <div className='kuang'>
            已完成
            </div>
          </Tabs>
          <WhiteSpace />
      </div>
    )
  }
}

export default Com