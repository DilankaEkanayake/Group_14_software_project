import React, { Fragment, useEffect }  from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import ProfileItem from './ProfileItem'
import { getProfiles } from '../../actions/profile'



const Profiles = ({ getProfiles, auth:{ user }, profile: { profiles, loading } })   => {
    useEffect(() =>{
        getProfiles();
        
    }, [getProfiles]);

    return <Fragment>
        { loading ? <Spinner /> : <Fragment>
            <h1 className="large text-primary"> { user && user.profession == "Doctor" ? "Patients": "Doctors" }</h1>
            <p className="lead">
                <i className='fab fa-connectdevelop'></i> Browse and connect with { user && user.profession == "Doctor" ? "Patients": "Doctors" }
            </p>
            <div className="profile">
                {profiles.length > 0 ? (
                    profiles.map(profile => 
                        <ProfileItem key={profile._id} profile={profile} />
                        )
                ) : <h4>No profile found...</h4>}
            </div>
            
            </Fragment>}
    </Fragment>
}

Profiles.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    getProfiles: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getProfiles })(Profiles)
