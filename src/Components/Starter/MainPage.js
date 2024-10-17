import './MainPage.css';


const images = [
    {image:'./carmotor.png', text:'Car motor'},
    {image:'./logo192.png', text:'React logo'},
    {image:'./carmotor.png', text:'Car motor'},
    {image:'./carbrakes.png', text:'Car brakes'},
    {image:'./car_engine.png', text:'Car engine'}

    // Add more image paths here if needed
];


function MainPage(props) {
    
    return (
        <div>
            
            <div className='container_MP'>
                <img src="./car-wheel.png" class="lead_backgroundimage " alt="Background Image"></img>
                <div class="overlay-text">
                    <h2>Welcome to ApnaWheels</h2>
                    <h3 className='text-color'>Sponsored by CarTech</h3>
                </div>
                <div className='overlay-button'>
                    <button className='button-style'>Shop by Brands</button>
                </div>
                
            </div>
            <br/><br/>
            <h3 className='main-text'>Auto Part and Accesories</h3>
            
            
            <br></br>
            <div class="container12">
                {images.map((obj, index) => {
                    return (
                        <div className="child" key={index}>
                             
                            <div className='div-talk'>
                                <img src={obj.image} className='img-talk' alt={`Image ${index + 1}`} />    
                            </div>
                            
                            <p className='not-main-text'>{obj.text}</p>
                        </div>
                    );
                })}
            </div>
            <br></br>
            <div class="container12">
                {images.map((obj, index) => {
                    return (
                        <div className="child" key={index}>
                             
                            <div className='div-talk'>
                                <img src={obj.image} className='img-talk' alt={`Image ${index + 1}`} />    
                            </div>
                            
                            <p className='not-main-text'>{obj.text}</p>
                        </div>
                    );
                })}
            </div>
            <br></br>
            <div class="container12">
                {images.map((obj, index) => {
                    return (
                        <div className="child" key={index}>
                             
                            <div className='div-talk'>
                                <img src={obj.image} className='img-talk' alt={`Image ${index + 1}`} />    
                            </div>
                            
                            <p className='not-main-text'>{obj.text}</p>
                        </div>
                    );
                })}
            </div>
            <br></br>
            <br></br>
            <div className='container_MP'>
                
                    <h2 className='text-color1'>Shop with Automotive Stuff?</h2>
                    <p className='not-main-text1'>Sponsored by CarTech. We are the best company in the town. We are the first. We literally take good orders. We have no equal in car manufacturing. Sponsored by CarTech. We are the best company in the town. We are the first. We literally take good orders. We have no equal in car manufacturing. Sponsored by CarTech. We are the best company in the town. We are the first. We literally take good orders. We have no equal in car manufacturing. Sponsored by CarTech. We are the best company in the town. We are the first. We literally take good orders. We have no equal in car manufacturing. Sponsored by CarTech. We are the best company in the town. We are the first. We literally take good orders. We have no equal in car manufacturing. Cute Talk. We have the best products in the market</p>
                
            </div>
            
        </div>
    );


}

export default MainPage;