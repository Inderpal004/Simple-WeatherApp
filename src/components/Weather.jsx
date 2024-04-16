import React from 'react';

export default function Weather({weatherData}) {
  return (
    <div>
        {
            weatherData.weather ? (
                <div className='md:w-[500px] w-[330px] md:h-[250px] h-auto bg-gray-300 shadow-lg rounded-xl m-auto relative px-6 top-[10%]'>
                    <div className='flex justify-between w-full'>
                        <div className='w-1/2 my-4 mx-auto flex justify-between items-center'>
                            <div className='flex flex-col items-start justify-between h-full'>
                                <div >
                                    <p className='text-xl'>{weatherData.name},{weatherData.sys.country}</p>
                                    <p className='text-sm'> {weatherData.weather[0].description}</p>
                                </div>
                                <div>
                                    <h1 className='md:text-6xl text-5xl font-semibold'>{ weatherData.main.temp.toFixed()}°C</h1>
                                </div>
                            </div>
                        </div>

                        <div className='w-1/2 flex flex-col justify-between items-end'>
                            <div className='relative'>
                                <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" className='w-[120px]' />
                            </div>
                            {
                                weatherData.name !== undefined ? (
                                    <div className='flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs'>
                                        <div className='flex justify-between gap-x-8'>
                                            <p>Feels like</p>
                                            <p className='font-bold w-20'>{weatherData.main.feels_like.toFixed()} °C</p>
                                        </div>
                                        <div className='flex justify-between gap-x-8'>
                                            <p>Humidity</p>
                                            <p className='font-bold w-20'>{weatherData.main.humidity} %</p>
                                        </div>
                                        <div className='flex justify-between gap-x-8'>
                                            <p>Wind Speed</p>
                                            <p className='font-bold w-20'>{weatherData.wind.speed.toFixed()} KPH</p>
                                        </div>
                                        <div className='flex justify-between gap-x-8'>
                                            <p>Pressure</p>
                                            <p className='font-bold w-20'>{weatherData.main.pressure} hPa</p>
                                        </div>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                </div>
            ) : null
        }
    </div>
  )
}
