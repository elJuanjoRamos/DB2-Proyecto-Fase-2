import React from 'react'
import Chart from 'react-apexcharts'


/*
  

*/


const DashedChart = ({ chartTitle, xAxisTitle, yAxisTitle, names }) => {

  const series = [
    {
      name: "Banco 1",
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      name: "Banco 2",
      data: [2,2,2,2,2,2,2,2,2,2,2,2]
    },
    {
      name: "Banco 3",
      data: [3,3,3,3,3,3,3,3,3,3,3,3]
    },
    {
      name: "Banco 4",
      data: [4,4,4,4,4,4,4,4,4,4,4,4]
    },
  ]

  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [5, 7, 5],
      curve: 'straight',
      dashArray: [0, 8, 5]
    },
    title: {
      text: chartTitle,
      align: 'left'
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
      }
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      title: {
        text: xAxisTitle
      },
      categories: names,
    },
    yaxis: {
      title: {
        text: yAxisTitle
      }
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " (mins)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " per session"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val;
            }
          }
        }
      ]
    },
    grid: {
      borderColor: '#f1f1f1',
    }
  }

  return (
    <Chart options={options} series={series} type="line" height={320} />

  )
}


export default DashedChart
