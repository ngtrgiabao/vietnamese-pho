const { ObjectId } = require("mongodb");

class CustomerService {
    constructor(client) {
        this.customer = client.db().collection("customers");
    }
    // Định nghĩa các phương thức truy xuất CSDL sử dụng MongoDB API
    extractConactData(payload) {
        const customer = {
            name: payload.name,
            address: payload.address,
            phone: payload.phone,
            food: payload.food,
            desc: payload.desc,
        };
        //Remove undefined fields
        Object.keys(customer).forEach(
            (key) => customer[key] === undefined && delete customer[key]
        );
        return customer;
    }

    async create(payload) {
        const customer = this.extractConactData(payload);
        const result = await this.customer.findOneAndUpdate(
            customer,
            { $set: {} },
            { returnDocument: "after", upsert: true }
        );
        return result.value;
    }

    async find(filter) {
        const cursor = await this.customer.find(filter);
        return await cursor.toArray();
    }

    async findByName(name) {
        return await this.find({
            name: { $regex: new RegExp(name), $options: "i" },
        });
    }

    async findById(id) {
        return await this.customer.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    //Update
    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractConactData(payload);
        const result = await this.customer.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        return result.value;
    }

    //Deleted
    async delete(id) {
        const result = await this.customer.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        return result.value;
    }

    //deletedAll
    async deleteAll() {
        const result = await this.customer.deleteMany({});
        return result.deletedCount;
    }
}

module.exports = CustomerService;
