'use client'

import { NavLinks } from '@/constants'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Sidebar = () => {
	const [isRouting, setIsRoiuting] = useState(false)
	const [isActive, setIsActive] = useState('Home')
	const [prevPath, setPrevPath] = useState('/')

	const path = usePathname()

	useEffect(() => {
		if (prevPath !== path) {
			setIsRoiuting(true)
		}
	}, [path, prevPath])

	useEffect(() => {
		if (isRouting) {
			setPrevPath(path)
			const timeout = setTimeout(() => {
				setIsRoiuting(false)
			}, 1200)
			return () => clearTimeout(timeout)
		}
	}, [isRouting])
	return (
		<div className='fixed right-8 top-[40%] z-[20] h-[200px] w-[48px] rounded-full bg-gray-500 bg-opacity-50'>
			<AnimatePresence mode='wait'>
				<div className='flex flex-col gap-5 pb-3 justify-center items-center h-full'>
					{NavLinks.map(link => (
						<Link
							key={link.name}
							href={link.link}
							onClick={() => setIsActive(link.name)}
						>
							<link.icon
								className={`w-[28px] h-[28px] ${
									isActive === link.name ? 'text-orange-500' : 'text-white'
								}`}
							/>
						</Link>
					))}
				</div>
			</AnimatePresence>
		</div>
	)
}

export default Sidebar