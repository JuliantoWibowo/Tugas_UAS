import React from 'react';

//import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';
//import Blog from './Component/Fungsional/Blog';
import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';
import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import SparepartComp from './Component/Fungsional/SparepartComp';
import EditComp from './Component/Class/EditComp';
import ListBanComp from './Component/Class/ListBanComp'
import TambahBanComp from './Component/Class/TambahBanComp';
import EditBanComp from './Component/Class/EditBanComp';
import ListOliComp from './Component/Class/ListOliComp';
import TambahOliComp from './Component/Class/TambahOliComp';
import EditOliComp from './Component/Class/EditOliComp';
import ListKnalpotComp from './Component/Class/ListKnalpotComp';
import TambahKnalpotComp from'./Component/Class/TambahKnalpotComp';
import EditKnalpotComp from './Component/Class/EditKnalpotComp';
import ListRanteComp from './Component/Class/ListRanteComp';
import TambahRanteComp from './Component/Class/TambahRanteComp';
import EditRanteComp from './Component/Class/EditRanteComp';
import ListSuplierComp from './Component/Class/ListSuplierComp';
import TambahSuplierComp from './Component/Class/TambahSuplierComp';
import EditSuplierComp from './Component/Class/EditSuplierComp';
import LoginComp from'./Component/Fungsional/LoginComp';
import DaftarComp from './Component/Fungsional/DaftarComp';

//import './App.css';

const App = () => {
  return (
   <BrowserRouter>
      <NavbarComp/>
      <Switch>
        <Route exact path="/" component={LoginComp}/>
        <Route exact path="/daftar" component={DaftarComp}/>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/Karyawan" component={ListComp}/>
        <Route exact path="/Karyawan/tambah" component={TambahComp}/>
        <Route exact path="/Karyawan/edit" component={EditComp}/>
        <Route exact path="/sparepart" component={SparepartComp}/>
        <Route exact path="/sparepart/ban" component={ListBanComp}/>
        <Route exact path="/sparepart/ban/tambahban" component={TambahBanComp}/>
        <Route exact path="/sparepart/ban/edit" component={EditBanComp}/>
        <Route exact path="/sparepart/oli" component={ListOliComp}/>
        <Route exact path="/sparepart/oli/tambaholi" component={TambahOliComp}/>
        <Route exact path="/sparepart/oli/edit" component={EditOliComp}/>
        <Route exact path="/sparepart/knalpot" component={ListKnalpotComp}/>
        <Route exact path="/sparepart/knalpot/tambahknalpot" component={TambahKnalpotComp}/>
        <Route exact path="/sparepart/knalpot/edit" component={EditKnalpotComp}/>
        <Route exact path="/sparepart/rante" component={ListRanteComp}/>
        <Route exact path="/sparepart/rante/tambahrante" component={TambahRanteComp}/>
        <Route exact path="/sparepart/rante/edit" component={EditRanteComp}/>
        <Route exact path="/suplier" component={ListSuplierComp}/>
        <Route exact path="/suplier/tambahsuplier" component={TambahSuplierComp}/>
        <Route exact path="/suplier/edit" component={EditSuplierComp}/>
        
        {/* <Route exact path="/detail:id" component={DetailComp}/> */}
        
      </Switch>
</BrowserRouter>
    
  );
}

export default App;
