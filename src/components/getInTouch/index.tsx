import * as S 									from './styles'
import Image 										from '../../assets/imageSendAmsg.png'
import Logo 										from '../../assets/send_a_msg_log.svg'
import { useState, useEffect } 	from 'react'


export const GetInTouch = () => {

	const [sendEmailLib, setSendEmailLib] 	= useState<any>()
	const [statusSending, setStatusSending] = useState<string>('null')
	const [name, setName] 									= useState<string>('null')
	const [email, setEmail] 								= useState<string>('null')
	const [message, setMessage] 						= useState<string>('null')
	const [telephone, setTelephone] 				= useState<string>('null')


	const getEmailObjFromWindowObj = () => {
    for (let key in window) {
      key === 'Email' && setSendEmailLib(window[key])
    }
  }

	const sendEmail = () => {
    setStatusSending('sending')
    sendEmailLib.send({
      'Host': 'smtp-mail.outlook.com',
      'Username': 'uiemi@hotmail.com',
      'Password': 'Abc:123456%',
      'To': 'lincoln@coopers.pro',
      'From': 'uiemi@hotmail.com',
      'Subject': 'MESSAGE FROM COOPERS PAGE',
      'Body': `\nName: ${name}; \nEmail: ${email}; \nTelephone: ${telephone}; \nMessage: ${message};`
    })
    .then(() => {
        setStatusSending('sent')
        setTimeout(() => setStatusSending('finalize-box'), 5000)
      }
    )
    .catch(() => {
        setStatusSending('error')
        setTimeout(() => setStatusSending('finalize-box'), 8000)
      }
    )
  }


  const sendMessageBox = () => {
    if (statusSending === 'sending') 			return 'Sending your message'
    if (statusSending === 'sent') 				return 'Message sent!'
    if (statusSending === 'error') 				return 'Occured a erro'
    if (statusSending === 'finalize-box') return 'Message sent!'
  }

	useEffect(() => getEmailObjFromWindowObj(), [])

	return (
		<S.Card>
			<S.ImgLogo src={Logo} />
			<S.Img src={Image} />

			<S.ContactInputsSection>
				
				<S.InputDiv>
					<label>Your Name*</label>
					<S.NameInput 
						onChange={(event) => setName(event.target.value)} 
						placeholder='type your name here...' 
					/>
				</S.InputDiv>
				
				<S.ContactInfo>
					<S.InputDiv>
						<label>Email*</label>
						<S.NormalInput 
							onChange={(event) => setEmail(event.target.value)} 
							placeholder='example@example.com' 
						/>
					</S.InputDiv>
					
					<S.InputDiv>
						<label>Telephone*</label>
						<S.NormalInput 
							onChange={(event) => setTelephone(event.target.value)} 
							placeholder='( _ ) _ ___-___' 
						/>
					</S.InputDiv>
				</S.ContactInfo>
				
				<S.TextAreaDiv>
					<label>Message*</label>
					<S.TextInput 
						onChange={(event) => setMessage(event.target.value)} 
						placeholder='type your message' 
					/>
				</S.TextAreaDiv>
			
			</S.ContactInputsSection>

			<S.Button onClick={() => sendEmail()} >Send now</S.Button>

			<S.BoxSendingStatus 
				status={statusSending}>
					<span>{sendMessageBox()}</span>
			</S.BoxSendingStatus>

		</S.Card>
	)
}
