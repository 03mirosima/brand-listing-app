import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllPromotions,
  getFilteredPromotions,
  getTags,
} from "../store/dataSlice";
import Slider from "react-slick";
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
export const PromotionListing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPromotions());
  }, [dispatch]);
  const allPromotions = useSelector(({ data }) => data.allPromotions);
  const promotionCards = allPromotions.map((promotion) => {
    return (
      <div className="card" key={promotion.Id}>
        <div
          className="card__content"
          style={{
            backgroundImage: `url(${promotion.ImageUrl})`,
          }}
        >
          <div className="card__logo">
            <img src={promotion.BrandIconUrl} />
          </div>
          <div className="card__info">
            <div
              dangerouslySetInnerHTML={{
                __html: promotion.Title,
              }}
            ></div>
            <div
              className="card__button"
              dangerouslySetInnerHTML={{
                __html: promotion.ListButtonText,
              }}
            ></div>
          </div>
          <div className="card__date">
            <span>{promotion.RemainingText}</span>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="305"
          viewBox="0 0 305 367"
        >
          <path
            fill={promotion.PromotionCardColor}
            d="M29.256.065l257.45.962c6.224.024 8.479.677 10.751 1.899a12.719 12.719 0 0 1 5.272 5.285c1.215 2.276 1.863 4.532 1.87 10.755l.377 328.013c.013 11.045-8.931 20.01-19.977 20.022-.332 0-.664-.007-.996-.023l-258.73-12.596c-8.827-.43-11.985-1.492-15.139-3.358a18.162 18.162 0 0 1-7.183-7.798c-1.603-3.296-2.403-6.53-2.109-15.362L11.177 17.487c.205-6.132.9-8.337 2.152-10.552a12.706 12.706 0 0 1 5.302-5.11C20.891.656 23.121.042 29.256.065z"
          ></path>
        </svg>
      </div>
    );
  });
  return (
    <div className="container">
      <Slider {...sliderSettings}>{promotionCards}</Slider>
    </div>
  );
};
