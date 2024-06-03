import ServiceSlider from '@/components/ServiceSlider'
import Image from 'next/image'
import React from 'react'

const page = () => {
	return (
		<div className='flex flex-col justify-center bg-[#0C011A] h-screen overflow-hidden'>
			<div className='pl-20 md:pl-60 flex flex-col gap-3 pb-60 md:pb-0'>
				<h1 className='text-[50px] text-white font-semibold'>
					My skills <span className='text-red-500'>.</span>
				</h1>
				<p className='max-w-[350px] text-[16px] text-gray-200 md:text-gray-400'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro at
					dignissimos quae est ad harum adipisci molestiae accusantium sapiente
					dolore odit, tempora reprehenderit nisi ut explicabo deleniti nam,
					itaque magni?
				</p>
			</div>
			<div className='absolute -left-36 bottom-5 rotate-12 animate-pulse duration-75'>
				<Image
					src={'/assets/bulb.png'}
					alt='bulb'
					width={260}
					height={260}
					className='w-full h-full hidden md:block'
				/>
			</div>
			<ServiceSlider />
		</div>
	)
}

export default page
