import React from 'react'

export default (props)=>{
	console.log(props)		
	return<React.Fragment>
		<div className="shuhea-back">
			<div className="flex">
			<ul className="flex1">
				<li><img src={require('../../img/小图标3.png')} alt=""/></li>
				<li className="li-1">天猫首页</li>
				<li className="li-1">喵，欢迎来天猫</li>
				<li className="li-1">请登录</li>
				<li className="li-1">免费注册</li>
			</ul>
			<ul className="flex2">
				<li className="li-1">我的淘宝</li>
				<li className="img1"></li>
				<li><img src={require('../../img/小图标1.png')} alt=""/></li>
				<li className="li-1">购物车0件</li>
				<li className="li-1">收藏夹</li>
				<li className="img1" ></li>
				<li>|</li>
				<li><img src={require('../../img/小图标2.png')} alt=""/></li>
				<li className="li-1">手机版</li>
				<li className="li-1">淘宝网</li>
				<li className="li-1">商家支持</li>
				<li className="img1" ></li>
				<li><img src={require('../../img/小图标4.png')} alt=""/></li>
				<li className="li-1">网络导航</li>
				<li className="img1" ></li>
			</ul>
		    </div>	
		</div>
	</React.Fragment>
}