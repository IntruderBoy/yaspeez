import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import axios from 'axios';

export default class BarChart extends Component {
   constructor(props) {
      super(props);

      this.state = {
         Data: {}
      };
   }

   componentDidMount() {

      axios.get(`http://localhost:5000/charts`)
         .then(res => {
            const football = res.data;
            let playername = [];
            let playerscore = [];
            football.forEach(element => {
               playername.push(element.playername);
               playerscore.push(element.playerscore);
            });
            this.setState({
               Data: {
                  labels: playername,
                  datasets: [
                     {
                        label: 'Players By Sports',
                        data: playerscore,
                        backgroundColor: [
                           'rgba(240,134,67,0.6)',
                           'rgba(90,178,255,0.6)',
                           'rgba(155,100,210,0.6)',
                           'rgba(255,105,145,0.6)',
                           'rgba(120,120,120,0.6)',
                           'rgba(250,55,197,0.6)'
                        ]
                     }
                  ]
               }
            });
         })
   }


   render() {
      return (
         <div className="container" style={{ width: 200, height: 200 }}>
            <HorizontalBar
               data={this.state.Data}
               options={{ maintainAspectRatio: false }}
            />
         </div>
      )
   }
}