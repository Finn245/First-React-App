import { useEffect, useState } from 'react';

export const Image = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/photos',
          { mode: 'cors' }
        );
        if (!response.ok) {
          throw new Error('server error');
        }
        const data = await response.json();
        setImageURL(data[0].url);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1>An image</h1>
      <img src={imageURL} alt={'placeholder text'} />
    </>
  );
};
