let videoElement = document.getElementById("video");
const button = document.getElementById("button");

// defing the function which alerts us media tabs or apps or screens or windows.........
async function selectMediaStream () {
    try {
        const mediaStreamer = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStreamer;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
            videoElement.hidden  = false;
            button.hidden = true;
            // {
            //     async function playINP() {                    
            //         await videoElement.requestPictureInPicture();
            //         // videoElement.hidden = true;
            //     }
            //     playINP();
            // }
        }
    } catch (error) {
        alert("Some thing wrong " + error)
    }
}
button.addEventListener("click" , selectMediaStream )

// on load calling function 