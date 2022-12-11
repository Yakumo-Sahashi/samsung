import React from 'react';
import ReactDOM from 'react-dom/client';
import $ from 'jquery';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {App} from './App';
import {Loader} from './components/Loader';

window.onload = () => {
	let carga = document.getElementById('contenedor');
	carga.style.visibility = 'hidden';
	carga.style.opacity = '0';
}

$(document).ready(() => {
	let altura = $('.menu').offset().top;
	$(window).on('scroll', () => {
		if ($(window).scrollTop() > altura) {
			$('.menu').addClass('menu-fixed');
			$('.menu').removeClass('bg-transparente').addClass('bg-azul');
		} else {
			$('.menu').removeClass('menu-fixed');
			$('.menu').removeClass('bg-azul').addClass('bg-transparente');
		}
	});
});

window.onscroll = () => {
    if(document.documentElement.scrollTop > 100 ) {
        $('.go-top-container').addClass('show');
    }else{
        $('.go-top-container').removeClass('show');
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Loader/>
    <App />
  </React.StrictMode>
);