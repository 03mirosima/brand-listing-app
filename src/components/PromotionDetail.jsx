import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";

export const PromotionDetail = () => {
  const promotionDetail = useSelector(({ data }) => data.promotionDetail);
  console.log(promotionDetail, "kk");
  return (
    <>
      <div className="container container--promotion">
        <div className="promotion">
          <div className="promotion__image">
            <img
              className="promotion__image--image"
              src={promotionDetail.ImageUrl}
            />
            <img
              className="promotion__image--overlay-icon"
              src={promotionDetail.BrandIconUrl}
            />
          </div>
          <div className="promotion__info">
            <div
              className="promotion__info--title"
              dangerouslySetInnerHTML={{
                __html: promotionDetail.Title,
              }}
            ></div>
            <div
              className="promotion__info--detail"
              dangerouslySetInnerHTML={{
                __html: promotionDetail.Description,
              }}
            ></div>
          </div>
          <button className="promotion__join-button">Hemen Katıl</button>
        </div>
      </div>
    </>
  );
};
