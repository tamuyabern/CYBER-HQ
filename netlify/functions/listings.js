<<<<<<< HEAD
// netlify/functions/listings.js
const fetch = require("node-fetch");

exports.handler = async () => {
  try {
    const formName = "marketplace"; // your Netlify form name
    const token = "nfp_6jmDf9JpNw4mPUFe9BycSAokGinWNo6w29ec"; // your token

    const url = `https://api.netlify.com/api/v1/forms/${formName}/submissions`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch form submissions: ${response.status}`);
    }

    const submissions = await response.json();

    // Transform submissions to include image URLs if present
    const formatted = submissions.map(sub => {
      let imageURL = "";
      if (sub.files && sub.files.length) {
        imageURL = sub.files[0].url; // get first uploaded image
      }
      return {
        data: sub.data,
        image: imageURL
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(formatted),
    };

  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
=======
// netlify/functions/listings.js
const fetch = require("node-fetch");

exports.handler = async () => {
  try {
    const formName = "marketplace"; // your Netlify form name
    const token = "nfp_6jmDf9JpNw4mPUFe9BycSAokGinWNo6w29ec"; // your token

    const url = `https://api.netlify.com/api/v1/forms/${formName}/submissions`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch form submissions: ${response.status}`);
    }

    const submissions = await response.json();

    // Transform submissions to include image URLs if present
    const formatted = submissions.map(sub => {
      let imageURL = "";
      if (sub.files && sub.files.length) {
        imageURL = sub.files[0].url; // get first uploaded image
      }
      return {
        data: sub.data,
        image: imageURL
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(formatted),
    };

  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
>>>>>>> f52bf5085d384bb0110a3c36d8657fbed505b151
