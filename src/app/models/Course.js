const { default: mongoose } = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongoseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
    count: { type: String },
    createBy: { type: String },
}, {
    timestamps: true,
});


mongoose.plugin(slug);
Course.plugin(mongoseDelete,
    {
        deletedAt: true,
        overrideMethods: 'all'
    });

module.exports = mongoose.model('Course', Course);