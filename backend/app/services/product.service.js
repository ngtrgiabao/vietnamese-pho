const { ObjectId } = require("mongodb");

class ProductService {
    constructor(client) {
        this.product = client.db().collection("products");
    }
    // Định nghĩa các phương thức truy xuất CSDL sử dụng MongoDB API
    extractConactData(payload) {
        const product = {
            name: payload.name,
            price: payload.price,
            quantity: payload.quantity,
        };
        //Remove undefined fields
        Object.keys(product).forEach(
            (key) => product[key] === undefined && delete product[key]
        );
        return product;
    }

    async create(payload) {
        const product = this.extractConactData(payload);
        const result = await this.product.findOneAndUpdate(
            product,
            { $set: {} },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.product.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i" },
        });
    }
    //FindOne
    async findById(id) {
        return await this.product.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    //Update
    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractConactData(payload);
        const result = await this.product.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        return result.value;
    }

    //Deleted
    async delete(id) {
        const result = await this.product.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }

    //deletedAll
    async deleteAll() {
        const result = await this.product.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = ProductService;
