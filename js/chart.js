;(function () {
  // 左边柱状图
  let myChart = echarts.init(document.querySelector('.bar1 .chart'))
  let options = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: '4%',
      top: '10px',
      right: '4%',
      bottom: '4%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: [
          '旅游行业',
          '教育培训',
          '游戏行业',
          '医疗行业',
          '电商行业',
          '社交行业',
          '金融行业',
        ],
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12',
        },
        axisLine: {
          show: false,
          // 如果想要设置单独的线条样式
          // lineStyle: {
          //    color: "#f00",
          //    width: 1,
          //    type: "solid"
          // }
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12',
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
            // width: 2,
            // type: 'solid',
          },
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          },
        },
      },
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          barBorderRadius: 5,
        },
      },
    ],
  }
  myChart.setOption(options)
  window.addEventListener('resize', () => {
    myChart.resize()
  })
})()
;(function () {
  // 右边柱状图
  const myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
  let myChart = echarts.init(document.querySelector('.bar2 .chart'))
  let options = {
    grid: {
      left: '4%',
      top: '10px',
      right: '4%',
      bottom: '4%',
      containLabel: true,
    },
    xAxis: {
      show: false,
    },
    yAxis: [
      {
        type: 'category',
        data: ['HTML5', 'CSS3', 'javascript', 'VUE', 'NODE'],
        inverse: true,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: '#fff',
        },
      },
      {
        type: 'category',
        data: [702, 350, 610, 793, 664],
        inverse: true,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: '#fff',
        },
      },
    ],
    series: [
      {
        name: '条',
        barCategoryGap: 50,
        barWidth: 10,
        type: 'bar',
        yAxisIndex: 0,
        itemStyle: {
          barBorderRadius: 20,
          color: function (params) {
            return myColor[params.dataIndex]
          },
        },
        label: {
          show: true,
          position: 'inside',
          formatter: '{c}%',
        },
        data: [70, 34, 60, 78, 69],
      },
      {
        name: '框',
        barCategoryGap: 50,
        barWidth: 15,
        type: 'bar',
        yAxisIndex: 1,
        itemStyle: {
          barBorderRadius: 15,
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: 3,
        },
        data: [100, 100, 100, 100, 100],
      },
    ],
  }
  myChart.setOption(options)
  window.addEventListener('resize', () => {
    myChart.resize()
  })
})()
;(function () {
  const yearData = [
    {
      year: '2020', // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      ],
    },
    {
      year: '2021', // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34],
      ],
    },
  ]
  // 左边折线图
  let myChart = echarts.init(document.querySelector('.line1 .chart'))
  let options = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      textStyle: {
        color: '#4c9bfd',
      },
      right: '10%',
    },
    grid: {
      left: '4%',
      top: '20%',
      right: '4%',
      bottom: '4%',
      show: true,
      borderColor: '#012f4a',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: '#4c9bfd',
      },
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#4c9bfd',
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a',
        },
      },
    },
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        data: yearData[0].data[0],
        smooth: true,
      },
      {
        name: '新增游客',
        type: 'line',
        data: yearData[0].data[1],
        smooth: true,
      },
    ],
  }

  myChart.setOption(options)
  window.addEventListener('resize', () => {
    myChart.resize()
  })

  // 年份切换
  $('.line1 h2').on('click', 'a', function () {
    // console.log($(this).index())
    const curIndex = $(this).index()
    options.series[0].data = yearData[curIndex].data[0]
    options.series[1].data = yearData[curIndex].data[1]
    myChart.setOption(options)
  })
})()
;(function () {
  // 右边折线图
  let myChart = echarts.init(document.querySelector('.line2 .chart'))
  let options = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      textStyle: {
        color: 'rgba(255, 255, 255, .5)',
        fontSize: 12,
      },
      top: '0%',
    },
    grid: {
      left: '4%',
      top: '20%',
      right: '4%',
      bottom: '4%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
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
          '25',
          '26',
          '26',
          '28',
          '29',
          '30',
        ],
        axisLabel: {
          textStyle: {
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: 12,
          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.2) ',
          },
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: 12,
          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1) ',
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1) ',
          },
        },
      },
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#0184d5',
          width: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(1, 132, 213, 0.4)', // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: 'rgba(1, 132, 213, 0.1)', // 渐变线的结束颜色
              },
            ],
            false
          ),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
        },
        symbol: 'circle',
        symbolSize: 8,
        showSymbol: false,
        itemStyle: {
          color: '#0184d5',
          borderColor: 'rgba(221, 220, 107, .1)',
          borderWidth: 12,
        },
        data: [
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          20,
          60,
          50,
          40,
        ],
      },
      {
        name: '联盟广告',
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#00d887',
          width: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(0, 216, 135, 0.4)', // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: 'rgba(0, 216, 135, 0.1)', // 渐变线的结束颜色
              },
            ],
            false
          ),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
        },
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        itemStyle: {
          color: '#00d887',
          borderColor: 'rgba(221, 220, 107, .1)',
          borderWidth: 12,
        },
        data: [
          130,
          10,
          20,
          40,
          30,
          40,
          80,
          60,
          20,
          40,
          90,
          40,
          20,
          140,
          30,
          40,
          130,
          20,
          20,
          40,
          80,
          70,
          30,
          40,
          30,
          120,
          20,
          99,
          50,
          20,
        ],
      },
    ],
  }
  myChart.setOption(options)
  window.addEventListener('resize', () => {
    myChart.resize()
  })
})()
;(function () {
  // 左边饼状图
  let myChart = echarts.init(document.querySelector('.pie1 .chart'))
  let options = {}
  myChart.setOption(options)
  window.addEventListener('resize', () => {
    myChart.resize()
  })
})()
;(function () {
  // 右边饼状图
  let myChart = echarts.init(document.querySelector('.pie2 .chart'))
  let options = {}
  myChart.setOption(options)
  window.addEventListener('resize', () => {
    myChart.resize()
  })
})()
