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


	/**  Creates new item and returns it
	 *
	 *  expected format: {name, price}
	 */
	router.post("", function(req, res) {
		const newItem = {
			"name": req.body.name,
			"price": req.body.price
		};

		items.items.push(newItem);
		const resp = {"added": newItem};
		return res.json(resp);
	});


	/** Returns a single item */
	router.get("/:name", function(req,res) {
		const name = req.params.name
		console.log("name", name)

		const item = items.items.find(item => item.name === name);
		console.log("item", item);

		return res.json(item);
	});

	/**
	 * Update the specified item with the provided data.
	 */
	router.patch("/:name", function(req, res) {
		const name = req.params.name;
		const data = req.body;
		const idxOfItem = items.items.findIndex(item => item.name === name);

		for (let key in data) {
			const value = data[key];
			items.items[idxOfItem][key] = value;
		}

		return res.json(items.items[idxOfItem]);
	});

	/**
	 *
	 */
	router.delete("/:name", function(req, res) {
		const name = req.params.name;
		const idxOfItem = items.items.findIndex(item => item.name === name);
		items.items.splice(idxOfItem, 1);

		return res.json({"message": "Deleted"})
	});

	module.exports = router;
