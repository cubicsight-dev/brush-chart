import React from 'react'
import { brushData } from './data'
import Chart from "react-apexcharts";

const BrushChart = () => {
    /* const chart = {
        series: [{
            data: brushData
        }],
        options: {
            chart: {
              id: 'chart2',
              type: 'line',
              height: 230,
              toolbar: {
                autoSelected: 'pan',
                show: false
              }
            },
            colors: ['#546E7A'],
            stroke: {
              width: 3
            },
            dataLabels: {
              enabled: false
            },
            fill: {
              opacity: 1,
            },
            markers: {
              size: 0
            },
            xaxis: {
              type: 'datetime'
            }
        },
    } */
    const date = brushData.map(item => (item.date)) ?? []
    const revenue = brushData.map(item => (item.revenue)) ?? []
    console.log(date)
    const chart = {
        options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [...date]
            },
            annotations: {
                yaxis: [
                  {
                    y: 969.60,
                    x: '12/31/2022',
                    borderColor: '#00E396',
                    label: {
                      borderColor: '#00E396',
                      style: {
                        color: '#fff',
                        background: '#00E396'
                      },
                      text: 'This is a test'
                    }
                  },
                ],
                xaxis: [
                    {
                      x: '10/10/2022',
                      borderColor: 'red',
                      label: {
                        borderColor: 'red',
                        style: {
                          color: '#fff',
                          background: 'red'
                        },
                        text: 'This is a test 2'
                      }
                    }
                ],
                points: 
                [
                    {
                        x: '11/10/2022',
                        y: 863.00,
                        marker: {
                            size: 8,
                        },
                        label: {
                            borderColor: 'blue',
                            text: 'This is a test 3'
                        }
                    }
                ]
            }
          },
        series: [
            {
              name: "series-1",
              data: [...revenue]
            }
        ],
        
    }
    return (
        <Chart options={chart.options} series={chart.series} height={500}/>
    )
}

export default BrushChart