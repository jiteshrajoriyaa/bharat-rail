import './App.css'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import allPages from './pages/all_pages'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
 
  const {Home,
    CancelledTrain,
    LiveTrainStatus,
    StationCodeToName,
    StationNameToCode,
    TrainBetweenStation,
    TrainFare,
    TrainNameToNo,
    TrainNoInformation,
    TrainNoToName,
    TrainSchedule,} = allPages

  return (
    <>
      <BrowserRouter>
      <Header />
     <Routes >
          <Route path='/' element = {<Home />} />
          <Route path='/CancelledTrain' element = {<CancelledTrain />} />
          <Route path='/TrainSchedule' element = {<TrainSchedule />} />
          <Route path='/TrainNoToName' element = {<TrainNoToName />} />
          <Route path='/TrainNoInformation' element = {<TrainNoInformation />} />
          <Route path='/TrainNameToNo' element = {<TrainNameToNo />} />
          <Route path='/TrainFare' element = {<TrainFare />} />
          <Route path='/TrainBetweenStation' element = {<TrainBetweenStation />} />
          <Route path='/LiveTrainStatus' element = {<LiveTrainStatus />} />
          <Route path='/StationCodeToName' element = {<StationCodeToName />} />
          <Route path='/StationNameToCode' element = {<StationNameToCode />} />
     </Routes>
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
