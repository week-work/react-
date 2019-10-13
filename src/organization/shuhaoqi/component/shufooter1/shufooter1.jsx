import React from 'react'

export default ()=>{
	return(
		<div className="foo1-back">
			<div className="foo1-div1">
				<ul className="foo1-ul">
					<li style={{color:"red"}}>综合⬇️</li>
					<li>人气⬇️</li>
					<li>新品⬇️</li>
					<li>销量⬇️</li>
					<li>价格</li>
					<li>收货地：</li>
					<li>杭州</li>
					<li>¥输入</li>
					<li>—</li>
					<li>¥请输入</li>
					<li className="foo1-li-01">
						<input className="foo1-li-input" type="checkbox" />
						新到产品
						<input className="foo1-li-input" type="checkbox" />
						包邮
						<input className="foo1-li-input" type="checkbox" />
						折扣
					</li>
					
					<li>店铺</li>
					<li>大图</li>
				</ul>
			</div>
			<div className="foo1-div2">
					<ul className="foo1-ul2">
						<li>1/80</li>
						
					</ul>
			</div>
		</div>
	)
}