import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
	const [formOpened, setFormOpened] = useState(false)
	const [isSended, setIsSended] = useState(false)
	const [mail, setMail] = useState('')
	const error = (content: string) =>
		toast.error(content, {
			position: 'bottom-left',
			theme: 'dark',
		})
	const success = (content: string) =>
		toast.success(content, {
			position: 'bottom-left',
			theme: 'dark',
		})

	function randNext(min: number, max: number) {
		return Math.random() * (max - min) + min
	}

	function handleClick(e: any) {
		e.preventDefault()
		if (isSended) {
			return
		}
		if (!formOpened) {
			setFormOpened(true)
			return
		}
		const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
		if (!reg.test(mail)) {
			error('Invalid mail!')
			return
		}
		toast.promise(
			new Promise(resolve => {
				setTimeout(resolve, randNext(2000, 4000))
			}),
			{
				pending: 'Sending...',
				error: 'Something went wrong...',
				success: 'Request sended :)',
			},
			{ position: 'bottom-left', theme: 'dark' }
		)
		setIsSended(true)
		setMail('')
		setFormOpened(false)
	}
	return (
		<main>
			<header>
				<div className='logo'>
					<img src='/logo.svg' width={35} height={35} />
					<span>Creative Edge</span>
				</div>
				<span className='mail'>agaanomail@gmail.com</span>
			</header>
			<div className='container '>
				<div className='title'>
					<h1>Capture attention</h1>
					<h2>Inspire Action. Drive Results</h2>
				</div>
				<p>
					From concept to execution, we guide your journey to success with
					tailored advertising solutions
				</p>
				<form>
					<input
						placeholder='Enter your mail'
						value={mail}
						onChange={e => setMail(e.target.value)}
						className={`${formOpened ? 'opened' : ''}`}
					/>
					<button
						onClick={handleClick}
						className={`${formOpened ? 'opened' : ''}`}
					>
						{formOpened ? 'Send' : isSended ? 'Thank you :)' : 'Contact us'}
					</button>
				</form>
			</div>
			<ToastContainer />
		</main>
	)
}

export default App
