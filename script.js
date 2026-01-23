const container = document.getElementById("museum");
const MAX_OBJECTS = 20;

for (let i = 1; i <= MAX_OBJECTS; i++) {
    loadObject(i);
}

async function loadObject(id) {
    const folder = `objects/object_${id}`;

    try {
        const info = await fetch(`${folder}/info.txt`);
        if (!info.ok) return;

        const text = await info.text();
        const title = text.match(/Название:(.*)/)?.[1].trim();
        const description = text.split("Описание:")[1]?.trim();

        const images = await loadImages(folder);

        createObject(title, description, images);
    } catch {
        return;
    }
}

async function loadImages(folder) {
    const images = [];
    let index = 1;

    while (true) {
        try {
            const res = await fetch(`${folder}/img_${index}.jpg`);
            if (!res.ok) break;
            images.push(`${folder}/img_${index}.jpg`);
            index++;
        } catch {
            break;
        }
    }
    return images;
}

function createObject(title, description, images) {
    let current = 0;
    let lastX = null;

    const object = document.createElement("div");
    object.className = "object";

    const viewer = document.createElement("div");
    viewer.className = "viewer";

    const img = document.createElement("img");
    img.src = images[0];
    viewer.appendChild(img);

    viewer.addEventListener("mousedown", e => {
        lastX = e.clientX;
        viewer.style.cursor = "grabbing";
    });

    window.addEventListener("mouseup", () => {
        lastX = null;
        viewer.style.cursor = "grab";
    });

    viewer.addEventListener("mousemove", e => {
        if (lastX === null) return;

        const delta = e.clientX - lastX;
        if (Math.abs(delta) > 10) {
            current = (current + (delta > 0 ? 1 : -1) + images.length) % images.length;
            img.src = images[current];
            lastX = e.clientX;
        }
    });

    object.innerHTML = `
        <div class="title">${title}</div>
        <div class="description">${description}</div>
    `;

    object.prepend(viewer);
    container.appendChild(object);
}
