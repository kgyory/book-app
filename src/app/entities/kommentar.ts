import { Guid } from 'guid-typescript';

export interface Kommentar {
    id: Guid;

    title: string;
    name: string;
    userId: string;
    kommentar: string;

    erstellt: Date;
    weitereKommentare: Kommentar[];
}

export interface KommentarNeu extends Kommentar {
    übergeordneterKommentarId: Guid | undefined;
    schreibSchlüssel: Guid;
}

export function KommentarNeuInitial(
        userId: string,
        name: string
    ): KommentarNeu {
    let guid = Guid.create();
    return {
        id: guid,
        title: "",
        name: name,
        userId: userId,
        kommentar: "",
        erstellt: new Date(),
        weitereKommentare: [],
        übergeordneterKommentarId: undefined,
        schreibSchlüssel: guid
    }
}

export interface KommentarServiceMsg {
    successful: boolean;
    errorMsg: string;
}
