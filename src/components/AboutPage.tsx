import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, laboriosam! Dolor atque molestias impedit sequi modi laborum illum odio eum dicta quisquam totam ullam accusantium eligendi, quo praesentium tempore corrupti!
      </p>
      <button className="btn" onClick={() => history.push('/')}>Обратно к списку дел</button>
    </>
  )
}
