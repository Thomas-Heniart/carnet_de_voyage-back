import AWS from 'aws-sdk';
import fs from 'fs';

AWS.config.update({region: 'us-east-1'});

// Create S3 service object
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

const params = {
    Bucket: 'carnet-de-voyage',
    Prefix: 'medias/'
};

s3.listObjectsV2(params, (err, data) => {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});
