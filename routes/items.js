	"use strict;"

	const express = require("express");
  // const { items } = require("./fakeDb");
  const items = require("../fakeDb");

	const router = new express.Router();

	/** Returns a list of a shopping items */
	router.get("", function (req, res) {
		console.log("items is:", items);
    return res.json(items);
  });



	router.post("", function(req, res) {
		const newItem = {
			"name": req.body.name,
			"price": req.body.price
		};

		items.items.push(newItem);
		const resp = {"added": newItem};
		return res.json(resp);
	});





	module.exports = router;
