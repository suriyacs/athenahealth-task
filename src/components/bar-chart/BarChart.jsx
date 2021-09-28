import React, { useState, useEffect } from "react";
import _ from 'lodash';
import { Bar } from 'react-chartjs-2';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const BarChart = (props) => {
    const [state, setState] = useState({});
    useEffect(() => {
        const input = {
            labels: [],
            datasets:[]
        };
        const convertData = (data) => {
            const populationList = [];
            const vaccineList = [];
            const doesList = [];
            if (data && _.keys(data).length) {
                _.keys(data).forEach((key) => {
                    let currentObject = data[key];
                    input.labels.push(currentObject.displayName);
                    populationList.push(currentObject.population);
                    vaccineList.push(currentObject.vaccinated);
                    doesList.push(currentObject.availableDoses);
                });
                input.datasets = [
                    {
                        label: 'Total Population',
                        data: populationList,
                        backgroundColor: 'rgb(255, 99, 132)',
                    },
                    {
                        label: 'Vaccinated',
                        data: vaccineList,
                        backgroundColor: 'rgb(54, 162, 235)',
                    },
                    {
                        label: 'Doses Available',
                        data: doesList,
                        backgroundColor: 'rgb(75, 192, 192)',
                    },
                ]
                setState(input);
            }
            
        }
        convertData(props.data);
    }, [props.data]);
    return (
        <>
            <div className='header'>
            <h3 className='title'>Details per City</h3>
            </div>
            <Bar data={state} options={options} />
        </>
    )
};

export default BarChart;