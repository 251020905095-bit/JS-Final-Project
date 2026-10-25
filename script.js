function upDate(previewPic) {
    console.log("Sự kiện upDate (hoặc focus) đã được kích hoạt.");
    console.log("Alt text: " + previewPic.alt);
    console.log("Source URL: " + previewPic.src);

    var imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    console.log("Sự kiện unDo (hoặc blur) đã được kích hoạt.");

    var imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";

    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function addTabIndex() {
    console.log("Trang đã tải xong, đang thêm thuộc tính tabindex...");

    var images = document.querySelectorAll(".preview");

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Đã thêm tabindex='0' cho ảnh thứ " + (i + 1));
    }
}
