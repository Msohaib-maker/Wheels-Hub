import { useEffect, useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import './UploadCar.css'
import { initializeApp } from "firebase/app";
import { storage } from './firebase';
import { getDownloadURL, ref as storageRef, uploadBytes} from 'firebase/storage'


function UploadCar(props) {

    

    const [carData, setCarData] = useState({
        file: {file_local: '', file_remote:''},
        carModel: '',
        engine: '',
        city: '',
        mileage: '',
        price: '',
        contact: '',
        year: '',
        type: 'Choose...'
    });


    const db = getDatabase();
    
    
    // Function to handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setCarData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleTypeChange = (e) => {
        setCarData({ ...carData, type: e.target.value });
    };

    const ClearFields = () => {
        setCarData({
            file: {file_local: '', file_remote: ''},
            carModel: '',
            engine: '',
            city: '',
            mileage: '',
            price: '',
            contact: '',
            year: '',
            type: 'Choose...'
        });
    }

    const handleChange = (e) => {
        const selectedFile = URL.createObjectURL(e.target.files[0]);
        setCarData(prevData => ({
            ...prevData,
            file: {
                ...prevData.file,
                file_local: selectedFile, // Update the file_local property within the file object
                file_remote: e.target.files[0]
            }
        }));
    }

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        
        // Perform the database update when the form is submitted
        const ImageRef = storageRef(storage, `images/${carData.file.file_remote.name}`);
        // const imageRef = RefStore.child(`images/${carData.file.name}`);
        

        uploadBytes(ImageRef, carData.file.file_remote)
            .then((snapshot) =>{
            
            console.log(getDownloadURL(snapshot.ref));
            return getDownloadURL(snapshot.ref);
        })
        .then((downloadURL) => {
            // Combine the download URL with other data
            const newData = {
                ...carData,
                file: {
                    ...carData.file,
                    file_remote: downloadURL // Update file_remote with the download URL
                }
            };

            // Save the combined data to Firebase Realtime Database
            set(ref(db, 'cars/' + uuidv4()), newData)
                .then(() => {
                    // Success - data saved to Realtime Database
                    alert('Uploaded');
                    ClearFields(); // Clear form fields after successful upload
                })
                .catch((error) => {
                    console.error('Error saving data to Realtime Database:', error);
                });
        })
        .catch((error) => {
            console.error('Error uploading image:', error);
        });
        
        

    };

    let flag = false
    if(carData.file.file_local !== ''){
        flag = true
    }
    
    

    return (
        <div>
            <form onSubmit={handleSubmit} className='form-style'>
                {/* Your form fields */}
                <label htmlFor="upload-image">
                    Upload Image
                </label>
                <input id="upload-image" type="file" onChange={handleChange}/>
                {flag && <img id="my-img" src={carData.file.file_local}/>}
                <input type="text" className="form-control" id="carModel" placeholder="Car Model" onChange={handleInputChange} value={carData.carModel} />
                <input type="text" className="form-control" id="price" placeholder="Enter Price" onChange={handleInputChange} value={carData.price} />
                <input type="text" className="form-control" id="mileage" placeholder="Enter Mileage" onChange={handleInputChange} value={carData.mileage} />
                <input type="text" className="form-control" id="year" placeholder="Enter Purchase Year" onChange={handleInputChange} value={carData.year} />
                <input type="text" className="form-control" id="contact" placeholder="Enter Contact No" onChange={handleInputChange} value={carData.contact} />
                <input type="text" className="form-control" id="city" placeholder="Enter City" onChange={handleInputChange} value={carData.city} />
                <input type="text" className="form-control" id="engine" placeholder="Enter Engine" onChange={handleInputChange} value={carData.engine} />
                <select id="inputState" class="form-control" value={carData.type} onChange={handleTypeChange}>
                    <option selected>Choose...</option>
                    <option>New</option>
                    <option>Old</option>
                </select>

                <button type="submit" className="btn btn-primary">Upload</button>
            </form>
        </div>
    );
}

export default UploadCar;
