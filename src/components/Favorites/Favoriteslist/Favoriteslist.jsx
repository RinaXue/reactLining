import React,{Component} from 'react'
import './Favoriteslist.scss'
import { Card, WhiteSpace } from 'antd-mobile';

class Com extends Component{
  constructor(props){
    super(props);
    this.state={
      arr:[]
    }
  }
  // shanchu(index){
  //   let arr=JSON.parse(localStorage.getItem('loveData'))||[]
  //   arr=arr.splice(index,1)
    
  //   this.setState({
  //     arr:arr
  //   })
  //   localStorage.setItem("loveData",JSON.stringify(arr))
  // }
  componentDidMount(){
    this.setState({
      arr:JSON.parse(localStorage.getItem('loveData'))||[]
    })
  }
  render(){
    let html = []
      this.state.arr.map((item, index) => {
        console.log(item,index)
        html.push(
        <div key={index}>
          <WhiteSpace size="lg" />
          <Card full>
          <div id='tp'>
            <Card.Header
              title={item.goodsName}
              thumb={item.mainPic}
              // extra={<span>this is extra</span>}
            />
          </div>
            {/* <Card.Body>
              <div>This is content of `Card`</div>
            </Card.Body> */}
            <Card.Footer content={item.marketPrice} extra={<a>删除</a>} />
          </Card>
        </div>
        )
      })
    return(
      <div className="content">
        {html}
      </div>
    )
  }
}

export default Com