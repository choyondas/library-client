import React from 'react';

const TestScores = () => {
    return (
        <div className="container" >
            <div className=" add-service">
                <h1 style={{ color: "white" }} className='mt-2 mb-3'>Your Totall Marks</h1>
                <table style={{ color: "#f9004d" }} class="table">
                    <thead>
                        <tr>
                            <th scope="col">Sakur-(1st-Semester)</th>
                            <th scope="col">Subjects</th>
                            <th scope="col">Marks</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>AdvanceMath</td>
                            <td>85</td>
                            <td>pass</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Linear-Al</td>
                            <td>70</td>
                            <td>pass</td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>C-program</td>
                            <td>80</td>
                            <td>Pass</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Digita-Circuit</td>
                            <td>85</td>
                            <td>Pass</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row" >
                <h1 className='mt-5 mb-5' style={{ color: 'white' }}> Your Progess Performace</h1>
                <h4 style={{ color: '#f9004d' }}>1. AdvanceMath</h4>
                <div style={{ height: "27px" }} class="progress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "85%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">85%</div>
                </div>
                <br />
                <h4 style={{ color: '#f9004d' }}>2. Linear-Al</h4>
                <div style={{ height: "27px" }} class="progress">
                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                </div>
                <br />
                <h4 style={{ color: '#f9004d' }}>3. C-Program</h4>
                <div style={{ height: "27px" }} class="progress">
                    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "80%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
                <br />
                <h4 style={{ color: '#f9004d' }}>4. Digital-Circuit</h4>
                <div style={{ height: "27px" }} class="progress">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: "85%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">85%</div>
                </div>
                <br />
            </div>

        </div>
    );
};

export default TestScores;