# Streaming Video Provider :: Delete Videos From Playlist

### https://video-list-api.ljavierrodriguez.now.sh/playlists/:token

    fetch("https://video-list-api.ljavierrodriguez.now.sh/playlists/:token")
        .then(resp => resp.json)
        .then(data => console.log(data))
        .catch(error => console.log(error));
 
***Nota:** devuelve json de todos los playlist existentes y su informacion*

### https://video-list-api.ljavierrodriguez.now.sh/playlists/:token/:channel_ref

    fetch("https://video-list-api.ljavierrodriguez.now.sh/playlists/:token")
        .then(resp => resp.json)
        .then(data => console.log(data))
        .catch(error => console.log(error));
 
***Nota:** devuelve json del playlist existente y todos los videos relacionados*


### https://video-list-api.ljavierrodriguez.now.sh/playlists/:token/:channel_ref?days=1

    fetch("https://video-list-api.ljavierrodriguez.now.sh/playlists/:token/:channel_ref?days=1")
        .then(resp => resp.json)
        .then(data => console.log(data))
        .catch(error => console.log(error));
 
***Nota:** devuelve json del playlist existente y todos los videos relacionados que tengan mas 
de N dias creados por defecto es 1*

### https://video-list-api.ljavierrodriguez.now.sh/playlists/:token/video/:video_ref/delete
                                   
    fetch("https://video-list-api.ljavierrodriguez.now.sh/playlists/:token/video/1,2,3/delete")
        .then(resp => resp.json)
        .then(data => console.log(data))
        .catch(error => console.log(error));
                                    
***Nota:** elimina todos los videos pasados como referencia separados por coma*