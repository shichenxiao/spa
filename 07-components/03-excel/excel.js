var echarts = require('echarts');
var myChart = echarts.init(document.getElementById('main'));

myChart.setOption({
  title:{
    text:'Echart'
  },
  tooltip:{},
  xAxis:{
    data:[1,2,3,4,5]
  },
  yAxis:{},
  series:[{
    name:'销量',
    type:'bar',
    data:[5,20,36,10,10,20]
  }]
});
