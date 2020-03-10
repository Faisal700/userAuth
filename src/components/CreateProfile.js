import React, { Component } from 'react'
import './create.css'
import '../App.css'
import fire from '../config/Fire';
export default class CreateProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
          currentStep: 1,
            email:  '',
            password: '',
            fireErrors: '',
            formTitle: 'Register Now',
            loginBtn: true
        }
      }
    
      handleChange = event => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })    
      }
       
      handleSubmit = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
      }
      getAction = action => {
        if(action === 'reg'){
            this.setState({formTitle: 'Register New User', loginBtn: false, fireErrors: ''});
        }else{
            this.setState({formTitle: 'Login', loginBtn: true, fireErrors: ''});
        }
    }
      
      _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2? 3: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
      }
        
      _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
            
          currentStep: currentStep
        })
      }
    
    /*
    * the functions for our button
    */
    
    
    nextButton(){
      let currentStep = this.state.currentStep;
      if(currentStep <3){
        return (
          <div className="container">
          <button
            className="loginBtn1" 
            type="button" onClick={this._next}>
          Next
          </button> 
          </div>       
        )
      }
      return null;
    }
    previousButton() {
      let currentStep = this.state.currentStep;
      if(currentStep !==1){
        return (
          <div className="container">
          <button 
          className="loginBtn2" 
            type="button" onClick={this._prev}>
          Previous
          </button>
          </div>
        )
      }
      return null;
    }
      render() {   
        let errorNotification = this.state.fireErrors ? 
            ( <div className="Error"> {this.state.fireErrors} </div> ) : null;

        let submitBtn = this.state.loginBtn ?  
            (<div className="container"><button className="loginBtn3" style={{flexDirection: "row"}} type="submit" onClick={this.register} value="Register Now">Register Now</button></div>):null

        let login_register = this.state.loginBtn ?
           null : 
            null 
        return (
          <React.Fragment> 
          {errorNotification}
          <form onSubmit={this.handleSubmit}>
          {/* 
            render the form steps and pass required props in
          */}
            <Step1 
              currentStep={this.state.currentStep} 
              value={this.state.email}
              handleChange={this.handleChange}
              email={this.state.email}
            />
            <Step2 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              username={this.state.username}
            />
            <Step3 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              password={this.state.password}
            />
            {this.previousButton()}
            {this.nextButton()}
            {submitBtn}
          </form>
          {login_register}
          </React.Fragment>
        );
      }
    }
    
    function Step1(props) {
      if (props.currentStep !== 1) {
        return null
      } 
      return(
        <div className="mover">
        <div className="form-group navss">
        <h3>Personal Info</h3>
          <table align="center" width="800px" cellPadding={10}> 
          <tr><td>
          <input
            className="form-control"
            id="fname"
            name="fname"
            type="text"
            placeholder="Enter FullName"
            value={props.fname}
            onChange={props.handleChange}
            />
            </td></tr>
            <tr><td>
            <input
            className="form-control"
            id="contact"
            name="contact"
            type="text"
            maxlength="11"
            placeholder="Enter PhoneNo"
            value={props.contact}
            onChange={props.handleChange}
            />
            </td></tr>
            <tr><td>
            <input
            className="form-control"
            id="cnic"
            name="cnic"
            type="text"
            maxlength="15"
            placeholder="Enter CNIC"
            value={props.cnic}
            onChange={props.handleChange}
            />
            </td></tr>
            <tr><td>
             <input
            className="form-control"
            id="email"
            name="email"
            type="email"
            placeholder="Enter Email"
            value={props.email}
            onChange={props.handleChange}
            />
            </td></tr>
            </table>
        </div>
        </div>
      );
    }
    
    function Step2(props) {
      if (props.currentStep !== 2) {
        return null
      } 
      return(
        
        <div>
        <title>Student Registration Form</title>
        <h3>Acdemic History</h3>
        <table align="center" width="800px" cellPadding={10}>
          {/*--- First Name --------------------------------------------------------*/}
          <tbody><tr>
              <td>FIRST NAME</td>
              <td><input type="text" name="First_Name" maxLength={30} />
                (max 30 characters a-z and A-Z)
              </td>
            </tr>
            {/*--- Last Name --------------------------------------------------------*/}
            <tr>
              <td>LAST NAME</td>
              <td><input type="text" name="Last_Name" maxLength={30} />
                (max 30 characters a-z and A-Z)
              </td>
            </tr>
            {/*--- Date Of Birth ------------------------------------------------------*/}
            <tr>
              <td>DATE OF BIRTH</td>
              <td>
                <select name="Birthday_day" id="Birthday_Day">
                  <option value={-1}>Day:</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                  <option value={13}>13</option>
                  <option value={14}>14</option>
                  <option value={15}>15</option>
                  <option value={16}>16</option>
                  <option value={17}>17</option>
                  <option value={18}>18</option>
                  <option value={19}>19</option>
                  <option value={20}>20</option>
                  <option value={21}>21</option>
                  <option value={22}>22</option>
                  <option value={23}>23</option>
                  <option value={24}>24</option>
                  <option value={25}>25</option>
                  <option value={26}>26</option>
                  <option value={27}>27</option>
                  <option value={28}>28</option>
                  <option value={29}>29</option>
                  <option value={30}>30</option>
                  <option value={31}>31</option>
                </select>
                <select id="Birthday_Month" name="Birthday_Month">
                  <option value={-1}>Month:</option>
                  <option value="January">Jan</option>
                  <option value="February">Feb</option>
                  <option value="March">Mar</option>
                  <option value="April">Apr</option>
                  <option value="May">May</option>
                  <option value="June">Jun</option>
                  <option value="July">Jul</option>
                  <option value="August">Aug</option>
                  <option value="September">Sep</option>
                  <option value="October">Oct</option>
                  <option value="November">Nov</option>
                  <option value="December">Dec</option>
                </select>
                <select name="Birthday_Year" id="Birthday_Year">
                  <option value={-1}>Year:</option>
                  <option value={2012}>2012</option>
                  <option value={2011}>2011</option>
                  <option value={2010}>2010</option>
                  <option value={2009}>2009</option>
                  <option value={2008}>2008</option>
                  <option value={2007}>2007</option>
                  <option value={2006}>2006</option>
                  <option value={2005}>2005</option>
                  <option value={2004}>2004</option>
                  <option value={2003}>2003</option>
                  <option value={2002}>2002</option>
                  <option value={2001}>2001</option>
                  <option value={2000}>2000</option>
                  <option value={1999}>1999</option>
                  <option value={1998}>1998</option>
                  <option value={1997}>1997</option>
                  <option value={1996}>1996</option>
                  <option value={1995}>1995</option>
                  <option value={1994}>1994</option>
                  <option value={1993}>1993</option>
                  <option value={1992}>1992</option>
                  <option value={1991}>1991</option>
                  <option value={1990}>1990</option>
                  <option value={1989}>1989</option>
                  <option value={1988}>1988</option>
                  <option value={1987}>1987</option>
                  <option value={1986}>1986</option>
                  <option value={1985}>1985</option>
                  <option value={1984}>1984</option>
                  <option value={1983}>1983</option>
                  <option value={1982}>1982</option>
                  <option value={1981}>1981</option>
                  <option value={1980}>1980</option>
                </select>
              </td>
            </tr>
            {/*--- Email Id --------------------------------------------------------*/}
            <tr>
              <td>EMAIL ID</td>
              <td><input type="text" name="Email_Id" maxLength={100} /></td>
            </tr>
            {/*--- Mobile Number --------------------------------------------------------*/}
            <tr>
              <td>MOBILE NUMBER</td>
              <td>
                <input type="text" name="Mobile_Number" maxLength={11} />
                (11 digit number)
              </td>
            </tr>
            {/*--- Gender ---------------------------------------------------------*/}
            <tr>
              <td>GENDER</td>
              <td>
                Male <input type="radio" name="Gender" defaultValue="Male" />
                Female <input type="radio" name="Gender" defaultValue="Female" />
              </td>
            </tr>
            {/*--- Address --------------------------------------------------------*/}
            <tr>
              <td>ADDRESS <br /><br /><br /></td>
              <td><textarea name="Address" rows={4} cols={30} defaultValue={""} /></td>
            </tr>
            {/*--- City --------------------------------------------------------*/}
            <tr>
              <td>CITY</td>
              <td><input type="text" name="City" maxLength={30} />
                (max 30 characters a-z and A-Z)
              </td>
            </tr>
            {/*--- Pin Code --------------------------------------------------------*/}
            <tr>
              <td>PIN CODE</td>
              <td><input type="text" name="Pin_Code" maxLength={6} />
                (6 digit number)
              </td>
            </tr>
            {/*--- State --------------------------------------------------------*/}
            <tr>
              <td>STATE</td>
              <td><input type="text" name="State" maxLength={30} />
                (max 30 characters a-z and A-Z)
              </td>
            </tr>
            {/*--- Country --------------------------------------------------------*/}
            <tr>
              <td>COUNTRY</td>
              <td><input type="text" name="Country" Value="Pakistan" readOnly="readonly" /></td>
            </tr>
            {/*--- Hobbies --------------------------------------------------------*/}
            <tr>
              <td>HOBBIES <br /><br /><br /></td>
              <td>
                Drawing
                <input type="checkbox" name="Hobby_Drawing" defaultValue="Drawing" />
                Singing
                <input type="checkbox" name="Hobby_Singing" defaultValue="Singing" />
                Dancing
                <input type="checkbox" name="Hobby_Dancing" defaultValue="Dancing" />
                Sketching
                <input type="checkbox" name="Hobby_Cooking" defaultValue="Cooking" />
                <br />
                Others
                <input type="checkbox" name="Hobby_Other" defaultValue="Other" />
                <input type="text" name="Other_Hobby" maxLength={30} />
              </td>
            </tr>
            {/*--- Qualification--------------------------------------------------------*/}
            <tr>
              <td>QUALIFICATION <br /><br /><br /><br /><br /><br /><br /></td>
              <td>
                <table>
                  <tbody><tr>
                      <td align="center"><b>Sl.No.</b></td>
                      <td align="center"><b>Examination</b></td>
                      <td align="center"><b>Board</b></td>
                      <td align="center"><b>Percentage</b></td>
                      <td align="center"><b>Year of Passing</b></td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Class X</td>
                      <td><input type="text" name="ClassX_Board" maxLength={30} /></td>
                      <td><input type="text" name="ClassX_Percentage" maxLength={30} /></td>
                      <td><input type="text" name="ClassX_YrOfPassing" maxLength={30} /></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Class XII</td>
                      <td><input type="text" name="ClassXII_Board" maxLength={30} /></td>
                      <td><input type="text" name="ClassXII_Percentage" maxLength={30} /></td>
                      <td><input type="text" name="ClassXII_YrOfPassing" maxLength={30} /></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Graduation</td>
                      <td><input type="text" name="Graduation_Board" maxLength={30} /></td>
                      <td><input type="text" name="Graduation_Percentage" maxLength={30} /></td>
                      <td><input type="text" name="Graduation_YrOfPassing" maxLength={30} /></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Masters</td>
                      <td><input type="text" name="Masters_Board" maxLength={30} /></td>
                      <td><input type="text" name="Masters_Percentage" maxLength={30} /></td>
                      <td><input type="text" name="Masters_YrOfPassing" maxLength={30} /></td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td align="center">(10 char max)</td>
                      <td align="center">(upto 2 decimal)</td>
                    </tr>
                  </tbody></table>
              </td>
            </tr>
            {/*--- Course --------------------------------------------------------*/}
            <tr>
              <td>COURSES<br />APPLIED FOR</td>
              <td>
                BCA
                <input type="radio" name="Course_BCA" defaultValue="BCA" />
                B.Com
                <input type="radio" name="Course_BCom" defaultValue="B.Com" />
                B.Sc
                <input type="radio" name="Course_BSc" defaultValue="B.Sc" />
                B.A
                <input type="radio" name="Course_BA" defaultValue="B.A" />
              </td>
            </tr>
            {/*--- Submit and Reset -----------------------------------------------*/}
            <tr>
              <td colSpan={2} align="center">
                
              </td>
            </tr>
          </tbody></table>
      </div>
      );
    }
    
    function Step3(props) {
      if (props.currentStep !== 3) {
        return null
      } 
      return(
        <React.Fragment>
        <div className="form-group" >
          <h3>University Prefrences</h3>
          <table align="center" width="800px" cellPadding={10}>
          <tr><td>
          <input
            className="form-control"
            id="university"
            name="university"
            type="university"
            placeholder="Enter university Name"
            value={props.university}
            onChange={props.handleChange}
            />  
            </td></tr> 
            <tr><td> 
          <input
            className="form-control"
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={props.password}
            onChange={props.handleChange}
            /> 
            </td></tr> 
            </table>    
        </div>
        {/* <button className="btn btn-success btn-block">Create Profile</button> */}
        </React.Fragment>
      )
}
