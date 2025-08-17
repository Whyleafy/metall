'use client'

import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import styles from './GallerySection.module.scss'
import { images } from "@/components/GallerySection/constats"
import Modal from "@/components/Modal/Modal"
import Title from "@/components/Title/Title";

interface Props {}

export const GallerySection: React.FC<Props> = () => {
  const [isActive, setIsActive] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    loop: true
  })

  return (
      <section className={styles.section}>
        <Title tag='h2' color='black' className={styles.title}>Галерея нашего пункта приема</Title>
        <p className={styles.p}>Здесь вы можете увидеть как выглядит пункт приема</p>
        <div className={styles.wrapper}>
          <div ref={sliderRef} className="keen-slider">
            {images.map((image, idx) => (
                <div className="keen-slider__slide" key={idx}>
                  <img
                      src={image.imageUrl}
                      alt=""
                      className={styles.slideImage}
                      onClick={() => {
                        setSelectedImage(image.imageUrl)
                        setIsActive(true)
                      }}
                  />
                </div>
            ))}
          </div>

          <div className={styles.dots}>
            {images.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => instanceRef.current?.moveToIdx(idx)}
                    className={`${styles.dot} ${currentSlide === idx ? styles.active : ''}`}
                />
            ))}
          </div>
        </div>

        <Modal isActive={isActive} setActive={setIsActive} contentClassName={styles.modal}>
          {selectedImage && <img className={styles.image} src={selectedImage} />}
        </Modal>
      </section>
  )
}
