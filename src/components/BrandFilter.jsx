import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllPromotions,
  getFilteredPromotions,
  getTags,
} from "../store/dataSlice";
import Slider from "react-slick";
import FindButton from "../images/find-icon.png";
const sliderSettings = {
  arrows: false,
  dots: false,
  infinite: false,
  slidesToShow: 10,
  slidesToScroll: 3,
  appendDots: (dots) => <ul>{dots}</ul>,
  customPaging: (i) => <button></button>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};
export const BrandFilter = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);
  useEffect(() => {
    dispatch(getTags());
    dispatch(getAllPromotions());
  }, [dispatch]);
  const allTags = useSelector(({ data }) => data.tags);
  const loading = useSelector(({ data }) => data.loading);
  const handleTagClick = (tagId) => {
    setActive(tagId);
    tagId === 0
      ? dispatch(getAllPromotions())
      : dispatch(getFilteredPromotions(tagId));
  };
  if (loading) {
    return (
      <div className="container container__loading">
        <div id="loading"></div>
      </div>
    );
  }
  const tagItems = allTags.map((item) => {
    return (
      <div
        key={item.Id}
        onClick={() => {
          handleTagClick(item.Id);
        }}
      >
        <div
          className={`tag-item ${active === item.Id ? "tag-item--active" : ""}`}
        >
          <img className="tag-item__img" src={item.IconUrl} />
          <p className="tag-item__name">{item.Name}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <Slider {...sliderSettings}>
        <div>
          <div
            className={`tag-item ${active === 0 ? "tag-item--active" : ""}`}
            onClick={() => {
              handleTagClick(0);
            }}
          >
            <img className="tag-item__find-button" src={FindButton} />
            <p className="tag-item__name">Fırsat Bul</p>
          </div>
        </div>
        {tagItems}
      </Slider>
    </div>
  );
};
