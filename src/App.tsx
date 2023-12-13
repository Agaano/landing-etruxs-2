import { useState } from 'react'

function App() {
	const [formOpened, setFormOpened] = useState(false)
	function handleClick(e: any) {
		e.preventDefault()
		if (!formOpened) {
			setFormOpened(true)
			return
		}
		alert('Your request has been sent')
		setFormOpened(false)
	}
	return (
		<main>
			<header>
				<div className='logo'>
					<img src='../public/logo.svg' width={35} height={35} />
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
						className={`${formOpened ? 'opened' : ''}`}
					/>
					<button
						onClick={handleClick}
						className={`${formOpened ? 'opened' : ''}`}
					>
						{formOpened ? 'Send' : 'Contact us'}
					</button>
				</form>
			</div>
		</main>
	)
}

export default App
