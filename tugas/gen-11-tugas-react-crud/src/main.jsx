import './index.css';


import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home';
import MahasiswaForm from './pages/MahasiswaForm';
import MahasiswaList from './pages/MahasiswaList';
import MahasiswaDetail from './pages/MahasiswaDetail';
import MahasiswaEdit from './pages/MahasiswaEdit';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    path: '/mahasiswa', children: [
      { path: "", element: <MahasiswaList /> },
      { path: 'tambah', element: <MahasiswaForm /> },
      { path: ':mahasiswaId', element: <MahasiswaDetail /> },
      { path: 'edit/:mahasiswaId', element: <MahasiswaEdit /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);