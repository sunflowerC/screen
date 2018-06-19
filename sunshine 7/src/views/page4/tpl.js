import bluebico1 from './images/blue_b_ico1.png';
import bluebico2 from './images/blue_b_ico2.png';
import bluebico3 from './images/blue_b_ico3.png';
import bluebico4 from './images/blue_b_ico4.png';


export default`    <div class="content">
<div class="box">
  <div class="titlebox">
    <h3>历史累计数据统计</h3>
  </div>
  <div class="code">
    <ul class="code1">
      <li>
        <img src="${bluebico1}" alt="">
      </li>
      <li>
        <span>运单总数</span>
        <span>
          <i id="billCount">20000</i> 个</span>
      </li>
    </ul>
    <ul class="code2">
      <li>
        <img src="${bluebico2}" alt="">
      </li>
      <li>
        <span>本地车辆</span>
        <span>
          <i id="localCount">20000</i> 个</span>
      </li>
    </ul>
    <ul>
      <li>
        <img src="${bluebico3}" alt="">
      </li>
      <li>
        <span>外地车辆</span>
        <span>
          <i id="foreignCount">20000</i> 个</span>
      </li>
    </ul>
    <ul>
      <li>
        <img src="${bluebico4}" alt="">
      </li>
      <li>
        <span>总运量</span>
        <span>
          <i id="weight">20000</i> 吨</span>
      </li>
    </ul>
  </div>
  <div class="box">
    <div class="box1">
      <div class="chartsBg">
        <ul class="title">
          <li>运输量
            <i id="loadingCount">20000</i>
            <em>吨</em>
          </li>
        </ul>
        <ul class="title title2">
          <li>卸货量
            <i id="unloadingCount">20000</i>
            <em>吨</em>
          </li>
        </ul>
        <div class="check-box">
          <ul>
            <li>
              <input type="radio" id="radio6">
              <div class="checked"></div>
              <label for="radio6">企业</label>
            </li>
            <li>
              <input type="radio" id="radio7">
              <div></div>
              <label for="radio7">货物</label>
            </li>


          </ul>
        </div>
      </div>
      <div class="chartsbox">
        <!-- <div class="ranking">
          <ul>
            <li>01</li>
            <li>02</li>
            <li>03</li>
            <li>04</li>
            <li>05</li>
            <li>06</li>
            <li>07</li>
            <li>08</li>
            <li>09</li>
            <li>10</li>
          </ul>
        </div> -->
        <div class="main9"></div>
      </div>
    </div>
  </div>
</div>
</div>`;
