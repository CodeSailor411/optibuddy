import React from 'react';
import kws from '../images/clients/kws.png'; // Adjust path as per your structure
import geps from '../images/clients/geps.png';
import protergia from '../images/clients/protergia.png';

const clientImageStyle = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'color-burn'
};

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Clients</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Trusted by businesses striving for sustainability.</h2>
                </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-8">
                        <div style={clientImageStyle} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={kws} alt="KWS client logo" />                           
                        </div>

                        <div style={clientImageStyle} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={protergia} alt="Protergia client logo" />                            
                        </div> 

                        <div style={clientImageStyle} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={geps} alt="Geps client logo" />                            
                        </div>                   
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Clients;
