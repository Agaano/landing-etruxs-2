import { useState } from 'react'

function App() {
	const [formOpened, setFormOpened] = useState(false)
	const [isSended, setIsSended] = useState(false)
	const [mail, setMail] = useState('')
	function handleClick(e: any) {
		e.preventDefault()
		if (isSended) {
			return
		}
		if (!formOpened) {
			setFormOpened(true)
			return
		}
		alert('Your request has been sent')
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
		</main>
	)
}

export default App
