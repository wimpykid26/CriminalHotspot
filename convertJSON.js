const csvFilePath='sample.csv'
const csv=require('csvtojson')

module.exports = {
  convert: function() {
    const arrayofjson = [];
    csv()
    .fromFile(csvFilePath)
    .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      console.log(jsonObj)
      arrayofjson.push(jsonObj);
    })
    .on('done',(error)=>{
      console.log('end')
    })
    return arrayofjson
  }
};
