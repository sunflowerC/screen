/* eslint-disable */
// 实时运单

import echarts from 'echarts';
import $ from 'jquery';
import axios from 'axios';
import './index.less';
import ico1 from './images/ico1.png';
import alarm from './images/alarm.png';
import yellow_ico1 from './images/yellow_ico1.png';
import yellow_ico2 from './images/yellow_ico2.png';
import yellow_ico3 from './images/yellow_ico3.png';
import blue_ico1 from './images/blue_ico1.png';
import blue_ico2 from './images/blue_ico2.png';
import map_china1 from './images/map_china1.png';
import map_china2 from './images/map_china2.png';
import map_china3 from './images/map_china3.png';
import map_china4 from './images/map_china4.png';
import blue_s_ico1 from './images/blue_s_ico1.png';
import blue_s_ico2 from './images/blue_shine_ico2.png';
import blue_s_ico3 from './images/blue_s_ico3.png';
import blue_s_ico4 from './images/blue_s_ico4.png';

export default () => {
  document.getElementById('page3').innerHTML = `
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
            <img src="${yellow_ico1}" alt="">
            <ul>
              <li>报警数量</li>
              <li>
                <i id="warningCount">100</i>起 </li>
            </ul>
          </div>
          <div class="wall-right">
            <div class="abnormal">
              <img src="${yellow_ico2}" alt="">
              <span>装货异常
                <i id="loadingWarningCount">100</i>起 </span>
            </div>
            <div class="abnormal">
              <img src="${yellow_ico3}" alt="">
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
              <img src="${blue_ico1}" alt="">
              <ul>
                <li>本地车辆</li>
                <li>
                  <i id="bendicheliang">100</i>
                  <em>辆</em>
                </li>
              </ul>
            </div>
            <div class="flexbox">
              <img class="distance" src="${blue_ico2}" alt="">
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
              <img src="${map_china2}" alt="">
              <ul>
                <li>本市--本市</li>
                <li>
                  <i id="localToLocal">100</i>
                  <em>个</em>
                </li>
              </ul>
            </div>
            <div class="flexbox">
              <img class="distance" src="${map_china1}" alt="">
              <ul>
                <li>本市--外省市</li>
                <li>
                  <i id="localToForeign">100</i>
                  <em>个</em>
                </li>
              </ul>
            </div>
            <div class="flexbox flexboxTop">
              <img class="distance" src="${map_china3}" alt="">
              <ul>
                <li>外省市--本市</li>
                <li>
                  <i id="foreignToLocal">100</i>
                  <em>个</em>
                </li>
              </ul>
            </div>
            <div class="flexbox flexboxTop">
              <img class="distance" src="${map_china4}" alt="">
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
                <img src="${blue_s_ico1}" alt="">
                <span>
                  <span id="allCount">300<span>
                  <i>个</i>
                </span>
                <em>装卸运输总量</em>
              </div>
              <div class="code-right">
                <div class="section">
                  <img src="${blue_s_ico2}" alt="">
                  <span>装货量</span>
                  <i id="loadingCount">200</i>
                  <em>吨</em>
                </div>
                <div class="section">
                  <img src="${blue_s_ico3}" alt="">
                  <span>卸货量</span>
                  <i id="unloadingCount">20</i>
                  <em>吨</em>
                </div>
                <div class="section">
                  <img src="${blue_s_ico4}" alt="">
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
  $('.check-box').on('click', 'ul li input', function() {
    $(this)
      .siblings('div')
      .addClass('checked')
      .parent()
      .siblings()
      .children('div')
      .removeClass('checked');
  });
  var mycharts = echarts.init(document.querySelector('#main6'));
  var value = [
    450,
    520,
    430,
    390,
    650,
    430,
    600,
    450,
    670,
    600,
    380,
    290,
    560,
    480,
    450,
    520,
    430,
    390,
    650,
    430,
    600,
    450,
    670,
    600,
  ];
  var total = 0;
  for (var i = 0; i < value.length; i++) {
    total += value[i];
  }
  var option = {
    legend: {
      show: false,
      data: [
        {
          name: '周转率',
          //icon: 'image://785851819074359595.png'
        },
      ],
      itemWidth: 20,
      itemHeight: 6,
      right: '5%',

      textStyle: {
        fontSize: 14,
        color: '#28c6f5',
      },
    },
    tooltip: {
      show: 'true',
      trigger: 'item',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'cross',
        label: {
          backgroundColor: '#546C84',
        }, // 默认为直线，可选为：'line' | 'shadow'
      },
      crossStyle: {
        color: '#facd89',
      },
      borderWidth: 1,
      borderColor: '#00b7ee',
      backgroundColor: '#054461',
      formatter: function(params) {
        return params.seriesName + '   <font color="#eba112">' + params.value + '%</font>';
      },
      textStyle: {
        color: '#83d8ff',
      },
    },
    grid: {
      top: '7%',
      bottom: '4%',
      left: '6%',
      right: '6%',
    },

    xAxis: {
      type: 'category',
      name: '小时',
      nameTextStyle: {
        color: '#defafe',
        fontSize: 14,
      },
      data: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
      ],
      boundaryGap: false,
      splitLine: {
        show: true,
        lineStyle: {
          color: '#364361',
        },
      },
      axisTick: {
        show: false,
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          color: '#6d7890',
        },
      },
      axisLabel: {
        //margin: 10,
        textStyle: {
          fontSize: 14,
          color: '#defafe',
        },
      },
    },
    yAxis: {
      name: '单位:个',
      type: 'value',
      nameTextStyle: {
        color: '#defafe',
      },
      splitLine: {
        show: true,

        lineStyle: {
          color: '#364361',
        },
      },

      axisLine: {
        lineStyle: {
          color: '#6d7890',
        },
      },
      axisLabel: {
        margin: 10,
        //formatter: '{value}%',
        textStyle: {
          fontSize: 14,
          color: '#defafe',
        },
      },
    },
    series: [
      {
        type: 'line',
        name: 'API',

        symbol: 'circle',
        symbolSize: 12,

        data: value,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgb(12,91,130)',
                },
                {
                  offset: 1,
                  color: 'rgb(12,91,130,0)',
                },
              ],
              false
            ),
          },
        },
        itemStyle: {
          normal: {
            color: '#29f2ff',
            //opacity:0.6,
            label: {
              show: false,
            },
          },
        },
        lineStyle: {
          normal: {
            color: '#29f2ff',
          },
        },
      },
    ],
  };

  mycharts.setOption(option);

  // 运单状态
  axios
    .get('http://60.210.40.196:25028/zxhsys-dzyd-consumption/tbusiBillJJ/getTBusiBillCount')
    .then(({ data: { data } }) => {
      /*
      运单总数量	bill_count
托运单数量	bill_consignment
承运单数量	bill_carrier
运输中数量	bill_transportation
正在装货数量 	bill_loading
正在装货数量 	   bill_unload
已完成数量 	   bill_complete
      */
      // console.log(data);
      Object.keys(data).forEach(id => {
        $(`#${id}`).html(data[id]);
      });
    })
    .catch(error => {
      console.log('error: 运单状态');
      console.log(error);
    });

  // TODO 接口 404 了
  // 获取报警数量统计
  axios
    .post(
      'http://60.210.40.196:25028/zxhsys-dzyd-consumption/tbusiBillJF/getWarningMessageInfo'
    )
    .then(({ data: { data } }) => {
      // console.log(data);
      Object.keys(data).forEach(id => {
        $(`#${id}`).html(data[id]);
      });
    })
    .catch(error => {
      console.log('error: 获取报警数量统计');
      console.log(error);
    });

  // 车辆属地统计运单
  axios
    .post('http://60.210.40.196:25028/zxhsys-dzyd-consumption/tbusiBillJF/getVehicleAreaCount')
    .then(({ data: { data } }) => {
      $('#bendicheliang').html(data.localCount);
      $('#waishengcheliang').html(data.foreignCount);
    })
    .catch(error => {
      console.log('error: 车辆属地统计运单');
      console.log(error);
    });

  // 运输起始统计运单
  axios
    .get('http://60.210.40.196:25028/zxhsys-dzyd-consumption/tbusiBillJJ/getFlowDirectionCount')
    .then(({ data: { data } }) => {
      Object.keys(data).forEach(id => {
        $(`#${id}`).html(data[id]);
      });
    })
    .catch(error => {
      console.log('error: 车辆属地统计运单');
      console.log(error);
    });

  // 装卸运输总量
  axios
    .get('http://60.210.40.196:25028/zxhsys-dzyd-consumption/tbusiBillJJ/getGoodsWeight')
    .then(({ data: { data } }) => {
      Object.keys(data).forEach(id => {
        $(`#${id}`).html(data[id] || 0);
      });
    })
    .catch(error => {
      console.log('error: 装卸运输总量');
      console.log(error);
    });

  // TODO 24小时趋势
  axios
    .post('http://60.210.40.196:25028/zxhsys-dzyd-consumption/tbusiBillJF/getTrend')
    .then(({ data: { error, data } }) => {
      if (error) throw error;
      console.log(data);
    })
    .catch(error => {
      console.log('error: 24小时趋势');
      console.log(error);
    });
};
