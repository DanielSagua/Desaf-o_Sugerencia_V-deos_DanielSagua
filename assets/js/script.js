// Req 1: implementacion del patron modulo con IIFE
const VideoPlay = (function () {
    // Función privada para mostrar video en el DOM
    function showVideo(url, id) {
        const iframe = document.getElementById(id);
        iframe.setAttribute('src', url);
    }

    // funcion publica que llama a la privada
    return {
        playMultimedia: function (url, id) {
            showVideo(url, id);
        }
    };
})();

// clase padre
class Multimedia {
    constructor(url) {
        this._url = url;
    }

    setInicio() {
        return "cambio en la URL del video";
    }
}

// clase hija 
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }

    playMultimedia() {
        VideoPlay.playMultimedia(this._url, this._id);
    }

    setInicio(tiempo) {
        const newUrl = `${this._url}?start=${tiempo}`;
        const iframe = document.getElementById(this._id);
        iframe.setAttribute('src', newUrl);
    }
}

// instanciamos las clases
const musicaPlayer = new Reproductor("https://www.youtube.com/embed/YAbk72aODJY?si=T40UiGtr2GJuajbD", "musica");
const peliculasPlayer = new Reproductor("https://www.youtube.com/embed/O7miwbztuNc?si=B3c-vHGfR7fq4MKO", "peliculas");
const seriesPlayer = new Reproductor("https://www.youtube.com/embed/ycFt5DueEFQ?si=3Zb_cGAdE784TdfY", "series");

// Ejemplo de cómo utilizar el método setInicio
peliculasPlayer.setInicio(50); 
// los metodos

musicaPlayer.playMultimedia();
peliculasPlayer.playMultimedia();
seriesPlayer.playMultimedia();

