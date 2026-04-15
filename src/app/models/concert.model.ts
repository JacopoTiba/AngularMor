export class ConcertModel {
    public id?: string;
    public cantante: string;
    public data: string;
    public genere: string;
    public sede: {
        citta: string;
        struttura: string;
        nPosti: number;
    };
    public dettagli: string;
    public postiPrenotati: number;

    constructor(
        cantante: string,
        data: string,
        genere: string,
        sede: { citta: string; struttura: string; nPosti: number },
        dettagli: string,
        postiPrenotati: number
    ) {
        this.cantante = cantante;
        this.data = data;
        this.genere = genere;
        this.sede = sede;
        this.dettagli = dettagli;
        this.postiPrenotati = postiPrenotati;
    }
}
