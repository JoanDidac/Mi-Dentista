import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const OUTPUT_FILE = path.join(__dirname, '../src/data/google-stats.json');

if (!API_KEY) {
  console.error("Error: GOOGLE_MAPS_API_KEY is not set.");
  process.exit(1);
}

if (!PLACE_ID) {
  console.error("Error: GOOGLE_PLACE_ID is not set.");
  process.exit(1);
}

const options = {
  hostname: 'places.googleapis.com',
  path: `/v1/places/${PLACE_ID}`,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': API_KEY,
    'X-Goog-FieldMask': 'rating,userRatingCount'
  }
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      if (res.statusCode !== 200) {
        throw new Error(`API Error: ${res.statusCode} - ${data}`);
      }

      const response = JSON.parse(data);
      
      // New Places API response structure: { rating: number, userRatingCount: number }
      const stats = {
        totalReviews: response.userRatingCount || 0,
        averageRating: response.rating || 0,
        lastUpdated: new Date().toISOString().split('T')[0]
      };

      console.log('Writing stats to file:', stats);
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(stats, null, 2));
      console.log('Successfully updated google-stats.json');

    } catch (error) {
      console.error('Error processing data:', error.message);
      process.exit(1);
    }
  });

});

req.on('error', (err) => {
  console.error('Network Error:', err.message);
  process.exit(1);
});

req.end();
