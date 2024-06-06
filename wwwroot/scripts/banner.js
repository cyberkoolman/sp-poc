document.addEventListener("DOMContentLoaded", function() {
    // Create the banner element
    var banner = document.createElement("div");
    banner.style.position = "fixed";
    banner.style.top = "0";
    banner.style.width = "100%";
    banner.style.backgroundColor = "#0078d7";
    banner.style.color = "white";
    banner.style.textAlign = "center";
    banner.style.padding = "15px 0";
    banner.style.zIndex = "1000";
    banner.style.display = "flex";
    banner.style.justifyContent = "center";
    banner.style.alignItems = "center";

    // Create the banner text
    var bannerText = document.createElement("span");
    // Get API for the banner text
    bannerText.innerText = "This is an important announcement.  Please read this message...";
    bannerText.style.flex = "1";

    // Create the close button
    var closeButton = document.createElement("button");
    closeButton.innerText = "X";
    closeButton.style.backgroundColor = "transparent";
    closeButton.style.color = "white";
    closeButton.style.border = "none";
    closeButton.style.fontSize = "16px";
    closeButton.style.cursor = "pointer";
    closeButton.style.marginRight = "20px";

    // Add click event to close the banner
    closeButton.onclick = function() {
        banner.style.display = "none";
        document.querySelector("body").style.marginTop = "0";
    };

    // Append the text and close button to the banner
    banner.appendChild(bannerText);
    banner.appendChild(closeButton);

    // Append the banner to the body
    document.body.appendChild(banner);

    // Adjust page content to not be hidden under the banner
    var content = document.querySelector("body");
    if (content) {
        content.style.marginTop = banner.clientHeight + "px";
    }
});
