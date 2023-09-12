import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import WidgetCard from "./WidgetCard";
const Dashboard = () => {


    return (
        <>
            <main className="dashboard__container">
                <section className="dashboard__area">
                    {Array.from({ length: 6 }, (_, index) => (
                    <WidgetCard key={index} index={index} />
                    ))}
                </section>
            </main>

        </>
    );
};

export default Dashboard;