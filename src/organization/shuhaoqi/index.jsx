import React from 'react';
//引入样式
import './style/indxe.css'
//引入shuhaeder组件
import Shuheader from './component/shuheader/shuheader'
//引入shumain组件
import Shumain from './component/shumain/shumain'
//引入footer组件
import Shufooter from './component/shufooter/shufooter'
//引入shubottom组件
import Shubottom from './component/shubottom/shubottom'
//引入Shufooter1组件
import Shufooter1 from './component/shufooter1/shufooter1'
export default class Index extends React.Component{
	render(){
		return(
			<div className='shuhaoqi'>
				<Shuheader/>
				<Shumain/>
				<Shufooter/>
				<Shubottom/>
				{/* <Shufooter1/> */}
			</div>
		)
	}
}
