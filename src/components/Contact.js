// src/components/Contact.js

import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import { TbBrandLinkedin } from 'react-icons/tb';
import styled from 'styled-components';
import formSubmitIcon from '../assets/images/paper-plane-solid.svg';
import { HiOutlineMail } from 'react-icons/hi';

const ContactSection = styled.section`
	.contact {
		.contact-items {
			font-weight: bold;
		}
	}
	form {
		width: 100%;
		/* margin: 0 auto; */
		max-width: 525px;
		.input-container {
			position: relative;
      width: 100%;
		}

		.input-container input,
		.input-container textarea,
		.form button {
			outline: none;
			border: 1px solid #e5e7eb;
			margin: 8px 0;
		}

		.input-container input,
		.input-container textarea {
			background-color: var(--background);
			padding: 1rem;
			padding-right: 3rem;
      font-family: 'Josefin Sans', sans-serif;
			font-size: 0.875rem;
			line-height: 1.25rem;
			width: 300px;
			border-radius: 0.5rem;
			box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
			width: 100%;
			transition: 0.4s ease-in-out all;
			&:focus {
				border-color: var(--green);
				box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
					rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
			}
		}

		.icon-btn {
			justify-content: flex-start;
			&:before {
				content: '';
				background-image: url(${formSubmitIcon});
			}
		}
	}
`;

export default function Contact() {
	// const [name, setName] = React.useState('');
	// const [email, setEmail] = React.useState('');
	// const [message, setMessage] = React.useState('');

	// const encode = (data) => {
  //   return Object.keys(data)
  //       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //       .join("&");
  // }

  //   /* Here’s the juicy bit for posting the form submission */

  //   const handleSubmit = e => {
  //     fetch("/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       body: encode({ "form-name": "contact", ...this.state })
  //     })
  //       .then(() => alert("Success!"))
  //       .catch(error => alert(error));

  //     e.preventDefault();
  //   };

  //   const handleChange = e => this.setState({ [e.target.name]: e.target.value });

	return (
		<ContactSection id='contact' className='contact'>
			<div className='section-header section-4'>
        <HiOutlineMail className='icon' />
				<h2>Contact</h2>
			</div>
			<div className='slanted slanted-4'></div>

			<div className='section-wrapper'>
				<div>
					<article className='contact'>
						<p>
							I am open to new opportunities so please contact me through any of
							the below:
						</p>
						<ul>
							<li>
								<p className='contact-items'>
									<FaRegPaperPlane className='icon-marker green' />
									<a
										className='slide-in'
										href='mailto:christinetrant@gmail.com'>
										christinetrant@gmail.com
									</a>
								</p>
							</li>
							<li>
								<p className='contact-items'>
									<TbBrandLinkedin className='icon-marker green' />
									<a
										href='http://ie.linkedin.com/in/christinetrant'
										target='_blank'
										rel='noreferrer'
										className='slide-in'>
										linkedin.com/in/christinetrant
									</a>
								</p>
							</li>
						</ul>

						{/* <form netlify netlify-honeypot="bot-field" name='contact' onSubmit={handleSubmit}>
							<div className='input-container'>
								<input
									type='text'
									id='name'
									name='name'
									placeholder='Name'
									className=''
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className='input-container'>
								<input
									type='email'
									id='email'
									name='email'
									placeholder='Email'
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className='input-container'>
								<textarea
									id='message'
									name='message'
                  placeholder='Message'
                  style={{width:'100%'}}
									onChange={(e) => setMessage(e.target.value)}
								/>
							</div>

							<div className='btn-holder'>
								<button type='submit' className='btn green-btn icon-btn'>
									Send
								</button>
							</div>
						</form> */}
					</article>
				</div>
			</div>
		</ContactSection>
	);
}
