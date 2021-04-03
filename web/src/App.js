import React from 'react';
import PanelCard from 'Components/Panel/Card/Card';

const App = () => {

  const panel = {
    "id": 1,
    "title": "Bleach",
    "episodes": 366,
    "imageUrl": "https://sucodemanga.com.br/wp-content/uploads/2020/03/bleach.jpg",
    "url": "https://www.crunchyroll.com/pt-br/bleach",
    "comments": [
      {
        "id": 1,
        "comment": "Alguém cancela a Inoue?"
      }
    ]
  };

  return (
    <div className="App" style={{
      maxWidth: 800,
      margin: '30px auto',
    }}>
      <PanelCard panel={panel} />
    </div>
  );
}

export default App;
