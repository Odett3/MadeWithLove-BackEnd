const { Router } = require("express");
const User = require("../models/").user;
const Tag = require("../models/").tag;
const Listing = require("../models/").listing;
const ListingImage = require("../models/").listingImage;
const { cloudinary } = require("../utils/cloudinary");
const router = new Router();

router.get("/feed", async (req, res) => {
  const limit = req.query.limit || 10;
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

router.post("/api/upload", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "ml_default",
    });
    console.log(uploadedResponse);
    res.json({ msg: "Yaaaaaay" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: "something went wrong" });
  }
});

module.exports = router;
