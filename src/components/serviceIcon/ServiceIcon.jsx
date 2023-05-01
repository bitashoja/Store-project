import React from 'react'
import ServiceBox from '../servicesBox/ServiceBox'
import Box from '../Box/Box'

const serviceIcon = [
  {
    id: 1,
    src: './images/Union.svg',
    title: 'Websites',
    text:
      'We offer professional website design and development services to help you establish a strong online presence.',
  },
  {
    id: 2,
    src: './images/Union(1).svg',
    title: 'Graphic Design',
    text:
      'Our graphic design services provide creative and eye-catching designs that help your brand stand out and make a lasting impression.',
  },
  {
    id: 3,
    src: './images/Union(2).svg',
    title: 'Mobile Apps',
    text:
      'We specialize in custom mobile app development for iOS and Android platforms to provide you with a tailored mobile experience.',
  },
  {
    id: 4,
    src: './images/Union(5).svg',
    title: 'Hosting',
    text:
      '   Our web hosting services provide fast and secure hosting solutions, allowing you to easily upload and manage your website with scalable features.',
  },
  {
    id: 5,
    src: './images/Union(4).svg',
    title: 'Domains',
    text:
      'Registering a domain helps you secure a unique name and identity for your business.',
  },
  {
    id: 6,
    src: './images/Union(3).svg',
    title: 'Digital Marketing',
    text:
      'Our digital marketing services help you grow your business by providing effective online marketing strategies, including SEO, PPC, and social media marketing.',
  },
]

export default function ServiceIcon() {
  return (
    <Box isMiddleColumn>
      <div className="serviceBox">
        {serviceIcon.map((service) => (
          <ServiceBox {...service} key={service.id} />
        ))}
      </div>
    </Box>
  )
}
