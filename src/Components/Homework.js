import React, {useState} from 'react'

const Homework = () => {
    const img1 = "https://i.pinimg.com/originals/f8/2f/04/f82f041d1dc6c479af42f5a6b863a06b.jpg"
    const img2 = "https://www.thespruceeats.com/thmb/A_g1pdGtPZBJyJ9ycu18iDzegL4=/1887x1415/smart/filters:no_upscale()/idli-56a510b63df78cf772862c34.jpg"
    const img3 = "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg"
    const img4 = "https://images.hindi.news18.com/ibnkhabar/uploads/2021/10/Uttapam.jpg"

    const [mainImg, setMainImg] = useState(img2);

    return (
      <div className="container">
        <img src={mainImg} className="img-fluid" alt="" />
  
        <div className="row mt-5">
          <div className="col-md-3">
            <img
              src={img1}
              className="img-fluid"
              alt=""
              onMouseEnter={() => setMainImg(img1)}
            />
          </div>
          <div className="col-md-3">
            <img
              src={img2}
              className="img-fluid"
              alt=""
              onMouseEnter={() => setMainImg(img2)}
            />
          </div>
          <div className="col-md-3">
            <img
              src={img3}
              className="img-fluid"
              alt=""
              onMouseEnter={() => setMainImg(img3)}
            />
          </div>
          <div className="col-md-3">
            <img
              src={img4}
              className="img-fluid"
              alt=""
              onMouseEnter={() => setMainImg(img4)}
            />
          </div>
        </div>
      </div>
    );
  };
  
  
  

export default Homework;