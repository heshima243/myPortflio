import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Project = () => {
  const [repos, setRepos] = useState([]);

  const githubToken = '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';

  useEffect(() => {
    axios
      .get('https://api.github.com/user/repos', {
        headers: {
          Authorization: `token ${githubToken}`,
        },
      })
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.error('Erreur :', error);
      });
  }, [githubToken]);

  return (
    <div>
      <h1>Mes dépôts GitHub</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
