import React, { Component } from 'react'
import Shuhaoqi from './shuhaoqi/' //舒浩奇部分
import Wunna from './wunan/' //吴楠部分
import Haoran from './hoaran/' //浩然部分
import Jiajunke from './jiajunke/' //贾俊科部分
//我是根文件
export default class index extends Component {
  render() {
    return (
      <>
        {/* 舒浩奇部分 */}
        <Shuhaoqi />
        {/* 吴楠部分 */}
        <Wunna />
        {/* 浩然部分 */}
        <Haoran />
        {/*贾俊科部分 */}
        <Jiajunke />
      </>
    )
  }
}
