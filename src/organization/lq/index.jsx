// 李强部分
import React, { Component } from 'react'
import './index.scss'
import policeLogo from '../../policeLogo.png'
// 第一行数据
const Data1 = [
  { id: '01', label: '关于天猫' },
  { id: '02', label: '帮助中心' },
  { id: '03', label: '开放平台' },
  { id: '04', label: '诚聘英才' },
  { id: '05', label: '联系我们' },
  { id: '06', label: '网站合作' },
  { id: '07', label: '法律声明' },
  { id: '08', label: '隐私权政策' },
  { id: '09', label: '知识产权' },
  { id: '010', label: '廉正举报' }
]

// 第二行数据
const Data2 = [
  { id: '01', label: '阿里巴巴集团' },
  { id: '02', label: '淘宝网' },
  { id: '03', label: '天猫' },
  { id: '04', label: '聚划算' },
  { id: '05', label: '全球速卖通' },
  { id: '06', label: '阿里巴巴国际交易市场' },
  { id: '07', label: '1688' },
  { id: '08', label: '阿里妈妈' },
  { id: '09', label: '飞猪' },
  { id: '010', label: '阿里云计算' },
  { id: '011', label: 'AliOS' },
  { id: '012', label: '阿里通信' },
  { id: '013', label: '万网' },
  { id: '014', label: '高德' },
  { id: '015', label: 'UC' },
  { id: '016', label: '友盟' },
  { id: '017', label: '虾米' },
  { id: '018', label: '钉钉' }
]

// 第三行数据
const Data3 = [
  { id: '01', label: '增值电信业务经营许可证： 浙B2 - 20110446' },
  { id: '02', label: '市场名称登记证：工商网市字3301004119号' },
  { id: '03', label: '出版物网络交易平台服务经营备案证： 新出发浙备字第001号' }
]

// 第四行数据
const Data4 = [
  {
    id: '01',
    label:
      '互联网违法和不良信息举报电话：0571 - 81683755 blxxjb@alibaba-inc.com'
  },
  {
    id: '02',
    label: '互联网药品信息服务资质证书编号：浙 -（经营性）-2017 - 0005'
  }
]

// 第五行数据
const Data5 = [
  {
    id: '01',
    label:
      '医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00002号'
  },
  {
    id: '02',
    label: '互联网药品交易服务资格证书：国A20150001'
  }
]

// 第六行数据
const Data6 = [
  {
    id: '01',
    label: '浙江省网络食品销售第三方平台提供者备案：浙网食A33010002'
  },
  { id: '02', label: '12318举报' }
]

export default class index extends Component {
  render() {
    return (
      <div className="lq">
        <main className="lq-main">
          {/* 第一行内容 */}
          <ul className="lq-main-01">
            {Data1.map(item => {
              return <li key={item.id}>{item.label}</li>
            })}
          </ul>

          {/* 第二行内容 */}
          <ul className="lq-main-02">
            {Data2.map(item => (
              <li key={item.id}>
                <span>{item.label}</span>|
              </li>
            ))}
            <li>支付宝</li>
          </ul>

          {/* 第三行内容 */}
          <ul className="lq-main-03">
            {Data3.map(item => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>

          {/* 第四行内容 */}
          <ul className="lq-main-04">
            {Data4.map(item => (
              <li key={item.id}>{item.label}</li>
            ))}

            <li>
              <img src={policeLogo} alt="" />
              <a href="#">浙公网安备 33010002000120号</a>
            </li>
          </ul>

          {/* 第五行内容 */}
          <ul className="lq-main-05">
            {Data5.map(item => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>

          {/* 第六行内容 */}
          <ul className="lq-main-06">
            {Data6.map(item => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>

          {/* 第七行内容 */}
          <ul className="lq-main-07">
            <li>© 2003-2019 TMALL.COM 版权所有</li>
          </ul>
        </main>
      </div>
    )
  }
}
