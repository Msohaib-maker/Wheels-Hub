import './MainPage.css';


const images = [
    {image:'./carmotor.png', text:'Car motor'},
    {image:'./logo192.png', text:'React logo'},
    {image:'./carmotor.png', text:'Car motor'},
    {image:'./car2.jpeg', text:'Car motor'},
    {image:'./car2.jpeg', text:'Car motor'}

    // Add more image paths here if needed
];


function MainPage(props) {
    
    return (
        <div>
            
            <div className='container_MP'>
                <img src="./car-wheel.png" class="lead_backgroundimage " alt="Background Image"></img>
                <div class="overlay-text">
                    <h2>Welcome to ApnaWheels</h2>
                    <h3 className='text-color'>Sponsered by CarTech</h3>
                </div>
                <div className='overlay-button'>
                    <button className='button-style'>Shop by Brands</button>
                </div>
                
            </div>
            <br/><br/>
            <h3 className='main-text'>Auto Part and Accesories</h3>
            
            

            <div class="container12">
                {images.map((obj, index) => {
                    return (
                        <div className="child" key={index}>
                            <img src={obj.image} className='img-talk' alt={`Image ${index + 1}`} />
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
                            <img src={obj.image} className='img-talk' alt={`Image ${index + 1}`} />
                            <p className='not-main-text'>{obj.text}</p>
                        </div>
                    );
                })}
            </div>

            
        </div>
    );


}

export default MainPage;