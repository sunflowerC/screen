// 在这里引入页面的组件
import './index.less';

import page1 from './views/page1';
import page2 from './views/page2';
import page3 from './views/page3';
import page4 from './views/page4';
import page5 from './views/page5';

function render(hash) {
  if (!hash) {
    window.location.hash = '/page1';
    page1();
  }

  if (hash === '#/page1') {
    console.log('render page1');
    page1();
  }

  if (hash === '#/page2') {
    console.log('render page2');
    page2();
  }

  if (hash === '#/page3') {
    console.log('render page3');
    page3();
  }

  if (hash === '#/page4') {
    console.log('render page4');
    page4();
  }

  if (hash === '#/page5') {
    console.log('render page5');
    page5();
  }
}

render(window.location.hash);

// 修改 hash（#/后面的） 时执行
// window.addEventListener(
//   'hashchange',
//   () => {
//     render(window.location.hash);
//   },
//   false,
// );
