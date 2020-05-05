import React from 'react';
import Greetings from './Gretting';
import Inigo from './Inigo';
import  * as father from './FatherMap';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
export default function Welcome(props) { 
function Print10(){
    const mapNum = [];
    for (let index = 10; index > 0; index--) {
        mapNum.push(<li>{index}</li>
        );            
    }
}
    function printObject() {
        const user1 = { name: 'Leon', lastName: 'Melamud', city: 'Ashkelon', id: '777', };
        const userArray = [];
        let dirtyString = "name: " + user1.name +", lastName: "+ user1.lastName +", city: "+ user1.city +", id: "+user1.id; 

     Object.keys(user1).map((value, index) => {
            userArray.push(<span key={index}> {value}: {user1[value]}</span>)
        })
        console.log(userArray);
        return userArray;



    }
    return <div>
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
                        <td>Inigo and Greetings</td>
                        <td><span><Inigo />, <Greetings name='Leon' />  </span></td>
                        <td>bind components</td>
                </tr>
                <tr>
                        <td>2</td>
                        <td>father FatherMap </td>
                        <td><span><ol>{father.namesNotInIndex1()}</ol></span></td>
                        <td>import  * as father from './FatherMap';</td>
                </tr>
                 <tr>
                        <td>3</td>
                        <td>FatherMap</td>
                        <td><h4>myChildern : {father.myChildren().map((child, index) =>
            <span key={index}>{child + index
                + (index < father.myChildren().length-1 ? ", " :"")}</span>
        )}</h4></td>
                        <td>run on MAP father.myChildren().map</td>
                </tr>
                <tr>
                        <td>4</td>
                        <td>local function</td>
                        <td> <div>
                            <ul>{Print10()}</ul>
                        </div></td>
                        <td>run on index in for function</td>
                </tr>
                 <tr>
                        <td>5</td>
                        <td>local function</td>
                        <td> <ul>{printObject()}</ul>  </td>
                        <td>print Object with Map</td>
                </tr>
                <tr>
                        <td>6</td>
                        <td>use props from outside</td>
                        <td> <h2>use props : {props.name}</h2></td>
                        <td></td>
                </tr>
            </MDBTableBody>
        </MDBTable>

          
        
    </div>
    
}