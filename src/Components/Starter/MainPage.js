import './MainPage.css';


const images = [
    './car2.jpeg',
    './mercedes-benz-car.jpg',
    './car1.jpeg',
    './car2.jpeg',
    './mercedes-benz-car.jpg',
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
                {images.map((src, index) => {
                    return (
                        <div className="child" key={index}>
                            <img src={src} className='img-talk' alt={`Image ${index + 1}`} />
                            <p>Car motor</p>
                        </div>
                    );
                })}
            </div>

            <br/><br/>
            <center><h3><i>Buy Car Accessories</i></h3></center>
            <br/><br/>
            <img src="./cartyre1.jpg" class="backgroundimage_mp" alt="Background Image"></img>
            <img src="./carmotor.jpeg" class="backgroundimage_mp" alt="Background Image"></img>
            <img src="./battery.webp" class="backgroundimage_mp" alt="Background Image"></img>

            <br/><br/>
            <center><h3><i>Get Inspection of your car</i></h3></center>
            <br/><br/>
            <img src="./car-inspection.png" class="backgroundimage_mp" alt="Background Image"></img>
            <img src="./car-inspection1.png" class="backgroundimage_mp" alt="Background Image"></img>
            <img src="./car-inspection2.avif" class="backgroundimage_mp" alt="Background Image"></img>

            
        </div>
    );


}

export default MainPage;