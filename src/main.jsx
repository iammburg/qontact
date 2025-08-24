import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/styles.css';
import Layout from './components/Layout';
import UserRegister from './components/User/UserRegister';
import { BrowserRouter, Route, Routes } from 'react-router';
import UserLogin from './components/User/UserLogin';
import DashboardLayout from './components/DashboardLayout';
import UserProfile from './components/User/UserProfile';
import UserLogout from './components/User/UserLogout';
import ContactCreate from './components/Contact/ContactCreate';
import ContactList from './components/Contact/ContactList';
import ContactEdit from './components/Contact/ContactEdit';
import ContactDetail from './components/Contact/ContactDetail';
import AddressCreate from './components/Address/AddressCreate';
import AddressEdit from './components/Address/AddressEdit';
import Home from './Home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>

        <Route element={<Layout />}>
          <Route path="/register" element={<UserRegister />}></Route>
          <Route path="/login" element={<UserLogin />}></Route>
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="users">
            <Route path="profile" element={<UserProfile />}></Route>
            <Route path="logout" element={<UserLogout />}></Route>
          </Route>
          <Route path="contacts">
            <Route index element={<ContactList />}></Route>
            <Route path="create" element={<ContactCreate />}></Route>
            <Route path=":id">
              <Route index element={<ContactDetail />}></Route>
              <Route path="edit" element={<ContactEdit />}></Route>
              <Route path="addresses">
                <Route path="create" element={<AddressCreate />}></Route>
                <Route path=":addressId/edit" element={<AddressEdit />}></Route>
              </Route>
            </Route>
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
