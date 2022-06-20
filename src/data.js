import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Blessed",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/04/73f23095038f6f023083520706f3e5345f5dd682-1024x1024.jpg",
      artist: "Moods, Yasper",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32859",
      id: uuidv4(),
      active: false,
    },

    {
      name: "Rainbow Roll",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/5158b15bf8cb3b9d50588cfc31d36d28c816dc0c-1024x1024.jpg",
      artist: "Strehlow",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=35642",
      id: uuidv4(),
      active: true,
    },

    {
      name: "Morning View",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/04/73f23095038f6f023083520706f3e5345f5dd682-1024x1024.jpg",
      artist: "Enzalla",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32839",
      id: uuidv4(),
      active: false,
    },

    {
      name: "Pond Sketch",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/04/73f23095038f6f023083520706f3e5345f5dd682-300x300.jpg",
      artist: "Sleepy Fish",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32838",
      id: uuidv4(),
      active: false,
    },

    {
      name: "Indian Summer Rally",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/03/c03fa64d8da9f1aa67db2a6b0c20cce262e9a976-1024x1024.jpg",
      artist: "oddfish, cocabona",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=32863",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Bronea",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/d8344de22563af8eaec8f544c14711592eabef26-1024x1024.jpg",
      artist: "Plusma, Guillaume Muschalle",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=28903",
      id: uuidv4(),
      active: false,
    },
    {
      name: "that midnight air rushes throu",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/01/d7c0bd347f56540babd9dd85454b93a89df84a15-1024x1024.jpg",
      artist: "Sundrenched",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=30124",
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
