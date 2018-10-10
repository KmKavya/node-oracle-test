
var sequelize=require('./connect');
console.log(sequelize);


module.exports.Dao = function (model, schema) {

  // The schema defined for the model
  // this.schema = schema;
  // // The name of the colleciton created inside Mongo (without the 's')
  // this.collectionName = model;
  // // define the mongo collection/model
  // this.objectModel = mongoose.model(model, schema);
  this.Entity = sequelize.define(model, schema);
  // define the mongo collection/model
  // objectModel = model;

  // Saves the sweSetup object to the database and returns a Promise
  // The assumption here is that the Object is valid
  // if it fails schema validation it will throw an exception
  this.save = function (result) {
    // debug(`DB save method.  result :${result} is a parameter `);
    return this.Entity.create(result);
  };

  this.findAll=function () {
    return this.Entity.findAll()
  }
}