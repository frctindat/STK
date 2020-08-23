import { componente } from '../Compartidos/componente.model';

export class Equipo {
    public Id: number;
    public Proveedor: string;
    public Categ: string;          
    public Descripcion: string;
    public PVenta: number;
    public Foto: string ;
    public Componentes: componente[]

    constructor(pId: number, 
                pProvee: string,
                pCateg: string,
                pDescrip: string,
                pPVenta: number,
                pFoto: string,
                pComponentes: componente[]) {

                    this.Id = pId;
                    this.Proveedor = pProvee;
                    this.Categ = pCateg;
                    this.Descripcion = pDescrip;
                    this.PVenta = pPVenta; 
                    this.Foto = pFoto;
                    this.Componentes = pComponentes;
                }
}