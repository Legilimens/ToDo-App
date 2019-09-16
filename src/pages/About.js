import React from 'react';

export const About = () => (
    <div className="jumbotron">
        <div className="container">
            <h1 className="display-5">О приложении</h1>
            <p className="lead">Список дел</p>
            <small>Тестовое задание для вступления в группу курсов React от ГК "ЛАД". {new Date().getFullYear()}</small>
        </div>
    </div>
)