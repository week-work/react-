// LQ头部
import React, { Component } from 'react'
import './index.scss'
// 图片数据
const imgs = [
  {
    id: '01',
    src: '//img.alicdn.com/bao/uploaded/TB1vDvUKpXXXXaKXFXXSutbFXXX.jpg'
  },
  {
    id: '02',
    src: '//img.alicdn.com/bao/uploaded/TB1vDvUKpXXXXaKXFXXSutbFXXX.jpg'
  },
  {
    id: '03',
    src: '//img.alicdn.com/bao/uploaded/TB1vDvUKpXXXXaKXFXXSutbFXXX.jpg'
  }
]

export default class index extends Component {
  render() {
    return (
      <div className="lqTop">
        {/* 品牌、分类部分 */}
        <div className="lqTop-top">
          {/* 品牌部分 */}
          <div className="lqTop-top-placard">
            {/* 第一部分 */}
            <div className="lqTop-top-placard-item1">
              <p>品牌</p>
            </div>
            {/* 第二部分 图片  */}
            <div className="lqTop-top-placard-item2">
              {imgs.map(item => (
                <div className="lqTop-top-placard-item2-box" key={item.id}>
                  <img src={item.src} />
                </div>
              ))}
            </div>
            {/* 第三部分 */}
            <div className="lqTop-top-placard-item3"></div>
          </div>
          <div className="lqTop-top-background"></div>
        </div>
      </div>
    )
  }
}
