import List from '../List/List';
import './Home.css';
import React from "react";
import Card from '../Card/Card';


function Home() {
 
  return (

    <div className='home-comp'>
   <div className='material'>Полезные материалы</div>
   <div className='text'>Собрали для вас полезные исследования схемы кормления и другие материалы, к
    оторые пригодятся для лучших результатов на вашем хозяйстве</div>
    <List
    Component={Card}
    />
    </div>
  );
}

export default Home;
