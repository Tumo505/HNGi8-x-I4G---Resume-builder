import React, { Component } from 'react';
import axios from 'axios';
import { message } from 'antd';

class Contact extends Component {

   constructor(props) {
      super(props);

      this.state = {
         name: '',
         email: '',
         subject: '',
         message: '',
         errors: [],
         loading: false
      }
     
   }

   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value,
      })
   }

   handleSubmit = (event) => {
      event.preventDefault();
      this.setState({ loading: true });
      const Mail = {
         name: this.state.name,
         email: this.state.email,
         subject: this.state.subject,
         message: this.state.message
      };
      axios.post('http://localhost:5000/contact', Mail)
      .then((res) => {
         console.log(res);
         message.success("message sent to Tumo Kgosiyame")
         window.location.reload()
      }).catch((err) => {
         console.log(err)
      })
   }

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="submit" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="name" name="name" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="email" name="email" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="subject" name="subject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="message" name="message" onChange={this.handleChange}></textarea>
                  </div>

                  <div>
                     <button onClick={this.handleSubmit} >Submit</button>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {city}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                        <span>
                           <img src="../../public/images/zuri.png" />
                        </span>
                        <span>
                        <img src="../../public/images/hng.png" />
                        </span>
		         </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
