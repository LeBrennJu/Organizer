import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
const WidgetCard = () => {


    return (
        <>
                <section className="widget--card__container">
                <svg className="icon icon-plus">
                      <use className="svg-icon" xlinkHref="#icon-plus"></use>
                </svg>
                </section>
        </>
    );
};

export default WidgetCard;