const ApiError = require("../api.error");
const CustomerService = require("../services/customer.service");
const MongoDB = require("../utils/mongodb.utils");

exports.create = async (req, res, next) => {
    if (!req.body?.name) {
        return next(new ApiError(400, "Name can't be empty"));
    }

    try {
        const customerService = new CustomerService(MongoDB.client);
        const document = await customerService.create(req.body);
        return res.send(document);
    } catch (error) {
        console.log(error);

        return next(
            new ApiError(500, "An error occured while creating the customer")
        );
    }
};

exports.findAll = async (req, res) => {
    let documents = [];

    try {
        const customerService = new CustomerService(MongoDB.client);
        const { name } = req.query;

        if (name) {
            documents = await customerService.findByName(name);
        } else {
            documents = await customerService.find({});
        }
    } catch (error) {
        return next(
            new ApiError(500, "An error occured while creating the customer")
        );
    }

    return res.send(documents);
};

exports.findOne = async (req, res, next) => {
    try {
        const customerService = new CustomerService(MongoDB.client);
        const document = await customerService.findById(req.params.id);
        if (!document) {
            return next(new ApiError(404, "customer not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error retrieving customer with id=${req.params.id}`
            )
        );
    }
};

exports.update = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, "Data to update can not be empty"));
    }

    try {
        const customerService = new CustomerService(MongoDB.client);
        const document = await customerService.update(req.params.id, req.body);
        if (!document) {
            return next(new ApiError(404, "customer not found"));
        }
        return res.send({
            message: "customer was updated successfully",
        });
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Error updating customer with id=${req.params.id}`
            )
        );
    }
};

exports.delete = async (req, res) => {
    try {
        const customerService = new CustomerService(MongoDB.client);
        const document = await customerService.delete(req.params.id);
        if (!document) {
            return next(new ApiError(404, "customer not found"));
        }
        return res.send({ message: "customer was delete successfully" });
    } catch (error) {
        return next(
            new ApiError(
                500,
                `Could not delete customer with id=${req.params.id}`
            )
        );
    }
};

exports.deleteAll = async (req, res) => {
    try {
        const customerService = new CustomerService(MongoDB.client);
        const deletedCount = await customerService.deleteAll();
        return res.send({
            message: `${deletedCount} customers were deleted successfully`,
        });
    } catch (error) {
        return next(
            new ApiError(500, "An errr occurred while removing all customers")
        );
    }
};
