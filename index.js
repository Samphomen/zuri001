const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Endpoint route
app.get('/api', (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;

  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const utcTime = new Date().toISOString();

  const githubFileUrl = 'https://github.com/Samphomen/zuri001/blob/master/index.js';
  const githubRepoUrl = 'https://github.com/Samphomen/zuri001.git';


  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.status(200).json(response);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});