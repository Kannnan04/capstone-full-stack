import React from 'react';
import './Product.css';

function Products() {
  return (

    <div class="container-fluid">
      <div class="row header">
        <div class="col">
          <h1>Task Submissions</h1>
        </div>
        <div class="col user-info">
          <h1>Kannan Siva</h1>
        </div>
      </div>
      <div class="row main-content">

        <div class="col content">
          <div class="task-submission">
            <h2 class="task-title"><b>Kannan Siva</b> (FSD55WD-T) - JavaScript - Day -1: Introduction to Browser & web</h2>
            <div class="task-meta">
              <span class="submission-date">submitted on 22/12/2023</span>

              <div class="button-container">
                <button class="btn">10</button>
                <button class="btn">Task</button>
              </div>
            </div>
          </div>
          <div class="task-submission">
            <h2 class="task-title"><b>Kannan Siva</b> (FSD55WD-T) - JavaScript - Day -2: Datatypes</h2>
            <div class="task-meta">
              <span class="submission-date">submitted on 23/12/2023</span>
              <div class="button-container">
                <button class="btn">6</button>
                <button class="btn">Task</button>
              </div>
            </div>
          </div>
          <div class="task-submission">
            <h2 class="task-title"><b>Kannan Siva</b> (FSD55WD-T)
              -JavaScript - Day -4: Functions</h2>
            <div class="task-meta">
              <span class="submission-date">submitted on 23/12/2023</span>
              <div class="button-container">
                <button class="btn">7</button>
                <button class="btn">Task</button>
              </div>
            </div>
          </div>
          <div class="task-submission">
            <h2 class="task-title"><b>Kannan Siva</b> -JavaScript - Day -5: ES5 vs ES6</h2>
            <div class="task-meta">
              <span class="submission-date">submitted on 23/12/2023</span>
              <div class="button-container">
                <button class="btn">9</button>
                <button class="btn">Task</button>
              </div>
            </div>
          </div>
          <div class="task-submission">
            <h2 class="task-title"><b>Kannan Siva</b> (FSD55WD-T) -DOM- Day -3: Recap of Topics</h2>
            <div class="task-meta">
              <span class="submission-date">submitted on 23/12/2023</span>
              <div class="button-container">
                <button class="btn">8</button>
                <button class="btn">Task</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

}


export default Products;