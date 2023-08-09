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

	module.exports = router;
