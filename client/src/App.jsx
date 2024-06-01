import './App.css'
import Header from './components/Header'
import Pdf2Docx from './components/Pdf2Docx'
import Footer from './components/Footer'

function App() {

  return (
    <div className='flex flex-col justify-between items-center h-screen'>
      <Header />
      <Pdf2Docx />
      <Footer />
    </div>
  )
}

export default App
