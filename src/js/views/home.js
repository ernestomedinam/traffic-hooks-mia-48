import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { TrafficLight } from "../component/TrafficLight";

export const Home = () => (
	<div className="container">
		<div className="d-flex w-100 align-items-center justify-content-center">
			<TrafficLight
				initialLights={[{
					color: "red",
					duration: 5,
					current: true
				}, {
					color: "yellow",
					duration: 3,
					current: false
				}, {
					color: "green",
					duration: 5,
					current: false
				}]} />
			<TrafficLight
				initialLights={[{
					color: "red",
					duration: 1,
					current: true
				}, {
					color: "yellow",
					duration: 1,
					current: false
				}]} />
			<TrafficLight
				initialLights={[{
					color: "red",
					duration: 1,
					current: false
				}, {
					color: "green",
					duration: 60,
					current: true
				}]} />
		</div>
	</div>
);
