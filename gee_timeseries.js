
// load the LandTrendr.js module
var batch = require('users/fitoprincipe/geetools:batch');
var ltgee = require('users/emaprlab/public:Modules/LandTrendr.js'); 

// define collection parameters
var startYear = 1984;
var endYear = 2024;
//var aoi = ee.Geometry.Point(-122.8848, 43.7929);
var index = 'NDVI';
var maskThese = ['cloud', 'shadow', 'snow', 'water'];

var startDay = '01-01';
var endDay = '02-01';
var annualSRcollection_january = ltgee.buildSRcollection(startYear, endYear, startDay, endDay, aoi, maskThese);
// get a landsat collection with cloud masked data
var annualSRcollection_january = annualSRcollection_january.map(function(img){
  var ndvi = img.normalizedDifference(['B5','B4']).rename('NDVI');
  return img.addBands(ndvi);
});

print(annualSRcollection_january)
var startDay = '02-01';
var endDay = '03-01';
var annualSRcollection_february = ltgee.buildSRcollection(startYear, endYear, startDay, endDay, aoi, maskThese);
// get a landsat collection with cloud masked data
var annualSRcollection_february = annualSRcollection_february.map(function(img){
  var ndvi = img.normalizedDifference(['B5','B4']).rename('NDVI');
  return img.addBands(ndvi);
});

var startDay = '03-01';
var endDay = '04-01';
var annualSRcollection_march = ltgee.buildSRcollection(startYear, endYear, startDay, endDay, aoi, maskThese);
// get a landsat collection with cloud masked data
var annualSRcollection_march = annualSRcollection_march.map(function(img){
  var ndvi = img.normalizedDifference(['B5','B4']).rename('NDVI');
  return img.addBands(ndvi);
});


var startDay = '04-01';
var endDay = '05-01';
var annualSRcollection_april = ltgee.buildSRcollection(startYear, endYear, startDay, endDay, aoi, maskThese);
var annualSRcollection_april = annualSRcollection_april.map(function(img){
  var ndvi = img.normalizedDifference(['B5','B4']).rename('NDVI');
  return img.addBands(ndvi);
});


var startDay = '05-01';
var endDay = '06-01';
var annualSRcollection_may = ltgee.buildSRcollection(startYear, endYear, startDay, endDay, aoi, maskThese);
var annualSRcollection_may = annualSRcollection_may.map(function(img){
  var ndvi = img.normalizedDifference(['B5','B4']).rename('NDVI');
  return img.addBands(ndvi);
});

var startDay = '06-01';
var endDay = '07-01';
var annualSRcollection_june = ltgee.buildSRcollection(startYear, endYear, startDay, endDay, aoi, maskThese);
var annualSRcollection_june = annualSRcollection_june.map(function(img){
  var ndvi = img.normalizedDifference(['B5','B4']).rename('NDVI');
  return img.addBands(ndvi);
});

var startDay = '07-01';
var endDay = '08-01';
var annualSRcollection_july = ltgee.buildSRcollection(startYear, endYear, startDay, endDay, aoi, maskThese);
var annualSRcollection_july = annualSRcollection_july.map(function(img){
  var ndvi = img.normalizedDifference(['B5','B4']).rename('NDVI');
  return img.addBands(ndvi);
});

var startDay = '08-01';
var endDay = '09-01';
var annualSRcollection_august = ltgee.buildSRcollection(startYear, endYear, startDay, endDay, aoi, maskThese);
var annualSRcollection_august = annualSRcollection_august.map(function(img){
  var ndvi = img.normalizedDifference(['B5','B4']).rename('NDVI');
  return img.addBands(ndvi);
});

var startDay = '09-01';
var endDay = '10-01';
var annualSRcollection_september = ltgee.buildSRcollection(startYear, endYear, startDay, endDay, aoi, maskThese);
var annualSRcollection_september = annualSRcollection_september.map(function(img){
  var ndvi = img.normalizedDifference(['B5','B4']).rename('NDVI');
  return img.addBands(ndvi);
});


var startDay = '10-01';
var endDay = '11-01';
var annualSRcollection_october = ltgee.buildSRcollection(startYear, endYear, startDay, endDay, aoi, maskThese);
var annualSRcollection_october = annualSRcollection_october.map(function(img){
  var ndvi = img.normalizedDifference(['B5','B4']).rename('NDVI');
  return img.addBands(ndvi);
});

var startDay = '11-01';
var endDay = '12-01';
var annualSRcollection_november = ltgee.buildSRcollection(startYear, endYear, startDay, endDay, aoi, maskThese);
var annualSRcollection_november = annualSRcollection_november.map(function(img){
  var ndvi = img.normalizedDifference(['B5','B4']).rename('NDVI');
  return img.addBands(ndvi);
});

var startDay = '12-01';
var endDay = '12-31';
var annualSRcollection_december = ltgee.buildSRcollection(startYear, endYear, startDay, endDay, aoi, maskThese);
// get a landsat collection with cloud masked data
var annualSRcollection_december = annualSRcollection_december.map(function(img){
  var ndvi = img.normalizedDifference(['B5','B4']).rename('NDVI');
  return img.addBands(ndvi);
});

function combineAnnualImages(collection, startYear, endYear) {
  var firstYearImage = ee.Image(collection.filter(ee.Filter.eq('composite_year', startYear)).first())
    .select(['NDVI'], ['NDVI_' + startYear]);

  var combinedImage = ee.Image(firstYearImage);

  for (var year = startYear + 1; year <= endYear; year++) {
    var annualImage = ee.Image(collection.filter(ee.Filter.eq('composite_year', year)).first())
      .select(['NDVI'], ['NDVI_' + year]);

    combinedImage = combinedImage.addBands(annualImage);
  }

  return combinedImage;
}

// // Combine the images from annualSRcollection_february
// var combinedNDVIImage_january = combineAnnualImages(annualSRcollection_january, startYear, endYear);

// // Export the combined image to Google Drive
// var exportName = 'Combined_NDVI_January';

// Export.image.toDrive({
//   image: combinedNDVIImage_january,
//   description: exportName,
//   folder: 'GEE_Exports',
//   fileNamePrefix: exportName,
//   region: aoi,
//   scale: 30,
//   maxPixels: 1e9,
//   fileFormat: 'GeoTIFF'
// });

// // Combine the images from annualSRcollection_february
// var combinedNDVIImage_february = combineAnnualImages(annualSRcollection_february, startYear, endYear);

// // Export the combined image to Google Drive
// var exportName = 'Combined_NDVI_February';

// Export.image.toDrive({
//   image: combinedNDVIImage_february,
//   description: exportName,
//   folder: 'GEE_Exports',
//   fileNamePrefix: exportName,
//   region: aoi,
//   scale: 30,
//   maxPixels: 1e9,
//   fileFormat: 'GeoTIFF'
// });
print(annualSRcollection_march)
// // Combine the images from annualSRcollection_march
// var combinedNDVIImage_march = combineAnnualImages(annualSRcollection_march, startYear, endYear);

// // Export the combined image to Google Drive
// var exportName = 'Combined_NDVI_March';

// Export.image.toDrive({
//   image: combinedNDVIImage_march,
//   description: exportName,
//   folder: 'GEE_Exports',
//   fileNamePrefix: exportName,
//   region: aoi,
//   scale: 30,
//   maxPixels: 1e9,
//   fileFormat: 'GeoTIFF'
// });

// // Combine the images from annualSRcollection_march
// var combinedNDVIImage_april = combineAnnualImages(annualSRcollection_april, startYear, endYear);

// // Export the combined image to Google Drive
// var exportName = 'Combined_NDVI_April';

// Export.image.toDrive({
//   image: combinedNDVIImage_april,
//   description: exportName,
//   folder: 'GEE_Exports',
//   fileNamePrefix: exportName,
//   region: aoi,
//   scale: 30,
//   maxPixels: 1e9,
//   fileFormat: 'GeoTIFF'
// });

// // Combine the images from annualSRcollection_march
// var combinedNDVIImage_may = combineAnnualImages(annualSRcollection_may, startYear, endYear);

// // Export the combined image to Google Drive
// var exportName = 'Combined_NDVI_May';

// Export.image.toDrive({
//   image: combinedNDVIImage_may,
//   description: exportName,
//   folder: 'GEE_Exports',
//   fileNamePrefix: exportName,
//   region: aoi,
//   scale: 30,
//   maxPixels: 1e9,
//   fileFormat: 'GeoTIFF'
// });

// // Combine the images from annualSRcollection_march
// var combinedNDVIImage_june = combineAnnualImages(annualSRcollection_june, startYear, endYear);

// // Export the combined image to Google Drive
// var exportName = 'Combined_NDVI_June';

// Export.image.toDrive({
//   image: combinedNDVIImage_june,
//   description: exportName,
//   folder: 'GEE_Exports',
//   fileNamePrefix: exportName,
//   region: aoi,
//   scale: 30,
//   maxPixels: 1e9,
//   fileFormat: 'GeoTIFF'
// });

// // Combine the images from annualSRcollection_march
// var combinedNDVIImage_july = combineAnnualImages(annualSRcollection_july, startYear, endYear);

// // Export the combined image to Google Drive
// var exportName = 'Combined_NDVI_July';

// Export.image.toDrive({
//   image: combinedNDVIImage_july,
//   description: exportName,
//   folder: 'GEE_Exports',
//   fileNamePrefix: exportName,
//   region: aoi,
//   scale: 30,
//   maxPixels: 1e9,
//   fileFormat: 'GeoTIFF'
// });

// // Combine the images from annualSRcollection_march
// var combinedNDVIImage_august = combineAnnualImages(annualSRcollection_august, startYear, endYear);

// // Export the combined image to Google Drive
// var exportName = 'Combined_NDVI_August';

// Export.image.toDrive({
//   image: combinedNDVIImage_august,
//   description: exportName,
//   folder: 'GEE_Exports',
//   fileNamePrefix: exportName,
//   region: aoi,
//   scale: 30,
//   maxPixels: 1e9,
//   fileFormat: 'GeoTIFF'
// });

// // Combine the images from annualSRcollection_march
// var combinedNDVIImage_september = combineAnnualImages(annualSRcollection_september, startYear, endYear);

// // Export the combined image to Google Drive
// var exportName = 'Combined_NDVI_September';

// Export.image.toDrive({
//   image: combinedNDVIImage_september,
//   description: exportName,
//   folder: 'GEE_Exports',
//   fileNamePrefix: exportName,
//   region: aoi,
//   scale: 30,
//   maxPixels: 1e9,
//   fileFormat: 'GeoTIFF'
// });

// // Combine the images from annualSRcollection_march
// var combinedNDVIImage_october = combineAnnualImages(annualSRcollection_october, startYear, endYear);

// // Export the combined image to Google Drive
// var exportName = 'Combined_NDVI_October';

// Export.image.toDrive({
//   image: combinedNDVIImage_october,
//   description: exportName,
//   folder: 'GEE_Exports',
//   fileNamePrefix: exportName,
//   region: aoi,
//   scale: 30,
//   maxPixels: 1e9,
//   fileFormat: 'GeoTIFF'
// });

// // Combine the images from annualSRcollection_march
// var combinedNDVIImage_november = combineAnnualImages(annualSRcollection_november, startYear, endYear);

// // Export the combined image to Google Drive
// var exportName = 'Combined_NDVI_November';

// Export.image.toDrive({
//   image: combinedNDVIImage_november,
//   description: exportName,
//   folder: 'GEE_Exports',
//   fileNamePrefix: exportName,
//   region: aoi,
//   scale: 30,
//   maxPixels: 1e9,
//   fileFormat: 'GeoTIFF'
// });

// // Combine the images from annualSRcollection_february
// var combinedNDVIImage_december = combineAnnualImages(annualSRcollection_december, startYear, endYear);

// // Export the combined image to Google Drive
// var exportName = 'Combined_NDVI_December';

// Export.image.toDrive({
//   image: combinedNDVIImage_december,
//   description: exportName,
//   folder: 'GEE_Exports',
//   fileNamePrefix: exportName,
//   region: aoi,
//   scale: 30,
//   maxPixels: 1e9,
//   fileFormat: 'GeoTIFF'
// });
