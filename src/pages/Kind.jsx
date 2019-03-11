import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Link } from 'react-router-dom';
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
                                    <img src="/images/9cb5861c-5ff8-42b8-8c9b-0f6b4a53cde9.jpg" alt=""/>
                                    <div>运动城app</div>
                                </Link>
                            </li >
                            <li className="te te2">
                                <Link to = { '/kindlist/' }>
                                    <img src="/images/65bd9fc8-7f5e-4dba-b083-0c05b1bc9b96.jpg" alt=""/>
                                    <div>运动城app</div>
                                </Link>
                            </li>
                            <li className="te2">
                                <Link to = { '/kindlist/' }>
                                    <img src="/images/2e7b0a93-2da2-437e-adde-ffba0cfbe218.jpg" alt=""/>
                                    <div>运动城app</div>
                                </Link>
                            </li>
                            <li className="te te2">
                                <Link to = { '/kindlist/' }>
                                    <img src="/images/f91ac28f-b66c-45e0-9752-41bcfa0302c7.jpg" alt=""/>
                                    <div>运动城app</div>
                                </Link>
                            </li>
                            <li className="te te2">
                                <Link to = { '/kindlist/' }>
                                    <img src="/images/ce94d818-bc17-4028-9c5f-cd22e6661d83.jpg" alt=""/>
                                    <div>运动城app</div>
                                </Link>
                            </li>
                            <li className="te2">
                                <Link to = { '/kindlist/' }>
                                    <img src="/images/977a1fc2-0ee7-4f73-a7f6-eea5b73f642b.jpg" alt=""/>
                                    <div>运动城app</div>
                                </Link>
                                
                            </li>
                            <li className="te">
                                <Link to = { '/kindlist/' }>
                                    <img src="/images/8d502712-32ed-4301-a4e7-45b1ea4aaa77.jpg" alt=""/>
                                    <div>运动城app</div>
                                </Link>
                            </li>
                            <li className="te">
                                <Link to = { '/kindlist/' }>
                                    <img src="/images/2cf2f1f9-df47-47bc-be52-c5d70af53778.jpg" alt=""/>
                                    <div>运动城app</div>
                                </Link>
                            </li>
                            <li>
                                <Link to = { '/kindlist/' }>
                                    <img src="/images/1613e012-64fa-444a-b4de-83ebd804b0d6.jpg" alt=""/>
                                    <div>运动城app</div>
                                </Link>    
                            </li>

                        </ul>
                    </div>
                    <div className="pinpai">
                        <h3>品牌分类</h3>
                        <ul className="ul2">
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="/images/886a68b6-f0aa-41cd-ad89-757c427a33c9.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="/images/899329e3-9ec3-466b-856f-15f2a91b72a4.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="/images/276aed28-5c4c-4ded-9070-59719e583ee5.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="/images/01d5dc75-9e5d-405f-bf93-5793fec72e24.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="/images/a5b3890a-7d78-4bac-be54-45febc984835.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="/images/e6657ca7-c4c5-43fc-9bd6-29999102fc61.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="/images/7865e470-0296-4f6b-98aa-30ab9824358d.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="/images/b5804b78-d14c-4e34-bd39-244183f92997.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="/images/7865e470-0296-4f6b-98aa-30ab9824358d.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="/images/e6657ca7-c4c5-43fc-9bd6-29999102fc61.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="/images/e6657ca7-c4c5-43fc-9bd6-29999102fc61.jpg" alt=""/>
                                </Link>
                            </li>
                            <li>
                                <Link to={ '/kindlist/' }>
                                    <img src="/images/7865e470-0296-4f6b-98aa-30ab9824358d.jpg" alt=""/>
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