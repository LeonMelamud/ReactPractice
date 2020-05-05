import React, { useState } from 'react';
import TodayTime from './time/TodayDay';
import Welcome from './welcome/Welcome';
import WelcomeClass from './welcome/WelcomeClass';
import BirthDay from './welcome/BirthDay';
import CountDown from './counters/CountDown';
import Watch from './time/Watch';
import InputViewer from './state/InputViewer';
import MyDivContainer from './welcome/MyDivContainer';
import Counter from './counters/Counter';
import CounterClass from './counters/CounterClass';
import RandomImage from './material-ui/RandomImage';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import WithStorage from './HOC/WithStorage'; 
import CounterHOC from './HOC/CounterHOC';
import MyRouter from "./routers/MyRouter";
import "./index.css";
import  Container  from './Context/Container';
import GetJoke from './serviceUse/GetJoke';
import DadJoke from './serviceUse/DadJoke';



function TableViewer() {
     const user = {
    age: 33,
    name:'Leon'
      }
  const ComposedCompnent = WithStorage(CounterHOC);
    return (
      <div className="table-responsive">
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th>#</th>
              <th>Component Name</th>
              <th>Result</th>
              <th>Comments</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>1</td>
              <td>Welcome</td>
              <td>
                <Welcome name=" Name: Leon" />
              </td>
              <td>
                first practise with few components inside, props=" Name: Leon"
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Watch</td>
              <td>
                <Watch milliseconds={Date.now()} />
              </td>
              <td>Time Enter To Page</td>
            </tr>
            <tr>
              <td>3</td>
              <td>BirthDay</td>
              <td>
                <BirthDay user={user} />
              </td>
              <td>
                {`user = {
                                age: 33,
                                name: 'Leon'
                            }`}{" "}
                , sent object with props{" "}
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>TodayTime</td>
              <td>
                <TodayTime />
              </td>
              <td>currentTime runing with state</td>
            </tr>
            <tr>
              <td>5</td>
              <td>CountDown</td>
              <td>
                <CountDown count={10} />
              </td>
              <td>{`send props: CountDown count={10}`}</td>
            </tr>
            <tr>
              <td>6</td>
              <td>InputViewer</td>
              <td>
                <InputViewer />
              </td>
              <td>useState practice ,changeHandler</td>
            </tr>
            <tr>
              <td>7</td>
              <td>MyDivContainer</td>
              <td>
                <MyDivContainer />
              </td>
              <td>move mouse on the div to see Result</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Counter</td>
              <td>
                <Counter num={10} />
              </td>
              <td>use state with 3 buttons{`Counter num={10}`}</td>
            </tr>
            <tr>
              <td>8</td>
              <td>CounterClass</td>
              <td>
                <CounterClass />
              </td>
              <td>
                use class instade of fucnction for counter, use
                @material-ui/core
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>WelcomeClass</td>
              <td>
                <WelcomeClass name="class" />
              </td>
              <td>se class instade of fucnction for Welcome</td>
            </tr>
            <tr>
              <td>10</td>
              <td>RandomImage</td>
              <td>
                <RandomImage />
              </td>
              <td> React Material UI-- media card Component</td>
            </tr>
            <tr>
              <td>11</td>
              <td>CounterHOC | WithStorage </td>
              <td>
                <ComposedCompnent />
              </td>
              <td>
                use HOC to save data in the browser memory, the data will be
                saved after refresh
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>MyRouter</td>
              <td>
                <MyRouter />
              </td>
              <td>react-router </td>
            </tr>
            <tr>
              <td>13</td>
              <td>Container</td>
              <td>
                <Container />
              </td>
              <td>use Context</td>
            </tr>
            <tr>
              <td>14</td>
              <td>GetJoke</td>
              <td>
                <GetJoke />
              </td>
              <td>use Api Service with fetch to get Chuck Norris jokes</td>
            </tr>
            <tr>
              <td>15</td>
              <td>DadJokes</td>
              <td>
                <DadJoke/>
              </td>
              <td>use generic Service  with Ron API</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </div>
    );
}
export default TableViewer;