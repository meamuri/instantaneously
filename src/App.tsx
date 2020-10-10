import React from 'react'
import './App.css'
import InstantViewModel from './lib/InstantViewModel'
import { InstantModel } from './lib/InstantModel'

function App() {
    let model = new InstantModel()
    return <InstantViewModel instantModel={model}/>
}

export default App;
