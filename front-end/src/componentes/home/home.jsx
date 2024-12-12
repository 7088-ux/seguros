import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const translations = {
    Español: {
        login: 'Login',
        changeLanguage: 'Cambiar Idioma',
        reserveAppointment: 'Reservar Cita',
        treatmentPlaceholder: 'Tratamiento',
        areaPlaceholder: 'Área o distrito',
        dniPlaceholder: 'DNI',
        searchButton: 'Buscar Cita',
        selectLanguage: 'Seleccione un Idioma'
    },
    Inglés: {
        login: 'Login',
        changeLanguage: 'Change Language',
        reserveAppointment: 'Book Appointment',
        treatmentPlaceholder: 'Treatment',
        areaPlaceholder: 'Area or district',
        dniPlaceholder: 'ID',
        searchButton: 'Search Appointment',
        selectLanguage: 'Select a Language'
    }
};

const Home = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [language, setLanguage] = useState('Español');

    const handleLogin = () => {
        navigate('/login');
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
        toggleModal(); // Cierra el modal después de seleccionar un idioma
    };

    const t = translations[language];

    return (
        <div className="home-container">
            <header className="navbar">
                <h1 className="logo">MediCenter</h1>
                <button className="btn-login" onClick={handleLogin}>{t.login}</button>
                <button className="btn-Idioma" onClick={toggleModal}>{t.changeLanguage}</button>
            </header>
            <div className="reservation-section">
                <h2><i className="fas fa-calendar-alt"></i> {t.reserveAppointment}</h2>
                <div className="filters">
                    <input type="text" placeholder={t.treatmentPlaceholder} className="filter-btn" />
                    <input type="text" placeholder={t.areaPlaceholder} className="filter-btn" />
                    <input type="text" placeholder={t.dniPlaceholder} className="filter-btn" />
                </div>
                <button className="btn-reservar">{t.searchButton}</button>
            </div>

            {/* Modal para cambiar idioma */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>{t.selectLanguage}</h2>
                        <button className="btn-language" onClick={() => changeLanguage('Español')}>Español</button>
                        <button className="btn-language" onClick={() => changeLanguage('Inglés')}>Inglés</button>
                        <button className="btn-close" onClick={toggleModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;