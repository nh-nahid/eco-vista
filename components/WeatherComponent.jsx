import React from 'react';
import Card from './Card';
import Image from 'next/image';
import { getWeatherData } from '@/lib/weather-info';

const WeatherComponent = async ({lat, lon}) => {
     const { main, description } = await getWeatherData(lat, lon);
    return (
        <Card>
            <h6 className="feature-name">Current Weather</h6>
                <div className="feature-main">
                  <Image
                    className="max-w-20"
                    src="/icon_rain.png"
                    height={200}
                    width={200}
                    alt="rain icon"
                  />
                  <h3 className="feature-title">{main}</h3>
                  <span className="feature-name">{description}</span>
                </div>
        </Card>
    );
};

export default WeatherComponent;