import './App.css';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import SignUp from './components/pages/signupPage';
import ProjectSlotBooking from './components/pages/paymentAndInvoices';
import Subscription from './components/pages/SubscriptionPage';
import ProjectDashboard from './components/pages/projectsPage';
import Homepage from './components/pages/homepage';
import LogInPage from './components/pages/LoginPage';
import ProtectedRoute from './components/utils/ProtectedRoute';
import { useSelector } from 'react-redux';

function App() {
  const {auth} = useSelector(strore=>strore);
  return (
    <div className=' relative'>
      {auth.isLoading &&
            <div className=" bg-black z-50 flex flex-col gap-7 justify-center items-center h-screen w-screen absolute top-1 left-0">
        <div class="loader"></div>
        <p className=' text-2xl text-[rgba(155,225,63,1)]'>Arevei</p>
        </div>}
    <Router>
    <Routes>
    <Route path='/' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}>
        <Route path='' element={<Homepage/>}/>
        <Route path='paymentInvoices' element={<ProjectSlotBooking/>}/>
        <Route path='subscription' element={<Subscription/>}/>
        <Route path='trackProgess' element={<ProjectDashboard/>}/>
    </Route>
    <Route path='/register' element={<SignUp/>}/>
    <Route path='/login' element={<LogInPage/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
