import React from "react";
import Card from "components/Card";
import iniNjanUrangatte from "data/books/ini-njan-urangatte";

export default {
	title: "Card",
	component: Card
};

export const InProgress = () => {
	return <Card book={iniNjanUrangatte}/>;
};