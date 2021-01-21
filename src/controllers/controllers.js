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
}