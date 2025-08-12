const image_container = document.getElementById("image_container");

    const arr = [
        "original.jfif",
        "sponge_2.png",
        "sponge_3.png",
        "sponge_4.png",
        "sponge_5.png",
        "sponge_6.png"
    ];

    for(let i=0; i < arr.length; i++) {
        let img = new Image();
        img.src = `images/gallery_images/${arr[i]}`;
        image_container.appendChild(img);
    }