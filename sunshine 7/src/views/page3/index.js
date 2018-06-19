/* eslint-disable */
// 实时运单

import echarts from 'echarts';
import $ from 'jquery';
import axios from 'axios';
import './index.less';
import tpl from './tpl';

export default () => {
  document.getElementById('page3').innerHTML = tpl;
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
