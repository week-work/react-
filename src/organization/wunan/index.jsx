import React from 'react'
// 吴楠部分
import Son from './son'
import './index.css'
export default class Index extends React.Component {
  render() {
    const imgs = [
      {
        src: require('./img/huaweimate20x.jpg'),
        $: '4990',
        name: 'Apple/苹果 iPhone XR',
        diss: '苏宁易购官方旗舰店',
        count: '该款月成交 2.6万笔'
      },
      {
        src: require('./img/huaweimete30.png'),
        $: '3990',
        name: '华为 mate 30',
        diss: '苏宁易购官方旗舰店',
        count: '该款月成交 2.6万笔'
      },
      {
        src: require('./img/iphone11.jpg'),
        $: '5990',
        name: 'iphone11',
        diss: '小张手机专卖店',
        count: '该款月成交 2.6万笔'
      },
      {
        src: require('./img/iphone8.jpg'),
        $: '4990',
        name: 'iphone8',
        diss: '小张手机专卖店',
        count: '该款月成交 2.6万笔'
      },
      {
        src: require('./img/diwu.jpg'),
        $: '7990',
        name: 'iphone8',
        diss: '三星官方旗舰店',
        count: '该款月成交 2.6万笔'
      }
    ]

    return (
      <div className="wunan-wrap">
        <div className="flex">
          {imgs.map((item, index) => {
            return (
              <Son
                src={item.src}
                $={item.$}
                name={item.name}
                diss={item.diss}
                count={item.count}
                key={index}
              />
            )
          })}
        </div>
        <div className="flex">
          {imgs.map((item, index) => {
            return (
              <Son
                src={item.src}
                $={item.$}
                name={item.name}
                diss={item.diss}
                count={item.count}
                key={index}
              />
            )
          })}
        </div>
        <div className="flex">
          {imgs.map((item, index) => {
            return (
              <Son
                src={item.src}
                $={item.$}
                name={item.name}
                diss={item.diss}
                count={item.count}
                key={index}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
