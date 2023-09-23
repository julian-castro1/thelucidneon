

export async function getTrackInfo(track, size, color){
    let trackInfo = {img:"", desc:"", price:125};

    // get image
    let URL = await getS3URL(track, size, color);
    trackInfo.img = URL;

    // get description
    trackInfo.desc = getDescription(track);

    return trackInfo;
}
export async function getImage(track, color){
    return await getS3URL(track, "M", color);
}

export function getDescription(track){
    return trackDescription[track];
}

/* Translate track, size, and color into an S3 product image URL */
// track: name of the track
// size: S, M, or L
// color: blue, pink, red, white, or yellow
async function getS3URL(track, size, color){
    // https://thelucidneon.s3.us-east-2.amazonaws.com/theGrandPrixCollection/02-saudi_arabia/L_blue_bed.jpg
    let URL = "https://thelucidneon.s3.us-east-2.amazonaws.com/theGrandPrixCollection";
    let trackURL = trackID[track];
    // let sizeURL = size === "M" ? "" : `${size}_`     // commented out since currently only selling M size
    let colorURL = `${color}_bed`
    let fetchURL = [URL, trackURL, colorURL].join("/");

    // find the correct extension (either jpg or png)
    // Try fetching the jpg version first
    let responseJPG = await fetch(`${fetchURL}.jpg`);
    if(responseJPG.ok) {
        return `${fetchURL}.jpg`;
    }

    // Try fetching the png version if jpg doesn't exist
    let responsePNG = await fetch(`${fetchURL}.png`);
    if(responsePNG.ok) {
        return `${fetchURL}.png`;
    }

    // If neither jpg nor png exists, throw an error or return a default value
    throw new Error('Image not found for the given parameters');
}

const trackID = {
    bahrain:"01-bahrain",
    saudi_arabia:"02-saudi_arabia",
    australia:"03-australia",
    miami:"05-miami",
    spain:"06-spain",
    monaco:"07-monaco",
    japan:"18-japan",
    austin:"19-austin",
    brazil:"21-brazil",
}

const trackDescription = {
    bahrain:"Dive into the Desert Night: The Bahrain International Circuit, set amidst the vast desert, is a blend of long straights and challenging turns. Illuminate your space with the glowing essence of this Middle Eastern gem.",
    saudi_arabia:"Modern Meets Historic: Jeddah's street circuit is a testament to the blend of Saudi Arabia's rich history and its stride towards the future. Bring this intriguing juxtaposition to life with our neon representation.",
    australia:"The Land Down Under Awaits: Albert Park, with its parkland setting and high-speed challenges, is the embodiment of Aussie racing spirit. Light up your wall with the vibrant energy of Melbourne's F1 extravaganza.",
    miami:"Sun, Sea, and Speed: Miami's circuit, infused with the city's vivacious energy, is a dance of speed and strategy. Let your decor resonate with the pulsating rhythm of this American classic.",
    spain:"Catalan Curves: The Circuit de Barcelona-Catalunya is a mix of high-speed stretches and intricate turns, a true test for any F1 aficionado. Illuminate your love for the Spanish Grand Prix with our neon masterpiece.",
    monaco:"Glitz, Glamour, and Glory: The streets of Monte Carlo are more than just roads; they're the stage for one of the most iconic races in F1 history. Bring the magic of Monaco to your space with our intricate neon design.",
    japan:"Suzuka's Symphony: Japan's Suzuka circuit, with its unique figure-eight layout, is a testament to innovation and speed. Experience the harmony of Japanese racing with our glowing track representation.",
    austin:"Stars, Stripes, and Speed: The Circuit of the Americas in Austin, Texas, is a roller-coaster of elevation changes and sharp turns. Celebrate the American spirit of racing with our neon rendition.",
    brazil:"Samba of Speed: Interlagos, set against the backdrop of bustling São Paulo, offers a rhythm of fast straights and challenging corners. Let the Brazilian passion for racing light up your room with our neon tribute.",
}