import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html className='dark'>
			<Head>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<body className='min-h-screen flex flex-col bg-gray-800'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
