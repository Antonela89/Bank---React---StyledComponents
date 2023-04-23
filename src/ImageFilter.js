import React from 'react';
import alimentacion from './assets/images/alimentacion.svg';
import salud from './assets/images/salud.svg';
import otros from './assets/images/otros.svg';
import transporte from './assets/images/transporte.svg';
import utilidades from './assets/images/utilidades.svg';
import { IconoTema } from './Components/UI'

// eslint-disable-next-line import/no-anonymous-default-export
export default (type) => {
    const Images = {
        Restaurante: <IconoTema src={alimentacion} alt="alimentacion" />,
        Salud: <IconoTema src={salud} alt="salud" />,
        Transporte: <IconoTema src={transporte} alt="transporte" />,
        Utilidades: <IconoTema src={utilidades} alt="utilidades" />,
        default: <IconoTema src={otros} alt="otros" />
    }

    return Images[type] || Images['default'];
};