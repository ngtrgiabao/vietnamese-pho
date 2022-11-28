const ApiError = require("../api.error");
const ProductService = require("../services/product.service");
const MongoDB = require("../utils/mongodb.utils");

exports.create = async (req, res, next) => {
    if (!req.body?.name) {
        return next(new ApiError(400, "Name can't be empty"));
    }

    try {
        const productService = new ProductService(MongoDB.client);
        const document = await productService.create(req.body);
        return res.send(document);
    } catch (error) {
        console.log(error);

        return next(
            new ApiError(500, "An error occured while creating the product")
        );
    }
};

exports.findAll = async (req, res) => {
    let documents = [];

    try {
        const productService = new ProductService(MongoDB.client);
        const { name } = req.query;

        if (name) {
            documents = await productService.findByName(name);
        } else {
            documents = await productService.find({});
        }
    } catch (error) {
        return next(
            new ApiError(500, "An error occured while creating the product")
        );
    }

    return res.send(documents);
};

exports.findOne = async (req, res, next) => {
    try {
        const productService = new ProductService(MongoDB.client);
        const document = await productService.findById(req.params.id);
        if (!document) {
            return next(new ApiError(404, "product not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving product with id=${req.params.id}`
            )
        );
    }
};

exports.update = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, "Data to update can not be empty"));
    }

    try {
        const productService = new ProductService(MongoDB.client);
        const document = await productService.update(req.params.id, req.body);
        if (!document) {
            return next(new ApiError(404, "product not found"));
        }
        return res.send({
            message: "product was updated successfully",
        });
    } catch (error) {
        return next(
            new ApiError(500, `Error updating product with id=${req.params.id}`)
        );
    }
};

exports.delete = async (req, res) => {
    try {
        const productService = new ProductService(MongoDB.client);
        const document = await productService.delete(req.params.id);
        if (!document) {
            return next(new ApiError(404, "product not found"));
        }
        return res.send({ message: "product was delete successfully" });
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Could not delete product with id=${req.params.id}`
            )
        );
    }
};

exports.deleteAll = async (req, res) => {
    try {
        const productService = new ProductService(MongoDB.client);
        const deletedCount = await productService.deleteAll();
        return res.send({
            message: `${deletedCount} products were deleted successfully`,
        });
    } catch (error) {
        return next(
            new ApiError(500, "An errr occurred while removing all products")
        );
    }
};
