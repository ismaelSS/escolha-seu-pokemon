import { useGenOne } from '@/contexts/genOne.context';
import React from 'react';
import Chart from 'react-apexcharts';

export default function StatsChart () {
  const {statusBase} = useGenOne().nextPokemon

  const atSum = statusBase.AT + statusBase.ATE;
  const dfSum = statusBase.DF + statusBase.DFE;

  const newStatusBase = {
    TOTAL: statusBase.TOTAL / 7,
    PS: statusBase.PS,
    AT: atSum / 2,
    DF: dfSum / 2,
    VL: statusBase.VL,
  };


  const series = [{
    name: 'Series 1',
    data: Object.values(newStatusBase),
  }];

  const options = {
    xaxis: {
      categories: Object.keys(newStatusBase),
      labels: {
        style: {
          colors: ['#000','#000','#000','#000','#000',],
          fontSize: '12px',
        },
      }
    },
    yaxis: {
      min: 0,
      max: 60,
      labels: {
        style: {
          colors: ['#000','#000','#000'],
          fontSize: '8px',
        },
      },
    },
    legend:{
      show:false,
    },
    colors:[
      '#ff0'
    ],
    markers:{
      size:1
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: false,
    },

  };

  return (
    <div>
      <Chart options={options} series={series} type="radar" height={150} />
    </div>
  );
};
