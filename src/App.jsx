import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import events from './components/Events';
import FoodTruckCard from './components/Foodtruck'

function App() {
return (
    <div>
      <Header />
      <div className="app-grid">
      {events.map((event) => (
        <FoodTruckCard key={event.name} {...event} />
      ))} 
      </div> 
      </div>
  )
}
export default App;
