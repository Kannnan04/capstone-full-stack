import React from 'react';
import './Report.css';

function Reports() {
  return (

    // <div class="container-fluid custom-container-fluid">
    //   <div class="d-flex justify-content-between">
    //     <div class="dashboard">
    //       <h1>Dashboard</h1>
    //     </div>

    //     <div class="user-name">
    //       <h1>Kannan Siva</h1>
    //     </div>
    //   </div>
    //   <hr />

    //   <div class='container-activites'>

    //     <h1 class='activites'>Activities</h1>

    //     <div class="container-inside">
    //       <div class="col-6 col-md-6">
    //         <img src="https://pub.mdpi-res.com/sensors/sensors-22-00876/article_deploy/html/images/sensors-22-00876-g006-550.jpg?1643019738" class="img-fluid" alt="first" />
    //       </div>
    //       <div class="col-6 col-md-6">
    //         <img src="https://graphaware.com/images/glossary/chart-vs-graph.png" class="img-fluid img-sec" alt="second" />
    //       </div>
    //     </div>


    //     <div class="row">
    //       <div class="col-12 col-md-6 center-img sec-img">
    //         <img src="https://blog.atinternet.com/wp-content/uploads/2016/05/2_graphique_barres.png" class="img-fluid" id='full-img' alt="img-fluid" />
    //       </div>
    //     </div>


    //   </div>

    // </div>

    // chatGPD

    <div class="container-fluid">
      <div class="row header">
        <div class="col">
          <h1>Dashboard</h1>
        </div>
        <div class="col user-info">
          <h1>Kannan Siva</h1>
        </div>
      </div>
      <div class="row main-content">

        <div class="col content">
          <div class="row activities">
            <div class="col activity-card">
              <h2>Codekata</h2>
              <div class="chart">
                <svg width="400" height="140"><g class="axis x" transform="translate(30, 110)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle"><path class="domain" stroke="currentColor" d="M0,6V0H370V6"></path><g class="tick" opacity="1" transform="translate(38.94736842105264,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">TUE</text></g><g class="tick" opacity="1" transform="translate(87.63157894736841,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">WED</text></g><g class="tick" opacity="1" transform="translate(136.31578947368422,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">THU</text></g><g class="tick" opacity="1" transform="translate(185,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">FRI</text></g><g class="tick" opacity="1" transform="translate(233.68421052631578,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">SAT</text></g><g class="tick" opacity="1" transform="translate(282.3684210526316,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">SUN</text></g><g class="tick" opacity="1" transform="translate(331.0526315789474,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">MON</text></g></g><g transform="translate(30, 20)"><g transform="translate(29.21052631578948, 90)"><rect width="19.473684210526315" height="0" fill="#B182FF"></rect><rect width="19.473684210526315" height="0" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g><g transform="translate(77.89473684210526, 84.375)"><rect width="19.473684210526315" height="5.625" fill="#B182FF"></rect><rect width="19.473684210526315" height="5.625" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">10.00</text></g><g transform="translate(126.57894736842105, 0)"><rect width="19.473684210526315" height="90" fill="#B182FF"></rect><rect width="19.473684210526315" height="90" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">160.00</text></g><g transform="translate(175.26315789473685, 56.25)"><rect width="19.473684210526315" height="33.75" fill="#B182FF"></rect><rect width="19.473684210526315" height="33.75" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">60.00</text></g><g transform="translate(223.94736842105263, 67.5)"><rect width="19.473684210526315" height="22.5" fill="#B182FF"></rect><rect width="19.473684210526315" height="22.5" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">40.00</text></g><g transform="translate(272.63157894736844, 90)"><rect width="19.473684210526315" height="0" fill="#B182FF"></rect><rect width="19.473684210526315" height="0" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g><g transform="translate(321.3157894736842, 90)"><rect width="19.473684210526315" height="0" fill="#B182FF"></rect><rect width="19.473684210526315" height="0" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g></g></svg>
              </div>
              <p>Today: 0 <span class="max-scores">Max Scores</span></p>
              <p>Total: 820 <span class="points-earned">Points Earned</span></p>
            </div>
            <div class="col activity-card">
              <h2>Webkata</h2>
              <div class="chart">
                <svg width="400" height="140"><g class="axis x" transform="translate(30, 110)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle"><path class="domain" stroke="currentColor" d="M0,6V0H370V6"></path><g class="tick" opacity="1" transform="translate(38.94736842105264,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">TUE</text></g><g class="tick" opacity="1" transform="translate(87.63157894736841,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">WED</text></g><g class="tick" opacity="1" transform="translate(136.31578947368422,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">THU</text></g><g class="tick" opacity="1" transform="translate(185,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">FRI</text></g><g class="tick" opacity="1" transform="translate(233.68421052631578,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">SAT</text></g><g class="tick" opacity="1" transform="translate(282.3684210526316,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">SUN</text></g><g class="tick" opacity="1" transform="translate(331.0526315789474,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">MON</text></g></g><g transform="translate(30, 20)"><g transform="translate(29.21052631578948, 90)"><rect width="19.473684210526315" height="0" fill="#B182FF"></rect><rect width="19.473684210526315" height="0" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g><g transform="translate(77.89473684210526, 0)"><rect width="19.473684210526315" height="90" fill="#B182FF"></rect><rect width="19.473684210526315" height="90" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">844.00</text></g><g transform="translate(126.57894736842105, 90)"><rect width="19.473684210526315" height="0" fill="#B182FF"></rect><rect width="19.473684210526315" height="0" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g><g transform="translate(175.26315789473685, 90)"><rect width="19.473684210526315" height="0" fill="#B182FF"></rect><rect width="19.473684210526315" height="0" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g><g transform="translate(223.94736842105263, 90)"><rect width="19.473684210526315" height="0" fill="#B182FF"></rect><rect width="19.473684210526315" height="0" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g><g transform="translate(272.63157894736844, 90)"><rect width="19.473684210526315" height="0" fill="#B182FF"></rect><rect width="19.473684210526315" height="0" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g><g transform="translate(321.3157894736842, 90)"><rect width="19.473684210526315" height="0" fill="#B182FF"></rect><rect width="19.473684210526315" height="0" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g></g></svg>
              </div>
              <p>Today: 0 <span class="max-scores">Max Scores</span></p>
              <p>Total: 80 <span class="points-earned">Points Earned</span></p>
            </div>
          </div>
          <div class="row tasks">
            <div class="col task-card">
              <h2>Task</h2>
              <p>Submitted Tasks: 26</p>
              <p>Pending Tasks: 3</p>
              <div class="chart" id='big-chart'>
                <svg width="800" height="300"><g transform="translate(30,20)"><g class="axis x" transform="translate(30, 235)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle"><path class="domain" stroke="currentColor" d="M0,6V0H740V6"></path><g class="tick" opacity="1" transform="translate(0,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">0</text></g><g class="tick" opacity="1" transform="translate(53,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">2</text></g><g class="tick" opacity="1" transform="translate(106,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">4</text></g><g class="tick" opacity="1" transform="translate(159,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">6</text></g><g class="tick" opacity="1" transform="translate(211,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">8</text></g><g class="tick" opacity="1" transform="translate(264,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">10</text></g><g class="tick" opacity="1" transform="translate(317,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">12</text></g><g class="tick" opacity="1" transform="translate(370,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">14</text></g><g class="tick" opacity="1" transform="translate(423,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">16</text></g><g class="tick" opacity="1" transform="translate(476,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">18</text></g><g class="tick" opacity="1" transform="translate(529,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">20</text></g><g class="tick" opacity="1" transform="translate(581,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">22</text></g><g class="tick" opacity="1" transform="translate(634,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">24</text></g><g class="tick" opacity="1" transform="translate(687,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">26</text></g><g class="tick" opacity="1" transform="translate(740,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">28</text></g></g><g class="axis y" transform="translate(30, 20)" fill="none" font-size="10" font-family="sans-serif" text-anchor="end"><path class="domain" stroke="currentColor" d="M-6,215H0V0H-6"></path><g class="tick" opacity="1" transform="translate(0,215)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">9.50</text></g><g class="tick" opacity="1" transform="translate(0,193.4999999999997)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">9.55</text></g><g class="tick" opacity="1" transform="translate(0,172.00000000000014)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">9.60</text></g><g class="tick" opacity="1" transform="translate(0,150.49999999999986)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">9.65</text></g><g class="tick" opacity="1" transform="translate(0,129.0000000000003)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">9.70</text></g><g class="tick" opacity="1" transform="translate(0,107.5)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">9.75</text></g><g class="tick" opacity="1" transform="translate(0,85.99999999999969)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">9.80</text></g><g class="tick" opacity="1" transform="translate(0,64.50000000000016)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">9.85</text></g><g class="tick" opacity="1" transform="translate(0,42.999999999999844)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">9.90</text></g><g class="tick" opacity="1" transform="translate(0,21.500000000000306)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">9.95</text></g><g class="tick" opacity="1" transform="translate(0,0)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">10.00</text></g></g><g class="marks"><path fill="none" stroke="#B182FF" d="M30,20C38.545,489.731,47.089,959.461,56,880C64.911,800.539,74.187,171.885,83,20C91.813,-131.885,100.163,192.999,109,450C117.837,707.001,127.163,896.121,136,880C144.837,863.879,153.187,642.518,162,450C170.813,257.482,180.089,93.807,189,20C197.911,-53.807,206.455,-37.747,215,665C223.545,1367.747,232.089,2757.182,241,2600C249.911,2442.818,259.187,739.018,268,20C276.813,-699.018,285.163,-433.254,294,665C302.837,1763.254,312.163,3693.997,321,3460C329.837,3226.003,338.187,827.267,347,235C355.813,-357.267,365.089,856.936,374,1095C382.911,1333.064,391.455,594.991,400,450C408.545,305.009,417.089,753.101,426,1095C434.911,1436.899,444.187,1672.603,453,1310C461.813,947.397,470.163,-13.515,479,450C487.837,913.515,497.163,2801.456,506,3890C514.837,4978.544,523.187,5267.689,532,4320C540.813,3372.311,550.089,1187.787,559,450C567.911,-287.787,576.455,421.162,585,450C593.545,478.838,602.089,-172.433,611,20C619.911,212.433,629.187,1248.572,638,2170C646.813,3091.428,655.163,3898.145,664,3460C672.837,3021.855,682.163,1338.848,691,450C699.837,-438.848,708.187,-533.536,717,450C725.813,1433.536,735.089,3495.296,744,4320C752.911,5144.704,761.455,4732.352,770,4320"></path></g><g class="marks"><path fill="none" stroke="#FFBEBE" d="M30,20C38.545,20,47.089,20,56,20C64.911,20,74.187,20,83,20C91.813,20,100.163,20,109,20C117.837,20,127.163,20,136,20C144.837,20,153.187,20,162,20C170.813,20,180.089,20,189,20C197.911,20,206.455,20,215,20C223.545,20,232.089,20,241,20C249.911,20,259.187,20,268,20C276.813,20,285.163,20,294,20C302.837,20,312.163,20,321,20C329.837,20,338.187,20,347,20C355.813,20,365.089,20,374,20C382.911,20,391.455,20,400,20C408.545,20,417.089,20,426,20C434.911,20,444.187,20,453,20C461.813,20,470.163,20,479,20C487.837,20,497.163,19.999,506,20C514.837,20.001,523.187,20.005,532,20C540.813,19.995,550.089,19.98,559,20C567.911,20.02,576.455,20.074,585,20C593.545,19.926,602.089,19.724,611,20C619.911,20.276,629.187,21.029,638,20C646.813,18.971,655.163,16.161,664,20C672.837,23.839,682.163,34.328,691,20C699.837,5.672,708.187,-33.473,717,20C725.813,73.473,735.089,219.564,744,235C752.911,250.436,761.455,135.218,770,20"></path></g><g class="marks"><path fill="none" stroke="#FFDCDC" d="M30,450C38.545,450.086,47.089,450.171,56,450C64.911,449.829,74.187,449.4,83,450C91.813,450.6,100.163,452.229,109,450C117.837,447.771,127.163,441.685,136,450C144.837,458.315,153.187,481.032,162,450C170.813,418.968,180.089,334.188,189,450C197.911,565.812,206.455,882.217,215,880C223.545,877.783,232.089,556.946,241,450C249.911,343.054,259.187,450,268,450C276.813,450,285.163,343.054,294,450C302.837,556.946,312.163,877.783,321,880C329.837,882.217,338.187,565.812,347,450C355.813,334.188,365.089,418.968,374,450C382.911,481.032,391.455,458.316,400,450C408.545,441.684,417.089,447.769,426,450C434.911,452.231,444.187,450.609,453,450C461.813,449.391,470.163,449.795,479,450C487.837,450.205,497.163,450.211,506,450C514.837,449.789,523.187,449.361,532,450C540.813,450.639,550.089,452.345,559,450C567.911,447.655,576.455,441.259,585,450C593.545,458.741,602.089,482.618,611,450C619.911,417.382,629.187,328.27,638,450C646.813,571.73,655.163,904.303,664,880C672.837,855.697,682.163,474.517,691,450C699.837,425.483,708.187,757.63,717,880C725.813,1002.37,735.089,914.963,744,880C752.911,845.037,761.455,862.519,770,880"></path></g></g></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Reports;