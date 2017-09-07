/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Listing = require('./ListingSchema.js'),
      config = require('./config');

mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
   Listing.find({ name: 'Library West' }, function(err, result) {
    if (err){
      throw err;
    }
    console.log(result);
  });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
   Listing.findOne({code: 'CABL'}, function(err, result) {
   if (err){
     throw err;
   }
   if(result){
     result.remove(function(err){
     if(err) {
       throw err;
     }
     console.log(result);
    });
   }
 });

};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
   Listing.findOneAndUpdate({ name: "Phelps Laboratory" }, { address: "6500 Collins Ave, Miami Beach, FL 33141"},
   function(err, listing) {
      if (err) {
        throw err;
      }
    });

    // After it's been updated, we have to find it again so that the values are updated
    Listing.find({ name: 'Phelps Laboratory' }, function(err, listing) {
      if (err) {
        throw err;
      }
      console.log(listing);
    });
};

var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({}, function(err,entries){
    if(err){
      throw err;
    }
    console.log(entries);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
