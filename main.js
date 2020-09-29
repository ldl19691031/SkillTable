Vue.use(VueTables.ClientTable);
function GetGlobalData(){
    return globalData;
}
var globalData = {
    tableData : skillTableData,
    scoreData : {},
    categoryData : 
    {
        categoryCount : {}
    }
}
categories.forEach(element => {
    globalData.scoreData[element] = 0;
    globalData.categoryData.categoryCount[element] = 0;
    for (let index = 0; index < globalData.tableData.length; index++) {
        const item = globalData.tableData[index];
        if(item.category == element)
        {
            globalData.categoryData.categoryCount[element] += 1;
        }
    }
});
var app = new Vue({
  el: "#app",
  data: {
    columns: ['category','name', 'score', 'target', 'comment'],
    data: GetGlobalData(),
    options: {
      headings: {
        name: '名前',
        score: '5段階評価',
        target:'目標',
        comment: '補足'
      },
      editableColumns:['score','target'],
      sortable: ['score', 'target'],
      filterable: ['category'],
      groupBy:'category',
      perPage: 50
    }
  },
  methods:
  {
      updateScore : function(){
        calcTotalScore();
      }
  }
});

function printTableContent(){
    return skillTableData;
}

function calcTotalScore(){
    categories.forEach(element => {
        globalData.scoreData[element] = 0
    });

    categories.forEach((element, categoryIndex) => {
        let categoryScore = 0.0;
        for (let index = 0; index < globalData.tableData.length; index++) {
            const item = globalData.tableData[index];
            if(item.category == element)
            {
                let score = scoreTable[item.score] + globalData.scoreData[element];
                categoryScore += score;
                //globalData.scoreData.$set(categoryIndex, score);
                
            }
        }
        categoryScore /= globalData.categoryData.categoryCount[element];
        categoryScore = categoryScore.toPrecision(2);
        Vue.set(app.data.scoreData, element, categoryScore);
    });
    reflushChart();
}

function reflushChart(){
    var ctx = document.getElementById('myChart');
    let chartData = {
        labels : [],
        datasets: [
            {
                data:[]
            }
        ]
    };
    categories.forEach(element => {
        chartData.labels.push(element);
        chartData.datasets[0].data.push(app.data.scoreData[element]);
    });
    var myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: chartData
        //options: options
    });
}
calcTotalScore();
