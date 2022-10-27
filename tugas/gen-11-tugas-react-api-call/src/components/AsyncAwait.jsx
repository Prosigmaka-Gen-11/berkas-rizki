import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AsyncAwait() {
    const [data, setData] = useState({
        'latitude': '',
        'longitude': '',
        'temperature': '',
        'windspeed': '',
        'winddirection': '',
        'weathercode': '',
        'time': ''
    })

    const getData = async () => {

        await axios.get("https://api.open-meteo.com/v1/forecast?latitude=-6.1862&longitude=106.8063&current_weather=true&windspeed_unit=ms&timezone=Asia%2FBangkok")
            .then((response) => {
                setData({
                    latitude: response.data.latitude,
                    longitude: response.data.longitude,

                    temperature: response.data.current_weather.temperature,
                    windspeed: response.data.current_weather.windspeed,
                    winddirection: response.data.current_weather.winddirection,
                    weathercode: response.data.current_weather.weathercode,
                    time: response.data.current_weather.time
                })
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {

        getData();

    }, [])

    return (
        <div className='container my-2 mx-auto p-4 rounded-lg text-center border-2 border-teal-500 max-w-md'>
            <h1 className='text-center text-2xl font-semibold mb-6'>Ramalan Cuaca Jakarta</h1>
            <div className='flex text-left px-10'>
                <div className='w-[40%]'>Latitude</div>
                <div className='w-[5%]'>:</div>
                <div className='w-[55%]'>{data.latitude}</div>
            </div>
            <div className='flex text-left px-10'>
                <div className='w-[40%]'>Longitude</div>
                <div className='w-[5%]'>:</div>
                <div className='w-[55%]'>{data.longitude}</div>
            </div>
            <div className='flex text-left px-10'>
                <div className='w-[40%]'>Temperature</div>
                <div className='w-[5%]'>:</div>
                <div className='w-[55%]'>{data.temperature} °C</div>
            </div>
            <div className='flex text-left px-10'>
                <div className='w-[40%]'>Wind Speed</div>
                <div className='w-[5%]'>:</div>
                <div className='w-[55%]'>{data.windspeed} m/s</div>
            </div>
            <div className='flex text-left px-10'>
                <div className='w-[40%]'>Wind Direction</div>
                <div className='w-[5%]'>:</div>
                <div className='w-[55%]'>{data.winddirection}</div>
            </div>
            <div className='flex text-left px-10'>
                <div className='w-[40%]'>Weather</div>
                <div className='w-[5%]'>:</div>
                <div className='w-[55%]'>{data.weathercode}</div>
            </div>
            <div className='flex text-left px-10'>
                <div className='w-[40%]'>Time</div>
                <div className='w-[5%]'>:</div>

                <div className='w-[55%]'>{data.time}</div>
            </div>
        </div>
    )
}