'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'
import { ProImages, ProImages2, ServiceData } from '@/constants'
import Image from 'next/image'

const ServiceSlider = () => {
	return (
		<div className='absolute right-20  md:right-30 w-[60%] md:w-[55%]'>
			<Swiper
				breakpoints={{
					340: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
					700: {
						slidesPerView: 3,
						spaceBetween: 15,
					},
				}}
				freeMode={true}
				pagination={{
					clickable: true,
				}}
				modules={[FreeMode, Pagination]}
			>
				{ServiceData.map(service => (
					<SwiperSlide key={service.title}>
						<div className='cursor-pointer flex flex-col gap-6 mb-10 group relative text-white shadow-lg rounded-xl px-6 py-8 h-[300px] w-[250px] overflow-hidden'>
							<div
								className='absolute inset-0 bg-cover bg-center'
								style={{ backgroundImage: `url(${service.backgroundImage})` }}
							/>
							<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50' />
							<div className='relative flex flex-col gap-3'>
								<service.icon className='text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]' />
								<h1 className='text-xl lg:text-2xl'>{service.title}</h1>
								<p className='lg:text-[18px]'>{service.content}</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default ServiceSlider
