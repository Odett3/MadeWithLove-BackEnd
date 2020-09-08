const { Router } = require("express");
const User = require("../models/").user;
const Tag = require("../models/").tag;
const Listing = require("../models/").listing;
const ListingImage = require("../models/").listingImage;

const router = new Router();

router.get("/feed", async (req, res) => {
  const limit = req.query.limit || 50;
  const offset = req.query.offset || 0;
  const allListings = await Listing.findAll({
    include: [
      { model: Tag, attributes: ["title"] },
      { model: User },
      { model: ListingImage, attributes: ["imageUrl"] },
    ],
    limit,
    offset,
  });
  res.status(200).send({ message: "ok", allListings });
});

router.get("/feed/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "listing id is not a number!" });
  }

  const listing = await Listing.findByPk(id, {
    include: [{ model: Tag }, { model: User }, { model: ListingImage }],
  });

  if (listing === null) {
    return res
      .status(404)
      .send({ message: "Listing with this id is not found" });
  }

  res.status(200).send({ message: "ok", listing });
});

router.get("/user/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "user id is not a number!" });
  }

  const user = await User.findByPk(id, {
    include: [{ model: Listing }],
  });

  if (user === null) {
    return res.status(404).send({ message: "Sorry, user not found" });
  }

  res.status(200).send({ message: "ok", user });
});

router.get("/users", async (req, res) => {
  const allUsers = await User.findAll();
  res.status(200).send({ message: "ok", allUsers });
});

router.get("/tags", async (req, res) => {
  const allTags = await Tag.findAll();
  res.status(200).send({ message: "ok", allTags });
});

module.exports = router;
