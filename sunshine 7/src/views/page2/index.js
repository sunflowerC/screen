/* eslint-disable */
import echarts from 'echarts';
import $ from 'jquery';
import './index.less';
import icontrank from './images/icon_truck.png';
import axios from 'axios';
import _ from 'lodash';

export default () => {
  document.getElementById('page2').innerHTML = `
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

  function char(
    obj,
    total,
    num,
    text
  ) {
    var sectionWidth = $('.' + obj).width();
    // var liWidth = $(".section ul li").width()+parseInt($(".section ul li").css("marginRight"));
    var liWidth = 6;
    var lilength = Math.floor(sectionWidth / liWidth);
    for (var i = 0; i < lilength; i++) {
      $('.' + obj)
        .find('ul')
        .append('<li></li>');
    }
    // var total = num;
    $('.' + obj)
          .siblings('.num')
          .text(num);
    $('.' + obj).siblings('.text').text(text);
    var accounted = Math.floor(
      Math.floor(
        (
          num *
          sectionWidth) /
          total
      ) / liWidth
    );
    for (var i = 0; i < $('.' + obj).find('ul li').length; i++) {
      if (i < accounted) {
        $('.' + obj)
          .find('ul li')
          .eq(i)
          .css('background', '#00e069');
        $('.' + obj)
          .find('ul li')
          .eq(accounted - 1)
          .addClass('point')
          .css('background', '#ebe812');
      }
    }
  }

  var mycharts = echarts.init(document.querySelector('#main'));
  var dangerData = 208;
  var transData = 162;
  var chartsName1 = [];

  var charData1 = [];

  var charDatays = [];

  var option = {
    grid: {
      show: true,
      left: '0',
      right: '0',
      bottom: '6%',
      containLabel: true,
      borderWidth: 0,
      borderColor: '#546C84',
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
      shadowStyle: {
        color: '#193569',
      },
    },
    xAxis: [
      {
        data: chartsName1,
        name: '',
        splitLine: {
          //网格线
          show: true,
          lineStyle: {
            color: '#2e3f5d',
            type: 'solid',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#defafe',
            fontSize: 14,
          },
        },
        axisLine: {
          lineStyle: {
            color: '#defafe',
          },
        },
      },
    ],
    yAxis: {
      name: '单位:家',
      type: 'value',
      nameTextStyle: {
        color: '#defafe',
      },
      axisLabel: {
        textStyle: {
          color: '#defafe',
          fontSize: 14,
        },
        formatter: '{value}',
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        //网格线
        show: true,
        lineStyle: {
          color: '#2e3f5d',
          type: 'solid',
        },
      },

      axisLine: {
        lineStyle: {
          color: '#defafe',
          width: '1',
          type: 'solid',
        },
      },
    },
    series: [
      {
        name: '危化企业',
        type: 'pictorialBar',
        barGap: '-60%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#d1fdff',
              },
              {
                offset: 1,
                color: '#2370f6',
              },
            ]),
          },
        },
        data: charData1,
        z: 10,
      },
      {
        name: '运输企业',
        type: 'pictorialBar',
        //barCategoryGap: '0%',
        barGap: '-60%',

        //symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
          normal: {
            //color: "#5fbeeb",
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#ede7ff',
              },
              {
                offset: 1,
                color: '#5620d1',
              },
            ]),
          },
        },
        //data: [150, 160, 115, 170, 187, 188, 90],
        data: charDatays,
        z: 10,
      },
    ],
  };
  mycharts.setOption(option);

  var mycharts1 = echarts.init(document.querySelector('#main1'));
  var dangerData = 208;
  var driverData = 162;
  var specialData = 162;
  var pushData = 162;
  var otherData = 162;
  var option1 = {
    //backgroundColor: '#ffffff',
    // title: {
    // 	"text": dangerData + '                ' + driverData +'                 '+specialData+'                  '+pushData+'             '+otherData,
    // 	left: '9%',
    // 	top: '10%',
    // 	"textStyle": {
    // 		"fontSize": 24,
    // 		fontWeight: 100,
    // 		"color": "#ffff00"
    // 	}
    // },
    // legend: {
    // 	top: 50,
    // 	left:30,
    // 	itemWidth: 14,
    // 	itemHeight: 7,
    // 	borderRadius: [0,0,0,0],
    // 	textStyle: {
    // 		fontSize: 16,
    // 		color: '#00deff'
    // 	},
    // 	data: ['押运人            家','驾驶员            家','特种作业            家','装卸管理            家','其他            家']
    // },
    grid: {
      left: '0',
      right: '3%',
      // top:75,
      bottom: '6%',
      containLabel: true,
    },

    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    xAxis: {
      type: 'value',
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#defafe',
        },
      },
      axisLabel: {
        textStyle: {
          color: '#defafe',
          fontSize: 14,
        },
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: [
      {
        type: 'category',
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#defafe',
          },
        },
        axisLabel: {
          textStyle: {
            color: '#defafe',
            fontSize: 14,
          },
        },
        data: ['20-30岁', '30-40岁', '40-50岁', '50岁以上'],
      },
      {
        type: 'category',
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        splitArea: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        data: ['20-30岁', '30-40岁', '40-50岁', '50岁以上'],
      },
    ],
    // dataType
    // 0: 装卸管理员 1:特种设备作业人员 2:驾驶员 3:押运员 4:其他人员 5：装卸管理人员
    series: [
      {
        name: '押运人',
        type: 'bar',
        dataType: 3,
        barWidth: 5,
        itemStyle: {
          normal: {
            show: true,
            color: '#facd89',
            barBorderRadius: 50,
            borderWidth: 0,
            borderColor: '#333',
          },
        },
        barGap: '50%',
        barCategoryGap: '50%',
        data: [345, 410, 390, 295],
      },
      {
        name: '驾驶员',
        type: 'bar',
        dataType: 2,
        barWidth: 5,
        itemStyle: {
          normal: {
            show: true,
            color: '#ab8dfe',
            barBorderRadius: 50,
            borderWidth: 0,
            borderColor: '#333',
          },
        },
        barGap: '50%',
        barCategoryGap: '50%',
        data: [300, 360, 290, 320],
      },
      {
        name: '特种作业',
        dataType: 1,
        type: 'bar',
        barWidth: 5,
        itemStyle: {
          normal: {
            show: true,
            color: '#00b7ee',
            barBorderRadius: 50,
            borderWidth: 0,
            borderColor: '#333',
          },
        },
        barGap: '50%',
        barCategoryGap: '50%',
        data: [150, 147, 120, 168],
      },
      {
        name: '装卸管理',
        type: 'bar',
        dataType: 0,
        barWidth: 5,
        itemStyle: {
          normal: {
            show: true,
            color: '#39d29a',
            barBorderRadius: 50,
            borderWidth: 0,
            borderColor: '#333',
          },
        },
        barGap: '50%',
        barCategoryGap: '50%',
        data: [100, 92, 110, 115],
      },
      {
        name: '其他',
        type: 'bar',
        dataType: 4,
        barWidth: 5,
        itemStyle: {
          normal: {
            show: true,
            color: '#c384a8',
            barBorderRadius: 50,
            borderWidth: 0,
            borderColor: '#333',
          },
        },
        barGap: '50%',
        barCategoryGap: '50%',
        data: [90, 73, 70, 69],
      },
    ],
  };

  var myChart2 = echarts.init(document.getElementById('main3'));

  var option2 = {
    //color: ['#5ac7ff'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        // 0:营运; 1:停用; 2:报废; 3:停驶; 4:其它',
        // data: ['普运', '停运', '报废', '停驶', '其它'],
        // 1:中型普通货车  2:保温冷藏车   4:危险品运输车  5:小型普通货车  6:平板车  7:挂车  8:牵引车  9:罐车  10:重型普通货车  11:集装箱车 3:其他车辆',
        data: [],
        axisTick: {
          show: false,
          alignWithLabel: false,
        },
        axisLine: {
          lineStyle: {
            color: '#defafe',
            width: '1',
            type: 'solid',
          },
        },
        axisLabel: {
          interval: 0,
          rotate: 45,
          textStyle: {
            color: '#defafe',
          },
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '单位:辆',
        nameTextStyle: {
          color: '#defafe',
        },
        axisLabel: {
          textStyle: {
            color: '#defafe',
          },
          formatter: '{value}',
        },
        splitLine: {
          //网格线
          show: true,
          lineStyle: {
            color: ['#2e3f5d'],
            type: 'solid',
          },
        },

        axisLine: {
          lineStyle: {
            color: '#defafe',
            width: '1',
            type: 'solid',
          },
        },
      },
    ],
    series: [
      {
        name: '',
        type: 'bar',
        barWidth: '16',
        barCategoryGap: '100%',
        itemStyle: {
          normal: {
            color: '#5ac7ff',
          },
        },
        data: [],
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表。
  // myChart2.setOption(option2);

  var mycharts3 = echarts.init(document.querySelector('#main4'));

  const getOption3 = (
    value1 = 1500,
    value2 = 0,
    value3 = 0,
    value4 = 0,
    value5 = 0,
  ) => {
    var valueTotal = value1 + value2 + value3 + value4 + value5;

    return {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)',
      },

      series: [
        {
          name: '下载量',
          type: 'pie',
          z: 10,
          radius: ['30%', '54%'],
          labelLine: {
            normal: {
              length: 20,
              length2: 50,
              lineStyle: {
                color: '#c0c9d3',
              },
            },
          },
          label: {
            normal: {
              formatter: '{a|{b}}\n{b|{d}%}',
              borderWidth: 0,
              borderRadius: 4,
              // shadowBlur:3,
              // shadowOffsetX: 2,
              // shadowOffsetY: 2,
              // shadowColor: '#999',
              padding: [0, -50],
              rich: {
                a: {
                  color: '#ee9522',
                  fontSize: 14,
                  lineHeight: 20,
                },
                // abg: {
                //     backgroundColor: '#333',
                //     width: '100%',
                //     align: 'right',
                //     height: 22,
                //     borderRadius: [4, 4, 0, 0]
                // },
                hr: {
                  borderColor: '#fff',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0,
                },
                b: {
                  fontSize: 16,
                  lineHeight: 20,
                  color: '#cbeeff',
                },
                // per: {
                //     color: '#333',
                //     padding: [2, 4],
                //     borderRadius: 2
                // }
              },
            },
          },
          data: [
            {
              value: value1,
              name: '普运',
              //selected: true,
              itemStyle: {
                normal: {
                  color: '#805ae0',
                },
              },
            },
            {
              value: value2,
              name: '报废',
              itemStyle: {
                normal: {
                  color: '#08a8fe',
                },
              },
            },
            {
              value: value3,
              name: '停用',
              itemStyle: {
                normal: {
                  color: '#ce636f',
                },
              },
            },
            {
              value: value4,
              name: '停驶',
              itemStyle: {
                normal: {
                  color: '#f59148',
                },
              },
            },
            {
              value: value5,
              name: '其他',
              itemStyle: {
                normal: {
                  color: '#4cd6e0',
                },
              },
            },
          ],
        },

        {
          name: '下载量',
          type: 'pie',
          z: 9,
          radius: ['0%', '35%'],
          hoverAnimation: false,
          label: {
            normal: {
              position: 'center',
              formatter: '\n\n{b}',
              color: '#d3ecf8',
              fontSize: 12,
              borderWidth: 0,
              borderRadius: 4,
              // shadowBlur:3,
              // shadowOffsetX: 2,
              // shadowOffsetY: 2,
              // shadowColor: '#999',
              padding: [0, -50],
              fontSize: 14,
            },
          },
          data: [
            {
              value: value1,
              name: '辆',
              tooltip: {
                show: false,
                trigger: 'item',
                formatter: '{b}: {c} ({d}%)',
              },
              itemStyle: {
                normal: {
                  color: '#0a2e6b',
                },
              },
            },
          ],
        },
        {
          name: '下载量',
          type: 'pie',
          radius: ['55%', '58%'],
          silent: true,
          z: 9,

          labelLine: {
            normal: {
              show: false,
            },
          },
          label: {
            normal: {
              position: 'center',
              formatter: '{c}\n',
              color: '#fffc00',
              fontSize: 28,
              borderWidth: 0,
              borderRadius: 4,
              // shadowBlur:3,
              // shadowOffsetX: 2,
              // shadowOffsetY: 2,
              // shadowColor: '#999',
              padding: [0, -50],
              fontSize: 18,
            },
          },
          itemStyle: {
            normal: {
              color: '#113e7e',
              shadowColor: '#2d4976',
              shadowBlur: 10,
            },
          },
          data: [
            {
              value: valueTotal,
            tooltip: {
              show: false,
              trigger: 'item',
              formatter: '{b}: {c} ({d}%)',
            },
          },
        ],
      },
    ],
  };

  };

  // var value1 = 1500;
  // var value2 = 1200;
  // var value3 = 1000;
  // var value4 = 500;
  // var value5 = 400;

  

  // mycharts3.setOption(option3);

  // 左上 各区县企业分布统计
  axios
    .post('http://60.210.40.196:25028/zxhsys-dzyd-consumption/tbusiBillJF/getCompanyCount')
    .then(({ data: { data } }) => {
      const json = data.dataList;

      for (var i of json) {
        chartsName1.push(i.name);
        charData1.push(i.whCount);
        charDatays.push(i.ysCount);
      }
      option.xAxis[0].data = chartsName1;
      option.series[0].data = charData1;
      option.series[1].data = charDatays;
      mycharts.setOption(option);

      var sumwh = eval(charData1.join('+'));
      var sumys = eval(charDatays.join('+'));
      $('#sumwh').text(sumwh);
      $('#sumys').text(sumys);
    });

  // 右上 从业人员年龄段分析
  axios
    .post('http://60.210.40.196:25028/zxhsys-dzyd-consumption/tbusiBillJF/getEmployeeCount')
    .then(({ data: { data } }) => {
      // 0:装卸管理员 1:特种设备作业人员 2:驾驶员 3:押运员 4:其他人员 5：装卸管理人员
      const [type1, type2, type3, type4, type5, type0] = data.dataList1;
      $('#yayunren').html(type3.count);
      $('#jiashiyuan').html(type2.count);
      $('#tezhongzuoye').html(type1.count);
      $('#zhuangxieguanli').html(type0.count);
      $('#qita').html(type4.count);

      // 渲染图表
      // null 设置为 0
      data.dataList2.map(item => {
        item.count = item.count || 0;
      });

      // 获取不同年龄段的数据
      const getData = type => {
        const temp = [];
        _.filter(data.dataList2, item => item.type === String(type)).forEach(item => {
          temp.push(item.count);
        });
        return temp;
      };

      /*
      0: 20岁以下 1:20-30岁 2:30-40岁 3:40-50岁 4:50岁以上						
      0: 装卸管理员 1:特种设备作业人员 2:驾驶员 3:押运员 4:其他人员 5：装卸管理人员						
      */
      // TODO 装卸管理员 0 还是 5
      _.find(option1.series, item => item.dataType === 0).data = getData(0);

      // 特种设备作业人员
      _.find(option1.series, item => item.dataType === 1).data = getData(1);

      // 驾驶员
      _.find(option1.series, item => item.dataType === 2).data = getData(2);

      // 押运员
      _.find(option1.series, item => item.dataType === 3).data = getData(3);

      // 其它
      _.find(option1.series, item => item.dataType === 4).data = getData(4);

      // 装卸管理人员
      // _
      // .find(option1.series, (item) => item.dataType === 5)
      // .data = getData(5);
      mycharts1.setOption(option1);
    })
    .catch(err => {
      console.log('右上 error');
      console.log(err);
    });

  // 左下 获取装卸区数量统计
  axios
    .get('http://60.210.40.196:25028/zxhsys-dzyd-consumption/tbusiBillJJ/getUnloadingRegionCount')
    .then(({ data: { data } }) => {
      // console.log(response.data.data);
      var datas = data.dataList;

      const renderItem = data => `
      <tr>
        <td class="singlecolor">${data.name}</td>
        <td>${data.loadingRegionCount}</td>
        <td>${data.unloadingRegionCount}</td>
        <td>${data.loadingCWCount}</td>
        <td>${data.unloadingCWCount}</td>
      </tr>
      `;

      const table = `
      <table>
      ${datas.map(data => renderItem(data))}
      </table>
      `;
      $('#zhuangxie-fenxi').html(table);

      // var dataname = [];
      // var loadingCWCount = [];
      // var loadingRegionCount = [];
      // var unloadingCWCount = [];
      // var unloadingRegionCount = [];

      // for (let x of datas) {
      //   dataname.push(x.name);
      //   loadingCWCount.push(x.loadingCWCount);
      //   loadingRegionCount.push(x.loadingRegionCount);
      //   unloadingCWCount.push(x.unloadingCWCount);
      //   unloadingRegionCount.push(x.unloadingRegionCount);
      // }

      // for (let { x, index } of $('.tabself table tr')) {
      //   console.log($($(x).find('td')[0]).text());
      // }
    })
    .catch(err => {
      console.log('error: 左下 获取装卸区数量统计');
      console.log(err);
    });

  axios
  .get('http://60.210.40.196:25028/zxhsys-dzyd-consumption/tbusiBillJJ/getUnloadingRegionByGoods')
  .then(({ data: { data } }) => {
    console.log(data);
    // TODO 充装车位品种分析 等，貌似没接口
    // char('section', 1000, 230);
    // char('section2', 1000, 660);
    // char('section3', 1000, 1000);
    // char('section4', 1000, 990);
    let ids = ['section','section2','section3','section4'];
    // 获取最大数
    let temp = [];
    data.loadingList.forEach(v => {
      temp.push(v.count);
    });
    let maxValue = Number(
      `1${'0'.repeat(`${Math.max(...temp)}`.length)}`
    );
    data.loadingList.forEach((v, i) => {
      if(!ids[i]) return;
      char(ids[i], maxValue, v.count, v.goodsName);
    });

    ids = ['section5','section6','section7','section8'];
    temp = [];
    data.unloadingList.forEach(v => {
      temp.push(v.count);
    });
    maxValue = Number(
      `1${'0'.repeat(`${Math.max(...temp)}`.length)}`
    );
    data.unloadingList.forEach((v, i) => {
      if(!ids[i]) return;
      
      char(ids[i], maxValue, v.count, v.goodsName);
    });
    // char('section5', 1000, 200);
    // char('section6', 1000, 660);
    // char('section7', 1000, 800);
    // char('section8', 1000, 900);
  })
  .catch(error => {
    console.log('左下：货物信息');
    console.log(error);
  });

  

  // 右下 运输范围统计
  // 车辆数据
  axios
    .get(`http://60.210.40.196:25028/zxhsys-dzyd-consumption/tbusiBillJJ/getVehicleCount`)
    .then(({ data: { data } }) => {

      console.log(data);

      const {
        // 营运范围list 饼图数据
        rangeList,
        // 车辆状态list
        // 0:营运; 1:停用; 2:报废; 3:停驶; 4:其它'
        stateList,
        // 柱状图数据 车辆list
        vehicleList,
        // 车辆总数
        // totalCount,
        // 把后端返回的数据改名
        vehicle_tote,
      } = data;

      // 车辆总数
      $('#cheliangzongshu').html(vehicle_tote.vehicles_tote);
      $('#qianyinche').html(vehicle_tote.trailers_tote);
      $('#guache').html(vehicle_tote.tractor_tote);
      $('#qitache').html(vehicle_tote.other_tote);


      const getData = (list = stateList, key = 'vehicleState', value = 0) => {
        return _.find(list, item => item[key] === value) || { vehicleCount: 0 };
      }

      option2.xAxis[0].data = [];
      option2.series[0].data = [];
      vehicleList.forEach(item => {
        option2.xAxis[0].data.push(item.vehicleType);
        option2.series[0].data.push(item.vehicleCount);
      })
      
      // // 1:中型普通货车  2:保温冷藏车   4:危险品运输车  5:小型普通货车  6:平板车  7:挂车  8:牵引车  9:罐车  10:重型普通货车  11:集装箱车 3:其他车辆',
      // [
      //   getData(vehicleList, 'vehicleType', 1).vehicleCount,
      //   getData(vehicleList, 'vehicleType', 2).vehicleCount,
      //   getData(vehicleList, 'vehicleType', 4).vehicleCount,
      //   getData(vehicleList, 'vehicleType', 5).vehicleCount,
      //   getData(vehicleList, 'vehicleType', 6).vehicleCount,
      //   getData(vehicleList, 'vehicleType', 7).vehicleCount,
      //   getData(vehicleList, 'vehicleType', 8).vehicleCount,
      //   getData(vehicleList, 'vehicleType', 9).vehicleCount,
      //   getData(vehicleList, 'vehicleType', 10).vehicleCount,
      //   getData(vehicleList, 'vehicleType', 11).vehicleCount,
      //   getData(vehicleList, 'vehicleType', 3).vehicleCount,
      // ];

      // 数据的序列对不上
      myChart2.setOption(option2);
      mycharts3.setOption(
        getOption3(
          // 0:营运; 1:停用; 2:报废; 3:停驶; 4:其它'
          getData(stateList, 'vehicleState', 0).vehicleCount,
          getData(stateList, 'vehicleState', 1).vehicleCount,
          getData(stateList, 'vehicleState', 2).vehicleCount,
          getData(stateList, 'vehicleState', 3).vehicleCount,
          getData(stateList, 'vehicleState', 4).vehicleCount,
        )
      );
    })
    .catch(error => {
      console.log('error: 右下 运输范围统计');
      console.log(error);
    });
  // http://60.210.40.196:25028/zxhsys-dzyd-consumption/tbusiBillJJ/getVehicleCount
};
