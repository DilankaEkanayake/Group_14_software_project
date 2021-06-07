import React, { Fragment, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { addMessage } from '../../actions/profile'


const ProfileMessages = ({ addMessage, history,  profile: {
    status,
    company,
    location,
    website,
    social,
    user:{ _id, name, avatar }

} }) => {
    const [formData,setFormData] = useState({
        message:'',
        _id: ''
    });
    
    const [displaySocialInputs, toggleSocialInputs] = useState(false);
    
    const { 
        message
    } = formData;
    
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = e => { e.preventDefault();
        formData._id =_id
        addMessage(formData, history);
    }
    return (
        <Fragment>
            <form className="form" onSubmit={e => onSubmit(e)}>
             <div className="form-group">
          <textarea placeholder="Enter text" name="message" value={message} onChange={e => onChange(e)}></textarea>
       
        </div>
        <input type="submit" className="btn btn-primary my-1" value="send" />
         
        </form>
             </Fragment>
             )

}

ProfileMessages.propTypes = {
    addMessage: PropTypes.func.isRequired,
};



export default connect(null, { addMessage })(withRouter(ProfileMessages))




// const ProfileMessages = ({message 
// }) => {
//     return (
//         <div className="form-group">
//           <textarea placeholder="A short bio of yourself" name="message" value={message} onChange={e => onChange(e)}></textarea>
//           <small className="form-text">Tell us a little about yourself</small>
//         </div>
//     )
// }

// ProfileMessages.propTypes = {
//     experience:PropTypes.array.isRequired,
// }

// export default ProfileMessages
