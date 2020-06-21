import React from 'react';

export const QueryResult: React.FC<{ data: object; error?: object; loading: boolean }> = ({
  data,
  error,
  loading,
}) => {
  if (loading) return <div>loading...</div>;
  if (error) {
    return (
      <div style={{ color: 'red' }}>
        <pre>{JSON.stringify(error, null, '  ')}</pre>
      </div>
    );
  }
  return (
    <div>
      <pre>{JSON.stringify(data, null, '  ')}</pre>
    </div>
  );
};
