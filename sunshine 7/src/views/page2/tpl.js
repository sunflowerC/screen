import icontrank from './images/icon_truck.png';

export default `
<div class="content">
<div class="box">
  <div class="titlebox">
    <h3>统计分析</h3>
  </div>
  <div class="top">
  <div class="box1">
    <div class="bg">
        <div class="title">
          <h4>各区县企业分布统计</h4>
        </div>
      </div>
      <div class="chartsBg">
        <div class="leng">
          <div class="legend">
            <span class="rect"></span>
            <span class="text">危化企业
              <i id="sumwh">208</i>
              <em> 家</em>
            </span>
            <span class="rect rect2"></span>
            <span class="text">运输企业
              <i id="sumys">162</i>
              <em> 家</em>
            </span>


          </div>
        </div>
        <div id="main">

        </div>
      </div>
    </div>
    <div class="box1">
      <div class="bg">
        <div class="title">
          <h4>从业人员年龄段分析</h4>
        </div>
      </div>
      <div class="chartsBg">
        <div class="leng">
          <div class="legend legend2">
            <span class="rect"></span>

            <span class="text">押运人
              <i id="yayunren">208</i>
              <em> 人</em>
            </span>
            <span class="rect rect3"></span>
            <span class="text">驾驶员
              <i id="jiashiyuan">162</i>
              <em> 人</em>
            </span>
            <span class="rect rect4"></span>
            <span class="text">特种作业
              <i id="tezhongzuoye">162</i>
              <em> 人</em>
            </span>
            <span class="rect rect5"></span>
            <span class="text">装卸管理
              <i id="zhuangxieguanli">162</i>
              <em> 人</em>
            </span>
            <span class="rect rect6"></span>
            <span class="text">其它
              <i id="qita">162</i>
              <em> 人</em>
            </span>
          </div>
        </div>
        <div id="main1">
        </div>
      </div>
    </div>

  </div>
  <div class="top">
    <div class="box1">
      <div class="bg">
        <div class="title">
          <h4>装卸分析</h4>
        </div>
      </div>
      <div class="chartsBg">
        <div class="tableleft">
          <ul class="tabhead">
            <li>区域</li>
            <li>装货区</li>
            <li>卸货区</li>
            <li>装货车位</li>
            <li>卸货车位</li>
          </ul>
          <div class="tabself" id="zhuangxie-fenxi">
            <table>
              <tr>
                <td class="singlecolor">张店区</td>
                <td>10</td>
                <td>22</td>
                <td>32</td>
                <td>48</td>
              </tr>
              <tr>
                <td class="singlecolor"> 临川区 </td>
                <td>2</td>
                <td>6</td>
                <td>34</td>
                <td>54</td>
              </tr>
              <tr>
                <td class="singlecolor">博山区 </td>
                <td>23</td>
                <td>43</td>
                <td>45</td>
                <td>45</td>
              </tr>
              <tr>
                <td class="singlecolor">周村区 </td>
                <td>45</td>
                <td>65</td>
                <td>65</td>
                <td>87</td>
              </tr>
              <tr>
                <td class="singlecolor">临淄区 </td>
                <td>98</td>
                <td>9</td>
                <td>47</td>
                <td>47</td>
              </tr>
              <tr>
                <td class="singlecolor">高新区 </td>
                <td>29</td>
                <td>30</td>
                <td>40</td>
                <td>40</td>
              </tr>
              <tr>
                <td class="singlecolor">经开区 </td>
                <td>30</td>
                <td>40</td>
                <td>50</td>
                <td>60</td>
              </tr>
              <tr>
                <td class="singlecolor">桓台区 </td>
                <td>98</td>
                <td>89</td>
                <td>58</td>
                <td>58</td>
              </tr>
              <tr>
                <td class="singlecolor"> 高青区 </td>
                <td>29</td>
                <td>39</td>
                <td>40</td>
                <td>40</td>
              </tr>
              <tr>
                <td class="singlecolor singlebb"> 沂源区 </td>
                <td class="singlebb">29</td>
                <td class="singlebb">77</td>
                <td class="singlebb">67</td>
                <td class="singlebb">67</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="varieties">
          <div class="tray">充装车位品种分析</div>
          <div class="analysis">
            <div class="rank">01</div>
            <div class="section">
              <ul>
                <!-- <li></li> -->
              </ul>
            </div>
            <span class="num">230</span>
            <i class="text">货物1</i>
          </div>
          <div class="analysis">
            <div class="rank rank2">02</div>
            <div class="section2">
              <ul>
                <!-- <li></li> -->
              </ul>
            </div>
            <span class="num">660</span>
            <i class="text">货物2</i>
          </div>
          <div class="analysis">
            <div class="rank rank2">03</div>
            <div class="section3">
              <ul>
                <!-- <li></li> -->
              </ul>
            </div>
            <span class="num">1000</span>
            <i class="text">货物3</i>
          </div>
          <div class="analysis">
            <div class="rank rank2">04</div>
            <div class="section4">
              <ul>
                <!-- <li></li> -->
              </ul>
            </div>
            <span class="num">990</span>
            <i class="text">货物4</i>
          </div>
          <div class="tray traytop">卸车车位品种分析</div>
          <div class="analysis">
            <div class="rank">01</div>
            <div class="section5">
              <ul>
                <!-- <li></li> -->
              </ul>
            </div>
            <span class="num">200</span>
            <i class="text">货物1</i>
          </div>
          <div class="analysis">
            <div class="rank rank2">02</div>
            <div class="section6">
              <ul>
                <!-- <li></li> -->
              </ul>
            </div>
            <span class="num">660</span>
            <i class="text">货物2</i>
          </div>
          <div class="analysis">
            <div class="rank rank2">03</div>
            <div class="section7">
              <ul>
                <!-- <li></li> -->
              </ul>
            </div>
            <span class="num">800</span>
            <i class="text">货物3</i>
          </div>
          <div class="analysis">
            <div class="rank rank2">04</div>
            <div class="section8">
              <ul>
                <!-- <li></li> -->
              </ul>
            </div>
            <span class="num">900</span>
            <i class="text">货物4</i>
          </div>
        </div>

      </div>
    </div>
    <div class="box1">
      <div class="bg">
        <div class="title">
          <h4>运输范围统计</h4>
        </div>
      </div>
      <div class="chartsBg">
        <div class="information">
          <img class="icon_truck" src="${icontrank}" alt="">
          <ul class="car">
            <li>车辆总数</li>
            <li>
              <i id="cheliangzongshu">0</i>辆</li>
          </ul>
          <div class="line"></div>
          <span class="car-category">牵引车
            <i id="qianyinche">0</i>
            <em>辆</em>
          </span>
          <span class="car-category">挂车
            <i id="guache">0</i>
            <em>辆</em>
          </span>
          <span class="car-category">其它
            <i id="qitache">0</i>
            <em>辆</em>
          </span>
        </div>
        <div class="chartbox">
          <div id="main3">

          </div>
          <div id="main4"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`;
