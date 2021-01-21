import mongoose from 'mongoose';
import { productSchema } from '../models/models';

const Product = mongoose.model('Product', productSchema);

export const addnewProduct = (req, res) => {
    let newProduct = new Product(req.body);

    newProduct.save((err, Product) => {
        if (err) {
            res.send(err);
        }
        res.json(Product);
    });
};

export const getProducts = (req, res) => {
    
    Product.find({}, (err, Product) => {
        if (err) {
            res.send(err);
        }
        res.json(Product);
    });
}

export const getProductWithID = (req, res) => {
    
    Product.findById(req.params.ProductID, (err, Product) => {
        if (err) {
            res.send(err);
        }
        res.json(Product);
    });
}