import React,{ Fragment } from 'react'
import PropTypes from 'prop-types'

const AddedMessages = ({ profile: {
    bio,
    skills,
    messages
} }) => {
    return (
        <div class="profile-about bg-light p-2">
            
          
          <div class="line"></div>
          <h2 class="text-primary">Messages</h2>
          <div class="skills">
          
           {messages.map(msg => 
           
               <div  className="p-1"><h3>patient </h3>
                    
                   <span>
                   <p className="fas fa-check">{msg.message}</p>
                   </span>
                   <i class="far fa-envelope"></i>
               </div>
           )}
          </div>
        </div>
    )
}

AddedMessages.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default AddedMessages
