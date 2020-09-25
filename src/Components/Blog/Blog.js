import React from 'react';
import Sundorban from '../../Image/sundorbon.png';
import Sajek from '../../Image/Sajek.png';
import Sreemongol from '../../Image/Sreemongol.png';
import Hotel1 from '../../Image/Rectangle 26.png';
import Hotel2 from '../../Image/Rectangle 27.png';
import Hotel3 from '../../Image/Rectangle 28.png';

const Blog = () => {
    return (
        <div>
            <div className="d-flex m-5 p-5">
            <div>
<img className="w-50" src={Sundorban} alt=""/>
            </div>
            <div>
<h1>About Sundorban</h1>
<p>The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh.</p>
            </div>
            </div>


            <div className="d-flex m-5 p-5">
            <div>
<img className="w-50" src={Sajek} alt=""/>
            </div>
            <div>
<h1>About Sajek</h1>
<p>Nature. Sajek valley is known for its natural environment and is surrounded by mountains, dense forest, and grassland hill tracks. Many small rivers flow through the mountains among which the Kachalong and the Machalong are notable. On the way to Sajek valley, one has to cross the Mayni range and the Mayni river</p>
            </div>
            </div>



            <div className="d-flex m-5 p-5">
            <div>
<img className="w-50" src={Sreemongol} alt=""/>
            </div>
            <div>
<h1>About Sreemangal</h1>
<p>Nature. Sajek valley is known for its natural environment and is surrounded by mountains, dense forest, and grassland hill tracks. Many small rivers flow through the mountains among which the Kachalong and the Machalong are notable. On the way to Sajek valley, one has to cross the Mayni range and the Mayni river</p>
            </div>
            </div>


            <h1 className="d-flex justify-content-center">About Some Hotel</h1>

            <div className="d-flex m-5 p-5">
            <div>
<img className="w-50" src={Hotel1} alt=""/>
            </div>
            <div>
<h1>About Super Delux</h1>
<p>Five-star amenities include a choice of at least two complimentary newspapers, offered and distributed, a welcome gift upon arrival, 24-hour room service, including hot food, and a thoughtful presentation during turndown service.</p>
            </div>
            </div>


            <div className="d-flex m-5 p-5">
            <div>
<img className="w-50" src={Hotel2} alt=""/>
            </div>
            <div>
<h1>About Salmon</h1>
<p>Five-star amenities include a choice of at least two complimentary newspapers, offered and distributed, a welcome gift upon arrival, 24-hour room service, including hot food, and a thoughtful presentation during turndown service.</p>
            </div>
            </div>


            <div className="d-flex m-5 p-5">
            <div>
<img className="w-50" src={Hotel3} alt=""/>
            </div>
            <div>
<h1>Beach Sleep</h1>
<p>Five-star amenities include a choice of at least two complimentary newspapers, offered and distributed, a welcome gift upon arrival, 24-hour room service, including hot food, and a thoughtful presentation during turndown service.</p>
            </div>
            </div>
            
        </div>
        
    );
};

export default Blog;