const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors package

const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors());  // This will allow requests from all origins (you can restrict to specific domains if needed)

// Parse JSON bodies for incoming requests
app.use(express.json());

// Handle the post request for getting job listings
app.post('/get-jobs', async (req, res) => {
  const { roles } = req.body;

  try {
    const jobData = await fetchJobListings(roles);
    res.json({ jobs: jobData });
  } catch (error) {
    console.error('Error fetching job listings:', error);
    res.status(500).send('Error fetching job listings');
  }
});

// Function to fetch job listings from Indeed API
const fetchJobListings = async (roles) => {
    try {
      const jobData = [];
      for (const role of roles) {
        const response = await axios.get('https://indeed-indeed.p.rapidapi.com/apisearch', {
          params: {
            q: role,
            l: 'austin, tx',
            radius: '25',
          },
          headers: {
            'x-rapidapi-key': 'ea0bff13b2msh9bbcbd2cbf40a98p1fdc69jsnb571eb511774',
            'x-rapidapi-host': 'indeed-indeed.p.rapidapi.com',
          },
        });
  
        if (response.status === 200) {
          jobData.push({
            role,
            jobs: response.data.results,
          });
        } else {
          console.error(`Error: ${response.status} - ${response.statusText}`);
          throw new Error('Failed to fetch job listings from Indeed');
        }
      }
      return jobData;
    } catch (error) {
      console.error('Error fetching job listings:', error);
      throw error;
    }
  };
  
// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
