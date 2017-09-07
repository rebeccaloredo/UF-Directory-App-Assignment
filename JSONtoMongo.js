'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri);
/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */

 fs.readFile('listings.json', (err, data) => {

  if (err) {
    throw err;
  }

  const entities = JSON.parse(data).entries;

  for (let i = 0; i < entities.length; i++) {
    new Listing(entities[i])
      .save((err, listing) => {

        if(err) {
          throw err;
        }

        console.log(`Saved ${listing.code} ${listing.name}`);

        if (i === entities.length - 1) {
          console.log('Saving Complete!');

          process.exit(0);
        }
      });
  }

});


/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
