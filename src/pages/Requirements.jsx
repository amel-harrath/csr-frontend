import React, { useEffect, useState } from 'react';
import api from '../api';

const Requirements = () => {
  const [requirements, setRequirements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get('/requirements')
      .then((res) => {
        setRequirements(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Error fetching requirements');
        setLoading(false);
      });
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Requirements</h1>
      <ul>
        {loading ? (
          <p>Loading requirements...</p>
        ) : (
          requirements.map((r) => (
            <li key={r.id}>
              {r.name} — <strong>{r.status}</strong>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default Requirements;
