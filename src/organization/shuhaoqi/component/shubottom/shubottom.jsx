import React from 'react'

export default ()=>{
	return(
			<div className="foot-hea">
				<div className="foot-hea-left">
					<p className="foot-hea-p">全部</p>
					<p className="foot-hea-p1">></p>
					<input className="foot-hea-input" type="text" placeholder="手机"/>
					<img className="foot-hea-img" src={require('../../img/搜索图标.png')} alt=""/>
				</div>
				<div className="foot-hea-right">
					<p className="foot-hea-p2">共 1998634件相关商品</p>
				</div>
			</div>
	)		
}