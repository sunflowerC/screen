import ico1 from './images/ico1.png';
import alarm from './images/alarm.png';
import yellowico1 from './images/yellow_ico1.png';
import yellowico2 from './images/yellow_ico2.png';
import yellowico3 from './images/yellow_ico3.png';
import blueico1 from './images/blue_ico1.png';
import blueico2 from './images/blue_ico2.png';
import mapchina1 from './images/map_china1.png';
import mapchina2 from './images/map_china2.png';
import mapchina3 from './images/map_china3.png';
import mapchina4 from './images/map_china4.png';
import bluesico1 from './images/blue_s_ico1.png';
import bluesico2 from './images/blue_shine_ico2.png';
import bluesico3 from './images/blue_s_ico3.png';
import bluesico4 from './images/blue_s_ico4.png';

export default`
<div class="content">
<div class="box">
  <div class="titlebox">
    <h3>实时运单</h3>
  </div>
  <div class="waybill">
    <div class="left">
      <div class="transport">
        <img src="${ico1}" alt="">
        <ul>
          <li>运单</li>
          <li>
            <i id="bill_count">600</i>个</li>
        </ul>
      </div>
      <ul class="tabtrans">
        <li>托运单</li>
        <li>
          <i id="bill_consignment">100</i>个</li>
      </ul>
      <ul class="tabtrans">
        <li>承运单</li>
        <li>
          <i id="bill_carrier">100</i>个</li>
      </ul>
      <ul class="tabtrans">
        <li>运输中</li>
        <li>
          <i id="bill_transportation">100</i>个</li>
      </ul>
      <ul class="tabtrans">
        <li>正在装货</li>
        <li>
          <i id="bill_loading">100</i>个</li>
      </ul>
      <ul class="tabtrans">
        <li>正在卸货</li>
        <li>
          <i id="bill_unload">100</i>个</li>
      </ul>
      <ul class="tabtrans">
        <li>已完成</li>
        <li>
          <i id="bill_complete">100</i>个</li>
      </ul>

    </div>
    <div class="right">
      <div class="alarm">
        <img src="${alarm}" alt="">
        <span>装货出厂发生异常</span>
        <span>2018-04-06</span>
      </div>
      <div class="wall">
        <div class="wall-left">
          <img src="${yellowico1}" alt="">
          <ul>
            <li>报警数量</li>
            <li>
              <i id="warningCount">100</i>起 </li>
          </ul>
        </div>
        <div class="wall-right">
          <div class="abnormal">
            <img src="${yellowico2}" alt="">
            <span>装货异常
              <i id="loadingWarningCount">100</i>起 </span>
          </div>
          <div class="abnormal">
            <img src="${yellowico3}" alt="">
            <span>运输异常
              <i id="transWarningCount">100</i>起 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="statistical">
    <div class="statistical-left">
      <div class="statistical-title">
        <h3>车辆属地统计运单</h3>
      </div>
      <div class="con">
        <div class="radiustop"></div>
        <div class="car-center">
          <div class="flexbox">
            <img src="${blueico1}" alt="">
            <ul>
              <li>本地车辆</li>
              <li>
                <i id="bendicheliang">100</i>
                <em>辆</em>
              </li>
            </ul>
          </div>
          <div class="flexbox">
            <img class="distance" src="${blueico2}" alt="">
            <ul>
              <li>外省市车辆</li>
              <li>
                <i id="waishengcheliang">100</i>
                <em>辆</em>
              </li>
            </ul>
          </div>
        </div>
        <div class="radiusbottom"></div>
      </div>
      <div class="statistical-title">
        <h3>运输起始统计运单</h3>
      </div>
      <div class="con">
        <div class="radiustop"></div>
        <div class="car-center">
          <div class="flexbox">
            <img src="${mapchina2}" alt="">
            <ul>
              <li>本市--本市</li>
              <li>
                <i id="localToLocal">100</i>
                <em>个</em>
              </li>
            </ul>
          </div>
          <div class="flexbox">
            <img class="distance" src="${mapchina1}" alt="">
            <ul>
              <li>本市--外省市</li>
              <li>
                <i id="localToForeign">100</i>
                <em>个</em>
              </li>
            </ul>
          </div>
          <div class="flexbox flexboxTop">
            <img class="distance" src="${mapchina3}" alt="">
            <ul>
              <li>外省市--本市</li>
              <li>
                <i id="foreignToLocal">100</i>
                <em>个</em>
              </li>
            </ul>
          </div>
          <div class="flexbox flexboxTop">
            <img class="distance" src="${mapchina4}" alt="">
            <ul>
              <li>外省市业务</li>
              <li>
                <i id="foreignToForeign">100</i>
                <em>个</em>
              </li>
            </ul>
          </div>
        </div>
        <div class="radiusbottom"></div>
      </div>
      <div class="con">
        <div class="radiustop"></div>
        <div class="car-center2">
          <div class="code">
            <div class="code-left">
              <img src="${bluesico1}" alt="">
              <span>
                <span id="allCount">300<span>
                <i>个</i>
              </span>
              <em>装卸运输总量</em>
            </div>
            <div class="code-right">
              <div class="section">
                <img src="${bluesico2}" alt="">
                <span>装货量</span>
                <i id="loadingCount">200</i>
                <em>吨</em>
              </div>
              <div class="section">
                <img src="${bluesico3}" alt="">
                <span>卸货量</span>
                <i id="unloadingCount">20</i>
                <em>吨</em>
              </div>
              <div class="section">
                <img src="${bluesico4}" alt="">
                <span>运输量</span>
                <i id="transCount">20</i>
                <em>吨</em>
              </div>
            </div>
          </div>
        </div>
        <div class="radiusbottom"></div>
      </div>
    </div>
    <div class="statistical-right">
      <div class="box1">
        <div class="bg">
          <div class="title">
            <h4>24小时趋势</h4>
          </div>
        </div>
        <div class="chartsBg">
          <div class="check-box">
            <ul>
              <li>
                <input type="radio" id="radio1">
                <div class="checked"></div>
                <label for="radio1">运单量</label>
              </li>
              <li>
                <input type="radio" id="radio2">
                <div></div>
                <label for="radio2">装货量</label>
              </li>
              <li>
                <input type="radio" id="radio3">
                <div></div>
                <label for="radio3">卸货量</label>
              </li>

            </ul>
          </div>
          <div id="main6"></div>
        </div>
      </div>
    </div>

  </div>

</div>
</div>
`;
