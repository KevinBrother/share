import React from 'react';
import img from '@assert/img.png';
import '@assert/div.css';
import '@assert/img.less';
import './index.less'

export function Foo() {
  return (
    <>
    <div style={{width: '375px', background: 'skyblue'}}> inner css </div>
    <div className="outer"> load less</div>
      <img src={img} alt="" />
    </>
  );
}
