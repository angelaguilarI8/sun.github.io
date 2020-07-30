import { Users } from './interface-user';

export interface Productos {
    id?: string;
    ubicacion: string;
    tipoSocio?: string;
    tipoNegocio: string;
    montoInversion?: number;
    ventaMensual?: number;
    gastoOperacion?: number;
    nombreNegocio: string;
    descipcion: string;
    competidores?: string;
    porcentajeUtilidad?: number;
    montoTraspaso?: number;
    montoTotalMobilario?: number;
    idUs: Users[]; 
}