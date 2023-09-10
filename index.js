const express = require('express');
const app = express();
const moment = require('moment')
const port = process.env.PORT || 5000;

// Endpoint route
app.get('/api', (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track;
  const now = moment();

  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const utcTime = new Date().toISOString();

  const githubFileUrl = 'https://github.com/Samphomen/zuri001/blob/master/index.js';
  const githubRepoUrl = 'https://github.com/Samphomen/zuri001.git';

  res.status(200).json({
    slack_name: slackName,
    current_day: currentDay,
    utc_time: now.utc().format(),
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});