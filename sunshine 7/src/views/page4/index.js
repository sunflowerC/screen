/* eslint-disable */
import echarts from 'echarts';
import $ from 'jquery';
import axios from 'axios';
import './index.less';
import Ranktop from './images/rank_top.png';
import Rankbtm from './images/rank_btm.png';
import tpl from './tpl';

export default () => {
  // $('.check-box').on('click', 'ul li input', function() {
  //   $(this)
  //     .siblings('div')
  //     .addClass('checked')
  //     .parent()
  //     .siblings()
  //     .children('div')
  //     .removeClass('checked');
  // });
  document.getElementById('page4').innerHTML = tpl;
  var mycharts1 = echarts.init(document.querySelector('.main9'));

  const getOption = ({
    values = [],
    loadingValues = [],
    unloadingValues = [],
    max = 2000,
    data = [],
   }
  ) => {
    var positiveValues = loadingValues;
    var negativeValues = [...unloadingValues].map(v => -1 * v);

    var totalValues = [max, max, max, max, max, max, max, max, max, max];
    var negatotalValues = [-1 * max, -1 * max, -1 * max, -1 * max, -1 * max, -1 * max, -1 * max, -1 * max, -1 * max, -1 * max];
    //var negaValues = [-2000, -1000, -1000, -1000, -1000, -1000, -1000,-1000,-1000,-1000];
    var top = 'image://./images/rank_top.png';
    var btm = 'image://./images/rank_btm.png';

    return {
      tooltip: {
        trigger: 'item',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
        //formatter:'{c0}<br/>{c1}'+'Math.ads(-1)'
        formatter: function(params) {
          //return params.seriesName;
          //alert(params.color)
          // console.log(params);
          var res = params.name + ':' + Math.abs(params.value);
          return res;
        },
      },
      legend: {
        show: false,
        // '利润', '每万人医疗机构床位数/个', '居民人均可支配收入/千元'
        data: [],
      },
      grid: {
        left: '8%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'value',
          axisLabel: {
            formatter: function(value, index) {
              return Math.abs(value);
            },
            textStyle: {
              fontSize: 18,
              color: '#ccf2f6',
            },
          },
          splitLine: {
            show: false,

            lineStyle: {
              color: '#24375c',
            },
          },

          axisLine: {
            lineStyle: {
              color: '#78d6ed',
            },
          },
        },
      ],
      yAxis: [
        {
          data,
          type: 'category',
          axisTick: { show: false },
          axisLabel: {
            show: false,
            margin: 10,
            //formatter: '{value}%',
            textStyle: {
              fontSize: 18,
              color: '#ccf2f6',
            },
          },
        },
        {
          data,
          type: 'category',
          axisTick: { show: false },
          axisLabel: {
            show: false,
            margin: 10,
            //formatter: '{value}%',
            textStyle: {
              fontSize: 10,
              color: '#defafe',
            },
          },
        },
      ],
      series: [
        /*{
        name:'利润',
        type:'bar',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data:[200, 170, 240, 244, 200, 220, 210]
      },*/
        {
          name: '',
          type: 'bar',
          barGap: '100%',
          stack: '总量',
          barWidth: 15,
          label: {
            normal: {
              show: true,
              position: 'right',
              color: '#2dfffd',
              fontSize: 24,
              formatter: function(params) {
                return positiveValues[params.dataIndex];
              },
            },
          },
          itemStyle: {
            normal: {
              //"barBorderRadius": 50,
              barBorderRadius: [0, 40, 40, 0],
              show: true,
              //"borderColor": "#333",
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#3e95ee',
                },
                {
                  offset: 1,
                  color: '#7cf7ff',
                },
              ]),
              borderWidth: 0,
            },
          },
          data: positiveValues,
          z: 10,
        },
        {
          name: '',
          type: 'bar',
          barGap: '100%',
          stack: '总量',
          barWidth: 15,
          label: {
            normal: {
              show: true,
              position: 'left',
              color: '#2dfffd',
              fontSize: 24,
              formatter: function(params) {
                return Math.abs(negativeValues[params.dataIndex]);
              },
            },
          },
          itemStyle: {
            normal: {
              //"barBorderRadius": 50,
              barBorderRadius: [40, 0, 0, 40],
              show: true,
              //"borderColor": "#333",
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: '#8f3c5b',
                },
                {
                  offset: 1,
                  color: '#e386bb',
                },
              ]),
              borderWidth: 0,
            },
          },
          data: negativeValues,
          z: 10,
        },
        {
          name: '居民人均可支配收入/千元',
          type: 'bar',
          barGap: '200%',
          stack: 'a',
          barWidth: 21,
          yAxisIndex: 1,
          label: {
            normal: {
              ///show: true
            },
          },
          itemStyle: {
            normal: {
              //"barBorderRadius": 50,
              barBorderRadius: [0, 0, 0, 0],
              show: true,
              borderColor: '#1f4075',
              color: '#1f4075',
              borderWidth: 0,
            },
          },
          data: totalValues,
        },
        {
          name: '每万人医疗机构床位数/个',
          type: 'bar',
          barGap: '200%',
          stack: 'a',
          barWidth: 21,
          yAxisIndex: 1,
          label: {
            normal: {
              //show: true,
              //position: 'left'
            },
          },
          itemStyle: {
            normal: {
              //"barBorderRadius": 50,
              barBorderRadius: [0, 0, 0, 0],
              show: true,
              borderColor: '#1e4270',
              color: '#1e4270',
              borderWidth: 0,
            },
          },
          data: negatotalValues,
        },
        {
          name: '每万人医疗机构床位数/个',
          type: 'bar',
          barGap: '200%',
          stack: 'a',
          barWidth: 21,
          yAxisIndex: 1,
          label: {
            normal: {
              show: true,
              position: 'insideLeft',
              color: '#56c5ff',
              fontSize: 24,
              formatter: function(params) {
                // console.log(params);
                return params.name;
                // return '高青运输有限公司';
              },
            },
          },
          itemStyle: {
            normal: {
              //"barBorderRadius": 50,
              barBorderRadius: [0, 0, 0, 0],
              show: true,
              borderColor: '#152c60',
              color: '#152c60',
              borderWidth: 0,
            },
          },
          data: negatotalValues,
        },
        {
          name: 'glyph',
          type: 'pictorialBar',
          barGap: '-200%',
          symbolPosition: 'end',
          symbolSize: [31, 39],
          symbolOffset: ['-2000%', 0],
          data: [
            {
              value: -1 * max,
              symbol: 'image://' + Rankbtm,
              label: {
                normal: {
                  show: true,
                  position: 'insideLeft',
                  distance: 3,
                  color: '#defafe',
                  fontSize: 21,
                  formatter: function(params) {
                    return '10';
                  },
                },
              },
            },
            {
              value: -1 * max,
              symbol: 'image://' + Rankbtm,
              label: {
                normal: {
                  show: true,
                  position: 'insideLeft',
                  distance: 3,
                  color: '#defafe',
                  fontSize: 21,
                  formatter: function(params) {
                    return '09';
                  },
                },
              },
            },
            {
              value: -1 * max,
              symbol: 'image://' + Rankbtm,
              label: {
                normal: {
                  show: true,
                  position: 'insideLeft',
                  distance: 3,
                  color: '#defafe',
                  fontSize: 21,
                  formatter: function(params) {
                    return '08';
                  },
                },
              },
            },
            {
              value: -1 * max,
              symbol: 'image://' + Rankbtm,
              label: {
                normal: {
                  show: true,
                  position: 'insideLeft',
                  distance: 3,
                  color: '#defafe',
                  fontSize: 21,
                  formatter: function(params) {
                    return '07';
                  },
                },
              },
            },
            {
              value: -1 * max,
              symbol: 'image://' + Rankbtm,
              label: {
                normal: {
                  show: true,
                  position: 'insideLeft',
                  distance: 3,
                  color: '#defafe',
                  fontSize: 21,
                  formatter: function(params) {
                    return '06';
                  },
                },
              },
            },
            {
              value: -1 * max,
              symbol: 'image://' + Rankbtm,
              label: {
                normal: {
                  show: true,
                  position: 'insideLeft',
                  distance: 3,
                  color: '#defafe',
                  fontSize: 21,
                  formatter: function(params) {
                    return '05';
                  },
                },
              },
            },
            {
              value: -1 * max,
              symbol: 'image://' + Rankbtm,
              label: {
                normal: {
                  show: true,
                  position: 'insideLeft',
                  distance: 3,
                  color: '#defafe',
                  fontSize: 21,
                  formatter: function(params) {
                    return '04';
                  },
                },
              },
            },
            {
              value: -1 * max,
              symbol: 'image://' + Rankbtm,
              label: {
                normal: {
                  show: true,
                  position: 'insideLeft',
                  distance: 3,
                  color: '#defafe',
                  fontSize: 21,
                  formatter: function(params) {
                    return '03';
                  },
                },
              },
            },
            {
              value: -1 * max,
              symbol: 'image://' + Rankbtm,
              label: {
                normal: {
                  show: true,
                  position: 'insideLeft',
                  distance: 3,
                  color: '#defafe',
                  fontSize: 21,
                  formatter: function(params) {
                    return '02';
                  },
                },
              },
            },
            {
              value: -1 * max,
              symbol: 'image://' + Ranktop,
              label: {
                normal: {
                  show: true,
                  position: 'insideLeft',
                  distance: 3,
                  color: '#defafe',
                  fontSize: 21,
                  formatter: function(params) {
                    return '01';
                  },
                },
              },
            },
          ],
        },
      ],
    };
  };

  // TODO 历史累计数据统计
  axios
    .post('http://60.210.40.196:25028/zxhsys-dzyd-consumption/tbusiBillJF/getHisBillInfo')
    .then(({ data: { data } }) => {
      console.log(data);
      Object.keys(data).forEach(id => {
        $(`#${id}`).html(data[id] || 0);
      });
    })
    .catch(error => {
      console.log(error);
    });

    // 获取累计装卸量统计
    axios
    .post('http://60.210.40.196:25028/zxhsys-dzyd-consumption/tbusiBillJF/getHisUnloadingCount')
    .then(({ data: { data } }) => {
      console.log(data);
      const { comList, goodsList, loadingCount, unloadingCount } = data;

      const getConfig = (list, type) => {
        const coms = [];
        const values = [];
        list.forEach((item) => {
          coms.push(item[`${type}Name`]);
          values.push(item.loadingWeight);
        });
        const max = Math.max(...values);
        return getOption({
          max: max * 1.1,
          data: coms.reverse(),
          // values: values.reverse(),
          loadingValues: values.reverse(),
          unloadingValues: values.reverse(),
        });
      }

      $('#loadingCount').html(loadingCount);
      $('#unloadingCount').html(unloadingCount);

      const comOption = getConfig(comList, 'com');
      const goodsOption = getConfig(goodsList, 'goods');

      mycharts1.setOption(
        comOption,
      );

      $('#radio6').click((e) => {
        if (e.target.checked) {
          $('#radio6').siblings('div').addClass('checked');
          $('#radio7').siblings('div').removeClass('checked')
        }
        mycharts1.setOption(
          comOption,
        );
      });

      $('#radio7').click((e) => {
        if (e.target.checked) {
          $('#radio6').siblings('div').removeClass('checked');
          $('#radio7').siblings('div').addClass('checked')
        }
        mycharts1.setOption(
          goodsOption,
        );
      });
      // Object.keys(data).forEach(id => {
      //   $(`#${id}`).html(data[id] || 0);
      // });
    })
    .catch(error => {
      console.log('error: 获取累计装卸量统计');
      console.log(error);
    });

};
