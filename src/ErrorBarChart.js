import { Store } from './Context';
import { useState, useEffect, useContext, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const LineChart = () => {
  const { Button1, setButton1, Button2, setButton2, Button3, setButton3, Button4, setButton4, Button5, setButton5 } = useContext(Store)

  const chartRef = useRef(null);

  useEffect(() => {
    // Set theme
    am4core.useTheme(am4themes_animated);
    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.XYChart);
    chart.logo.disabled = true

    // Set data
    const rawData = [
      { group: 'top', xValue: 0, yValue: 0 },
      { group: 'top', xValue: 0.071, yValue: -8.17 },
      { group: 'top', xValue: 0.268, yValue: -8.05 },
      { group: 'top', xValue: 0.5, yValue: -8.74 },
      { group: 'top', xValue: 1, yValue: -8.67 },
      { group: 'top', xValue: 1.5, yValue: -8.45 },
      { group: 'top', xValue: 2, yValue: -8.24 },
      { group: 'top', xValue: 3, yValue: -8.41 },
      { group: 'top', xValue: 4, yValue: -8.24 },
      { group: 'top', xValue: 5, yValue: -7.43 },
      { group: 'top', xValue: 6, yValue: -8.48 },
      { group: 'top', xValue: 7.5, yValue: -8.15 },
      { group: 'top', xValue: 9, yValue: -8.46 },
      { group: 'top', xValue: 10.5, yValue: -8.48 },
      { group: 'top', xValue: 12, yValue: -8.35 },
      { group: 'top', xValue: 13.5, yValue: -7.14 },
      { group: 'top', xValue: 15, yValue: -6.81 },
      { group: 'top', xValue: 16.5, yValue: -7.98 },
      { group: 'top', xValue: 18, yValue: -8.53 },
      { group: 'top', xValue: 19.5, yValue: -8.12 },
      { group: 'top', xValue: 21, yValue: -8.13 },
      { group: 'top', xValue: 22.5, yValue: -7.9 },
      { group: 'top', xValue: 24, yValue: -8.16 },
      { group: 'bim6', xValue: 0, yValue: 0 },
      { group: 'bim6', xValue: 0.071, yValue: -9.88 },
      { group: 'bim6', xValue: 0.268, yValue: -6.33 },
      { group: 'bim6', xValue: 0.5, yValue: -7.5 },
      { group: 'bim6', xValue: 1, yValue: -7.09 },
      { group: 'bim6', xValue: 1.5, yValue: -7.53 },
      { group: 'bim6', xValue: 2, yValue: -7.03 },
      { group: 'bim6', xValue: 3, yValue: -6.53 },
      { group: 'bim6', xValue: 4, yValue: -5.73 },
      { group: 'bim6', xValue: 5, yValue: -5.18 },
      { group: 'bim6', xValue: 6, yValue: -6.81 },
      { group: 'bim6', xValue: 7.5, yValue: -6.04 },
      { group: 'bim6', xValue: 9, yValue: -6.36 },
      { group: 'bim6', xValue: 10.5, yValue: -6.38 },
      { group: 'bim6', xValue: 12, yValue: -5.38 },
      { group: 'bim6', xValue: 13.5, yValue: -5.94 },
      { group: 'bim6', xValue: 15, yValue: -5.78 },
      { group: 'bim6', xValue: 16.5, yValue: -8.5 },
      { group: 'bim6', xValue: 18, yValue: -6.93 },
      { group: 'bim6', xValue: 19.5, yValue: -6.42 },
      { group: 'bim6', xValue: 21, yValue: -6.6 },
      { group: 'bim6', xValue: 22.5, yValue: -6.1 },
      { group: 'bim6', xValue: 24, yValue: -5.7 },
      { group: 'bim10', xValue: 0, yValue: 0 },
      { group: 'bim10', xValue: 0.071, yValue: -9.71 },
      { group: 'bim10', xValue: 0.268, yValue: -8.07 },
      { group: 'bim10', xValue: 0.5, yValue: -7.93 },
      { group: 'bim10', xValue: 1, yValue: -7.18 },
      { group: 'bim10', xValue: 1.5, yValue: -7.14 },
      { group: 'bim10', xValue: 2, yValue: -7.63 },
      { group: 'bim10', xValue: 3, yValue: -6.82 },
      { group: 'bim10', xValue: 4, yValue: -4.58 },
      { group: 'bim10', xValue: 5, yValue: -4.63 },
      { group: 'bim10', xValue: 6, yValue: -5.38 },
      { group: 'bim10', xValue: 7.5, yValue: -4.5 },
      { group: 'bim10', xValue: 9, yValue: -6.55 },
      { group: 'bim10', xValue: 10.5, yValue: -6 },
      { group: 'bim10', xValue: 12, yValue: -6 },
      { group: 'bim10', xValue: 13.5, yValue: -7.67 },
      { group: 'bim10', xValue: 15, yValue: -5.8 },
      { group: 'bim10', xValue: 16.5, yValue: -7.13 },
      { group: 'bim10', xValue: 18, yValue: -7.7 },
      { group: 'bim10', xValue: 19.5, yValue: -8.38 },
      { group: 'bim10', xValue: 21, yValue: -6.9 },
      { group: 'bim10', xValue: 22.5, yValue: -7.88 },
      { group: 'bim10', xValue: 24, yValue: -7.4 },
  { group: 'zero', xValue: 0, yValue: 0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0, yValue: 0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0},
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0},
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0, yValue: 0 },
  { group: 'zero', xValue: 0,  yValue:0},
  { group: 'zero', xValue: 0,  yValue:0 },
  { group: 'zero', xValue: 0, yValue: 0 },
  { group: 'zero', xValue: 0, yValue: 0 }
    ];

    const topData = rawData.filter(item => item.group === 'top');
    const zeroData = rawData.filter(item => item.group === 'zero');
    const bim6Data = rawData.filter(item => item.group === 'bim6');
    const bim10Data = rawData.filter(item => item.group === 'bim10');
  
    const labels = [
      'Week 2', 'Week 6', 'Week 15', 'Week 18', 'Week 22', 'Week 31', 'Week 34', 'Week 38', 'Week 44', 'Week 52',
      'Month 14', 'Month 16', 'Month 18', 'Month 20'
    ];

    // Create x-axis
    const xAxis = chart.xAxes.push(new am4charts.ValueAxis());
    xAxis.min = -.2;
    xAxis.max = 18
    xAxis.renderer.labels.template.fontSize = 14;
    xAxis.renderer.minGridDistance = 25;
    xAxis.renderer.grid.template.opacity = 1;
    xAxis.renderer.labels.template.adapter.add("text", function (text) {
      const index = Number(text);
      if (!isNaN(index) && index >= 0 && index < labels.length) {
        return labels[index];
      }
      return "";
    });


    const yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = -15;
    yAxis.max = .2;
    yAxis.strictMinMax = true;
    yAxis.renderer.labels.template.fontSize = 14;
    yAxis.renderer.minGridDistance = 1;
    yAxis.title.text = 'Percentage of Implants';

    // Create series
    const series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = 'yValue';
    series1.dataFields.valueX = 'xValue';
    series1.data = Button1 ? topData : zeroData
    series1.strokeWidth = 2;
    series1.stroke = am4core.color('black')

    const series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = 'yValue';
    series2.dataFields.valueX = 'xValue';
    series2.data = Button2 ? bim6Data : zeroData
    series2.strokeWidth = 2;
    series2.stroke = am4core.color('green')
    
    const series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = 'yValue';
    series3.dataFields.valueX = 'xValue';
    series3.data = Button3 ? bim10Data : zeroData
    series3.strokeWidth = 2;
    series3.stroke = am4core.color('green')
    

  
   

    // Add bullets to each data point
    let bullet1 = series1.bullets.push(new am4charts.Bullet());
    let circle = bullet1.createChild(am4core.Circle);
    circle.width = 15;
    circle.height = 15;
    circle.horizontalCenter = 'middle';
    circle.verticalCenter = 'middle';
    circle.strokeWidth = 2;
    circle.stroke = am4core.color(`black`);
    circle.fill = am4core.color(`black`);


    let bullet2 = series2.bullets.push(new am4charts.Bullet());
    let square = bullet2.createChild(am4core.Rectangle);
    square.width = 15;
    square.height = 15;
    square.horizontalCenter = 'middle';
    square.verticalCenter = 'middle';
    square.strokeWidth = 2;
    square.stroke = am4core.color('blue');
    square.fill = am4core.color('blue');

    let bullet3 = series3.bullets.push(new am4charts.Bullet());
        let diamond = bullet3.createChild(am4core.Rectangle);
        diamond.width = 12;
        diamond.height = 12;
        diamond.horizontalCenter = 'middle';
        diamond.verticalCenter = 'middle';
        diamond.strokeWidth = 2;
        diamond.stroke = am4core.color('green');
        diamond.fill = am4core.color('green');
        diamond.direction = 'top';
        diamond.rotation = 45
 

    // Set chart instance to the ref
    chartRef.current = chart;

    // Clean up the chart when the

    return () => {
      chart.dispose();
    };
  }, [Button1, setButton1, Button2, setButton2, Button3, setButton3, Button4, setButton4, Button5, setButton5]);

  return <div id="chartdiv" style={{ width: '1500px', height: '500px' }} />;
};

export default LineChart;