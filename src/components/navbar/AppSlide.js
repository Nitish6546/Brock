import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function AppSlide() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp10304075.jpg"
          alt=""
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/05/11231006/Study-Abroad.jpg"
          alt=" "
        />

        <Carousel.Caption>
           
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-vector/business-plan-consulting-illustration_2175-4753.jpg?w=2000"
          alt=" "
        />

        <Carousel.Caption>
           
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2014/05/9517344813_8c279a5e2e_b.jpg"
          alt=" "
        />

        <Carousel.Caption>
           
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AppSlide;