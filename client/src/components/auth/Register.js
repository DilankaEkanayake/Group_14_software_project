import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'



const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        profession:'',
        password:'',
        password2:''
    });

    const { name, email, profession, password, password2 } = formData;
    
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        // console.log(profession);
        // return;
        e.preventDefault();
        if(password !== password2) {
            setAlert('Password do not match', 'danger');
        } else {
            var profession = "";
            var elements = document.getElementsByName('profession');

            for (var i=0, len=elements.length; i<len; ++i) {
                if (elements[i].checked) {
                     profession = elements[i].value;
                }
            }
            register({ name, email, profession, password });
        }    
    };

    if(isAuthenticated){
        return <Redirect to = '/dashboard'/>
    }

    return (
        <Fragment>
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
                <input 
                type="text" 
                placeholder="Name" 
                name="name" 
                value={name}
                onChange={e => onChange(e)} 
               
                />
            </div>
            <div className="form-group">
                <input 
                type="email" 
                placeholder="Email Address" 
                name="email" 
                value={email}
                onChange={e => onChange(e)} 
                
                />
            <small className="form-text"
                >This site uses Gravatar so if you want a profile image, use a
                Gravatar email</small
            >
            </div>
            

            


            <div className="form-group">
            <div>
            <input
             name="profession"
              type="radio"
              value="Doctor"
              
            //   checked={formData.profession === "Male"}
            //   onChange={e => onChange(e)}
            /> Doctor  <i class="fas fa-user-md"></i> 
            </div>
            <input
            
            name="profession"
              type="radio"
              value="Pation"
            //   checked={this.state.selectedOption === "Male"}
            //   onChange={this.onValueChange}
            /> Patient   <i class="fas fa-procedures"></i>
            </div>

            {/* <div className="form-group">
            <input type="radio" name="profession" value={profession} onChange={e => onChange(e)}  /> Doctor
            <input type="radio"  value={profession} onChange={e => onChange(e)}  /> Patient
            </div> */}
            
            <div className="form-group">
                <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={e => onChange(e)}
                
                />
            </div>
            <div className="form-group">
            <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={e => onChange(e)}
                />
            </div>
            <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
            Already have an account? <Link to='/login'>Sign In</Link>
        </p>
        </Fragment>
    );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default connect(
    mapStateToProps, 
    { setAlert, register }
)   (Register);
