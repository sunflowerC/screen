/* eslint-disable */
export default {
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
    show: false,
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
  series: [
    {
      name: '押运人            家',
      type: 'bar',
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
      name: '驾驶员            家',
      type: 'bar',
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
      name: '特种作业            家',
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
      name: '装卸管理            家',
      type: 'bar',
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
      name: '其他            家',
      type: 'bar',
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
