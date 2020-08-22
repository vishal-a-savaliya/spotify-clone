

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUrl ="https://spotify-clone-7820.web.app/";
const cliantId = "3623e2602a01455aa61066fa9e6ba30a";

const scopes =[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl =()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    } , {});
}

export const loginUrl = `${authEndpoint}?client_id=${cliantId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`; 

