import React from 'react';

export default function Menu() {
    return (
        <div>
            <div className="contactsec3-to">
                <div className="container-to">
                    <div className="contact-profile-header-to">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="contact-profile-flex-to">
                        <div className="contact-profile-pics-to"></div>
                            <form action="" className="contact-profile-form-to">
                                <div className="first-form-to">
                                    <div className="field-to">
                                        <label for="Name">First Name</label>
                                        <input type="text" name="" id="" placeholder="First Name"/>
                                    </div>
                                    <div className="field-to">
                                        <label for="lastName">Last Name</label>
                                        <input type="text" name="" id="" placeholder="Last Name"/>
                                    </div>
                                </div>
                                <div className="first-form-to">
                                    <div className="field-to">
                                        <label for="address">Address</label>
                                        <input type="text" name="" id="" placeholder="Physical Address"/>
                                    </div>
                                    <div className="field-to">
                                        <label for="email">Email Address</label>
                                        <input type="email" name="" id="" placeholder="johndoe@example.com"/>
                                    </div>
                                </div>
                                <div className="first-form-message-to">
                                    <div className="field-to">
                                        <label for="Name">Message</label>
                                        <input type="message" name="" id="" placeholder="Leave us a message..."/>
                                    </div>
                                </div>
                                <div className="submit-container-to">
                                    <input type="submit" value="Send Messages" className="form-submit-to"/>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
           
        </div>
        
    )
        
}