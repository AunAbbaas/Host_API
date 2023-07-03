const Product = require("../model/product.js");

const getProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ mesaage: error });
  }
};

const postProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).status({ mesaage: error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ mesaage: error });
  }
};

const updateProduct = async (req,res) =>{
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      res
        .status(404)
        .json({ mesaage: "Product not Updated Some internal Error Occurs" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(404).json({ mesaage: error });
  }
}

const getProdById = async (req,res) =>{
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ mesaage: error });
  }
}

module.exports = { getProduct, postProduct, deleteProduct,updateProduct,getProdById };
