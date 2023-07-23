import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faWarehouse } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faUmbrella } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FaUserNurse } from 'react-icons/fa'
import { faBackward } from '@fortawesome/free-solid-svg-icons'

import './index.scss'

const Body = () => {
    return (
        <div className='body'>
            <div className='container'>
                <div className='header'>
                    <div className='profile__section'>
                        <span className='user-head'><FaUserNurse /></span>
                        <div>
                            <h4>ETHAN WONG</h4>
                            <p className='description'>Male, 60 Years (Senior Citizen)</p>
                        </div>
                        <Link to='/'>
                            <button className='back-btn'><FontAwesomeIcon icon={faBackward} /> &nbsp;Back</button>
                        </Link>

                    </div>
                    <div className='header__right__conatiner'>
                        <h4>
                            Resident
                        </h4>
                        <button className='malysia-btn'>Malaysia</button>
                    </div>
                </div>
                <div className='cards__container'>
                    <div className='card'>
                        <div className='card-1'>
                            <p>Patient ID</p>
                            <i className='user-chat__icon'><FontAwesomeIcon icon={faAddressCard} /></i>

                        </div>
                        <button className='patient-btn'>5323144   </button>
                    </div>

                    <div className='card'>
                        <div className='card-1'>
                            <p>Visit ID</p>
                            <i className='user-chat__icon'><FontAwesomeIcon icon={faCalendarDays} /></i>
                        </div>
                        <button className='patient-btn'>2735678   </button>

                    </div>
                    <div className='card'>
                        <div className='card-1'>
                            <p>Ward ID</p>
                            <i className='user-chat__icon'><FontAwesomeIcon icon={faWarehouse} /></i>
                        </div>
                        <button className='patient-btn'>Ward 2A </button>
                    </div>
                    <div className='card'>
                        <div className='card-1'>
                            <p>Single Bed (F5-102) </p>
                            <i className='user-chat__icon'><FontAwesomeIcon icon={faBed} /></i>
                        </div>
                        <button className='patient-btn'>Single Bed</button>
                    </div>
                    <div className='card'>
                        <div className='card-1'>
                            <p>Payor</p>
                            <i className='user-chat__icon'><FontAwesomeIcon icon={faUmbrella} /></i>
                        </div>
                        <button className='patient-btn'>AIA BHD (INDIVIDUAL)   </button>

                    </div>

                </div>
            </div>
            <div className='admission__container'>
                <div className='admision__title_card'>

                    <div className='elaped_card'>
                        <span className='admision-title'>Admission Journey</span>
                        <span className='time-card'>
                            <h4 className='e-time-title'>Elapsed Time</h4>
                            <button className='time'> 02:45</button>
                        </span>
                    </div>
                    <div className='admision-data'>
                        <div className='first-tick'>
                            <span className='hide'></span>
                            <span className='tick'><FontAwesomeIcon icon={faCheck} /></span>
                            
                            <div>
                                <h4>Admission Request <span>Dec 06 2021 08:36 AM</span></h4>
                                <p><i className='user'><FontAwesomeIcon icon={faUser} /></i> &nbsp; Rath AP</p>
                            </div>
                        </div>
                        <div className='middle-card'>
                            <p className='time-nbr'>00:25</p>
                            <span className='line'></span>
                        </div>
                        <div className='first-tick'>
                            <span></span>
                            <span className='tick'><FontAwesomeIcon icon={faCheck} /></span>
                            <div>
                                <h4>Sent for IGL Approval <span>Dec 06 2021 09:00 AM</span></h4>
                                <p><i className='user'><FontAwesomeIcon icon={faUser} /></i> &nbsp; Jim Chin</p>
                            </div>
                        </div>
                        <div className='middle-card'>
                            <p className='time-nbr'>02:23</p>
                            <span className='line'></span>
                        </div>
                        <div className='first-tick'>
                            <span></span>
                            <span className='tick'><FontAwesomeIcon icon={faCheck} /></span>
                            <div>
                                <h4>Received IGL Approval <span>Dec 06 2021 11:23 AM</span></h4>
                                <p><i className='user'><FontAwesomeIcon icon={faUser} /></i> &nbsp; Jim Chin</p>
                            </div>
                        </div>
                        <div className='middle-card'>
                            <p className='time-nbr'>00:15</p>
                            <span className='line'></span>
                        </div>
                        <div className='first-tick'>
                            <span></span>
                            <span className='tick'><FontAwesomeIcon icon={faCheck} /></span>
                            <div>
                                <h4>requested Bed Confirmation <span>Dec 06 2021 11:38 AM</span></h4>
                                <p><i className='user'><FontAwesomeIcon icon={faUser} /></i> &nbsp;  Jim Chin</p>
                            </div>
                        </div>
                        <div className='middle-card'>
                            <p className='time-nbr'>00:12</p>
                            <span className='line'></span>
                        </div>
                         <div className='first-tick'>
                            <span></span>
                            <span className='tick-empty'><FontAwesomeIcon icon={faBed} /></span>
                            <div>
                                <h4 className='admited-title'>Admitted</h4>
                            </div>
                        </div>
                        <div className='middle-card'>
                            <p className='time-nbrs'>00:10</p> 
                            <span className='line'></span>
                        </div>
                        <div className='first-tick'>
                            <span></span>
                            <span className='tick-empty'><FontAwesomeIcon icon={faBed} /></span>
                            <div>
                                <h4 className='admited-title'>Accepted</h4>
                            </div>
                        </div>
                    
                    </div>

                </div>
                <div>

                </div>
            </div>
           
        </div>
    )
}
export default Body