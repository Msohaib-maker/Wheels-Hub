import './MainPage.css';


const images = [
    './car2.jpeg',
    './mercedes-benz-car.jpg',
    './car1.jpeg',
    './car2.jpeg',
    './mercedes-benz-car.jpg',
    './car1.jpeg',
    './car2.jpeg',
    './mercedes-benz-car.jpg',
    './car1.jpeg',
    // Add more image paths here if needed
];


function MainPage(props) {
    
    return (
        <div>
            
            <div className='container_MP'>
                {/* <img src="./car.jpg" class="background-image" alt="Background Image"></img> */}
                <div class="overlay-text">
                <h2>Welcome to ApnaWheels by Car Tech</h2>
                </div>
            </div>
            <br/><br/>
            <center><h3><i>Buy and Sell New and Used Car</i></h3></center>
            <br/><br/>
            <div className="image-slider">
                {images.map((image, index) => (
                    <img
                    key={index}
                    src={image}
                    alt={`Car ${index + 1}`}
                    class="backgroundimage_mp" 
                    />
                ))}
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