import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadCar, fetchCars } from '../../../reducers/UploadCarSlice'; // Import the thunk for uploading
import './UploadCar.css';

function UploadCar() {
  const [carData, setCarData] = useState({
    file: { file_local: '', file_remote: '' },
    carModel: '',
    engine: '',
    city: '',
    mileage: '',
    price: '',
    contact: '',
    year: '',
    type: 'Choose...',
  });

  const dispatch = useDispatch();
  const status = useSelector((state) => state.uploadCar.status);
  const error = useSelector((state) => state.uploadCar.error);
  const carsList = useSelector((state) => state.uploadCar.carsList);

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleTypeChange = (e) => {
    setCarData({ ...carData, type: e.target.value });
  };

  const ClearFields = () => {
    setCarData({
      file: { file_local: '', file_remote: '' },
      carModel: '',
      engine: '',
      city: '',
      mileage: '',
      price: '',
      contact: '',
      year: '',
      type: 'Choose...',
    });
  };

  const handleChange = (e) => {
    const selectedFile = URL.createObjectURL(e.target.files[0]);
    setCarData((prevData) => ({
      ...prevData,
      file: {
        ...prevData.file,
        file_local: selectedFile,
        file_remote: e.target.files[0],
      },
    }));
  };

  // Handle form submission and upload the car data
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(uploadCar(carData)).then(() => {
      ClearFields();
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-style">
        <label htmlFor="upload-image">Upload Image</label>
        <input id="upload-image" type="file" onChange={handleChange} />
        {carData.file.file_local && <img id="my-img" src={carData.file.file_local} alt="Preview" />}
        <input type="text" className="form-control" id="carModel" placeholder="Car Model" onChange={handleInputChange} value={carData.carModel} />
        <input type="text" className="form-control" id="price" placeholder="Enter Price" onChange={handleInputChange} value={carData.price} />
        <input type="text" className="form-control" id="mileage" placeholder="Enter Mileage" onChange={handleInputChange} value={carData.mileage} />
        <input type="text" className="form-control" id="year" placeholder="Enter Purchase Year" onChange={handleInputChange} value={carData.year} />
        <input type="text" className="form-control" id="contact" placeholder="Enter Contact No" onChange={handleInputChange} value={carData.contact} />
        <input type="text" className="form-control" id="city" placeholder="Enter City" onChange={handleInputChange} value={carData.city} />
        <input type="text" className="form-control" id="engine" placeholder="Enter Engine" onChange={handleInputChange} value={carData.engine} />
        <select id="inputState" className="form-control" value={carData.type} onChange={handleTypeChange}>
          <option selected>Choose...</option>
          <option>New</option>
          <option>Old</option>
        </select>

        <button type="submit" className="btn btn-primary">
          Upload
        </button>
      </form>
    </div>
  );
}

export default UploadCar;
