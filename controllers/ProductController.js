const Product = require("../models/productSchema");
const User = require("../models/userSchema");

//TODO: add Product
exports.createProduct = async (req, res) => {
  const bodyData = req.body;
  try {
    const newProduct = new Product({
      ...bodyData,
    });
    await newProduct.save();
    res.status(200).json({
      message: "Product saved successfully",
      data: newProduct,
    });
  } catch (e) {
    console.error(e);
    res.status(500).send("Error Saving Product");
  }
};

// TODO:update product
exports.updateProduct = async (req, res) => {
  const { productId } = req.body;
  try {
    const updatedProduct = await Product.updateOne(
      { _id: productId },
      { $set: { ...req.body } }
    );

    if (updatedProduct.modifiedCount === 1) {
      const updatedProductData = await Product.findOne({ _id: productId });
      res
        .status(200)
        .json({ message: "Product Updated", data: updatedProductData });
    } else {
      res.status(404).json({ message: "Product not found or not updated" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating Product" });
  }
};


// TODO :get product
exports.getProduct = async (req, res) => {
  try {
    let foundProduct = await Product.findOne({
      _id: req.params.id,
    });
    res.status(200).json({
      message: "Product Found!",
      data: foundProduct,
    });
  } catch (err) {
    console.log(err);
    res.status(404).send({
      message: "Product Not Found",
      data: err,
    });
  }
};

// TODO :get all products
exports.getAllProducts = async (req, res) => {
  try {
    const allData = await Product.find({});
    res.status(200).json({
      message: "All products",
      data: allData,
    });
  } catch (e) {
    res.status(404).send({
      message: "Product not found",
      data: e,
    });
  }
};

//TODO :delete product
exports.deleteProduct = async (req, res) => {
  const { id } = req.body;
  try {
    const deleted = await Product.deleteOne({ _id: id });
    res.status(200).json({
      message: "Product Delete Success",
      data: deleted,
    });
  } catch (err) {
    res.status(404).json({
      message: "Product Delete Error",
      data: err,
    });
  }
};
