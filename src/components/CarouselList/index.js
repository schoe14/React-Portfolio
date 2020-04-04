import React from "react";

export function CarouselList({ children }) {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            {children}
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export function CarouselItem(props) {
    return (
        <div className="carousel-inner">
            {props.carousel.map((item, index) => {
                return (
                    <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
                        <img src={item.demo} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 style={{ color: "black" }}>{item.label}</h5>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}