import React from 'react';
import { Link } from 'react-router-dom';

const Paintings = (props) => {
    const { _id, title, painter, img, year, dimensions, price } = props.painting;
    return (
        <div className="col-xl-4 col-md-6 text-start mx-auto">
            <div className="p-2 h-100">
                <div className="d-flex flex-column box justify-content-between bg-white h-100 rounded-10 shadow">
                    <div>
                        <img className="img-fluid rounded-t-10" src={img} alt="painting" />
                        <div className="px-4">
                            <p className="btn btn-main py-0">{year}</p>
                            <h4>{title}</h4>
                            <small className="text-second">Painting by <span className="text-main">{painter}</span></small>
                        </div>
                    </div>
                    <div className="px-4">
                        <p className="mb-0 mt-3 text-second">Dimensions: <span className="text-dark">{dimensions}</span></p>
                        <p className="text-second">Price: <span className="text-dark">${price}</span></p>
                    </div>
                    <div className=" pb-4 pt-1 ps-4 rounded-10">
                        <Link className="btn btn-main box" to={`/paintings/${_id}`}>View Details <i className="ps-1 fas fa-info-circle"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Paintings;