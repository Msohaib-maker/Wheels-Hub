import { Link } from 'react-router-dom';

function FilteredCar() {
    return(
        <div>
        <h1><center><i>Filtered Cars</i></center></h1>
        <br /><br />
        <center>
            <Link to="/UsedCar"><button style={{ width: '400px', display: 'list-item', backgroundColor: '#bf6565' }}>Click to Find Used Cars</button></Link>
            <br /><br />
            <Link to="/NewCar"><button style={{ width: '400px', display: 'list-item', backgroundColor: '#52a18b' }}>Click to Find New Cars</button></Link>
        </center>
    </div>
    );
}

export default FilteredCar;