import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Link } from 'react-router-dom';
// import api from '@/api/kind/index.js';
import '../components/kind/kind.scss';

class Com extends Component {



    render() {
        return(

            <div className="box">
                <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => this.props.history.go(-1)}
                rightContent={[
                    <Icon key="1" type="ellipsis" />,
                ]}
                >分类</NavBar>
                <div className="content">
                
                    <div className="leixing">
                        <ul className="ul1">
                            <li className="te te2">
                                <Link to = { './KindList/' }>
                                    <img src=" http://cdn.lining.com/postsystem/docroot/images/goods/201901/447459/display_447459_1.jpg" alt=""/>
                                    <div>了解更多 >></div>
                                </Link>
                            </li >
                            <li className="te te2">
                                <Link to = { '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201901/443191/display_443191_1.jpg" alt=""/>
                                    <div>了解更多 >></div>
                                </Link>
                            </li>
                            <li className="te2">
                                <Link to = { '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201901/446072/display_446072_1.jpg" alt=""/>
                                    <div>了解更多 >></div>
                                </Link>
                            </li>
                            <li className="te te2">
                                <Link to = { '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201901/444617/display_444617_1.jpg" alt=""/>
                                    <div>了解更多 >></div>
                                </Link>
                            </li>
                            <li className="te te2">
                                <Link to = { '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201901/443119/display_443119_1.jpg" alt=""/>
                                    <div>了解更多 >></div>
                                </Link>
                            </li>
                            <li className="te2">
                                <Link to = { '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201901/444617/display_444617_1.jpg" alt=""/>
                                    <div>了解更多 >></div>
                                </Link>
                                
                            </li>
                            <li className="te">
                                <Link to = { '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201901/448039/display_448039_1.jpg" alt=""/>
                                    <div>了解更多 >></div>
                                </Link>
                            </li>
                            <li className="te">
                                <Link to = { '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201901/445246/display_445246_1.jpg" alt=""/>
                                    <div>了解更多 >></div>
                                </Link>
                            </li>
                            <li>
                                <Link to = { '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201901/445529/display_445529_1.jpg" alt=""/>
                                    <div>了解更多 >></div>
                                </Link>    
                            </li>

                        </ul>
                    </div>
                    <div className="pinpai">
                        <h3>品牌分类</h3>
                        <ul className="ul2">
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201901/454341/display_454341_1.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201804/386551/display_386551_1.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201901/447320/display_447320_1.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201901/454325/display_454325_1.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201901/448341/display_448341_1.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201901/452837/display_452837_1.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201901/445278/display_445278_1.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201806/402961/display_402961_1.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201806/405015/display_405015_1.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201806/405015/display_405015_1.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201809/429875/display_429875_1.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="http://cdn.lining.com/postsystem/docroot/images/goods/201901/449707/display_449707_1.jpg" alt=""/>
                                </Link>
                            </li>
                       </ul>
                   </div>
                </div>
            </div>
        )
    }
}
export default Com