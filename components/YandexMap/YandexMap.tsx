'use client';

import React, { useEffect, useRef } from 'react';
import styles from './YandexMap.module.scss';

type Point = {
  coords: [number, number];
  address: string;
  schedule: string;
};

type YandexMapProps = {
  points: Point[];
};

export const YandexMap: React.FC<YandexMapProps> = ({ points }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null); 

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || !window.ymaps) return;

      // Очистка контейнера
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
      }

      const map = new window.ymaps.Map(mapRef.current, {
        center: points[0].coords,
        zoom: 13,
        controls: ['zoomControl'],
      });

      points.forEach((point) => {
        const placemark = new window.ymaps.Placemark(
          point.coords,
          {
            balloonContent: `<strong>${point.address}</strong><br/>${point.schedule}`,
          },
          {
            preset: 'islands#redIcon',
          }
        );
        map.geoObjects.add(placemark);
      });

      mapInstance.current = map;
    };

    if (typeof window !== 'undefined') {
      if (window.ymaps) {
        window.ymaps.ready(initMap);
      } else {
        const existingScript = document.querySelector(
          'script[src*="api-maps.yandex.ru"]'
        ) as HTMLScriptElement;

        if (!existingScript) {
          const script = document.createElement('script');
          script.src = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YANDEX_API_KEY}&lang=ru_RU`;
          script.async = true;
          script.onload = () => window.ymaps.ready(initMap);
          document.head.appendChild(script);
        } else {
          const onLoad = () => window.ymaps.ready(initMap);
          existingScript.addEventListener('load', onLoad);

          return () => {
            existingScript.removeEventListener('load', onLoad);
          };
        }
      }
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
      }
    };
  }, [points]);

  return <div className={styles.map} ref={mapRef} />;
};

export default YandexMap;
