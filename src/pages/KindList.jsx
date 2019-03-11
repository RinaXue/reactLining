import React, { Component } from 'react';
import { NavBar, Icon, PullToRefresh, ListView, Button } from 'antd-mobile';
import List from '@/components/KindList/List';
import api from '@/api/kind/index.js';
import '@/qunar/reset.scss';
import '../main.scss';

const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
    const dataArr = [];
    for (let i = 0; i < NUM_ROWS; i++) {
      dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
    }
    return dataArr;
}

class Com extends Component {

    constructor (props) {
        super(props);
        this.state = {
            list: [],
            sortnum: 1,
            navname: ['默认', '销量', '价格'],
            navnum: 0,
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight,
            pageCode: 1,
            pageNumber:30
        };

        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

    }

    componentDidUpdate() {
        if (this.state.useBodyScroll) {
          document.body.style.overflow = 'auto';
        } else {
          document.body.style.overflow = 'hidden';
        }
    }
    
    componentDidMount () {
        api.requestData(1, 30).then(data => {
            this.setState({
                list:data
            })
        })

    }
    navFn ( index ) {
        this.setState({
            pageNumber: 30
        })
        if(index === 0) {
            api.requestData().then(data => {
                this.setState({
                    list:data
                })
            })
        }else if (index === 1) {
            let number= this.state.sortnum
            if (number === 1) {
                number = -1
                api.requestDataSale(number).then(data => {
                    this.setState({
                        list: data,
                        sortnum: number
                    })
                })
            } else if (number === -1) {
                number = 1
                api.requestDataSale(number).then(data => {
                    console.log(data)
                    this.setState({
                        list: data,
                        sortnum : number
                    })
                }) 
            }
        }else if (index === 2) {
            let number= this.state.sortnum
            if (number === 1) {
                number = -1
                api.requestDataPrice(number).then(data => {
                    console.log(data)
                    this.setState({
                        list: data,
                        sortnum: number
                    })
                })
            } else if (number === -1) {
                number = 1
                api.requestDataPrice(number).then(data => {
                    this.setState({
                        list: data,
                        sortnum : number
                    })
                }) 
            }
           
        }
        this.setState ({
            navnum: index
        })
    }

    render() {
        let navhtml = []
        this.state.navname.map((item,index) =>{
            navhtml.push(
                <li key= {index} className={this.state.navnum === index ? 'active' : ''} onClick={ this.navFn.bind(this,index) }>{item}</li>
            )
        })
        return (
            <div className="box">

                <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => this.props.history.go(-1)}
                >产品列表</NavBar>

                <div className="content">

                    <div className="tabBar">
                        <ul className="tabUl">
                            {navhtml}
                            <li>评论数</li>
                        </ul>
                    </div>
                    
                    <div>
                        <PullToRefresh
                            damping={60}
                            ref={el => this.ptr = el}
                            style={{
                            height: this.state.height,
                            overflow: 'auto',
                            }}
                            indicator={this.state.down ? {} : { deactivate: '上拉可以加载' }}
                            direction={this.state.down ? 'down' : 'up'}
                            onRefresh={() => {
                                let shuliang = this.state.pageNumber + 30
                                let number= this.state.sortnum
                                this.state.down = false
                                this.setState ({
                                    pageNumber:shuliang
                                })
                                if( this.state.navnum === 0) {
                                    api.requestData(1,shuliang).then(data => {
                                        this.setState({
                                            list:data
                                        })
                                    })
                                    if (this.state.list.length === 96) {
                                        this.state.down = true;
                                    } 
                                } else if (this.state.navnum === 1) {
                                    api.requestDataSale(number, shuliang).then(data => {
                                        this.setState({
                                            list: data
                                        })
                                    })
                                    if (this.state.list.length === 96) {
                                        this.state.down = true;
                                    } 
                                } else if (this.state.navnum === 2) {
                                    api.requestDataPrice(number, shuliang).then(data => {
                                        this.setState({
                                            list: data
                                        })
                                    })
                                    if (this.state.list.length === 96) {
                                        this.state.down = true;
                                    } 
                                }
                            }}
                        >
                            <List list = { this.state.list }/>
                        </PullToRefresh>
                    </div>

                </div>

            </div>
        )
    }
}

export default Com
