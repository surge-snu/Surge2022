import './SignUp.scss';
import React from 'react';
import { PinInput, PinInputField } from '@chakra-ui/pin-input';
import { ChakraProvider, extendTheme, HStack } from '@chakra-ui/react';

export default function SignUp() {  
	const [showOtp, setShowOtp] = React.useState(false);
	const theme = extendTheme({
		colors: {
			brand: "#000"
		}
	});
	
	return (
		<div>
			{showOtp &&
				<div class="Otp">
					<div className="Otp__container">
						<div className="Otp__close">
							<button onClick={() => setShowOtp(false)}>X</button>
						</div>
						<div className="Otp__title">
							<p>Verification Code</p>
						</div>
						<div className="Otp__desc">
							<p>Please type the verification code sent to xyz@gmail.com</p>
						</div>
						<HStack className="Otp__pin">
							<PinInput otp placeholder=''>
								<PinInputField borderColor="black" />
								<PinInputField borderColor="black" />
								<PinInputField borderColor="black" />
								<PinInputField borderColor="black" />
							</PinInput>
						</HStack>
						<div className="Otp__again">
							<div className="Otp__again--text">
								<p>Didn't get the code? &nbsp;</p>
							</div>
							<a>Send Again</a>
						</div>
					</div>
				</div>
			}
			<div className="SignUp">
				<div className="SignUp__name">
					<div className="SignUp__name--label">Name</div>
					<input className="SignUp__name--input" type="text" required />
				</div>
				<div className="SignUp__email">
					<div className="SignUp__email--label">Email ID</div>
					<input className="SignUp__email--input" type="email" required />
				</div>
				<div className="SignUp__password">
					<div className='SignUp__password--first'>
						<div className="SignUp__password--first__label">Password</div>
						<input className="SignUp__password--first__input" type="password" required />
					</div>
					<div className='SignUp__password--confirm'>
						<div className="SignUp__password--confirm__label">Confirm Password</div>
						<input className="SignUp__password--confirm__input" type="password" required />
					</div>
				</div>
				<div className="SignUp__bottom">
					<div className="SignUp__bottom--signedIn">
						<input type="checkbox" id="tandc" name="tandc" value="tandc" />
						<label htmlFor="tandc">I agree to the Terms and Privacy Policy</label>
					</div>
				</div>
				<div className="SignUp__button">
					<button onClick={() => setShowOtp(true)} type="submit">Sign Up</button>
				</div>
				<div className="SignUp__login">
					<div className="SignUp__login--text">Already have an account?</div>
					<a href="#login">LogIn</a>
				</div>
			</div>
		</div>
	);
}