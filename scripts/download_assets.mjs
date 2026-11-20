import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  // Home
  { url: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80', dest: 'public/assets/home_png/home_png_1.png' },
  { url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80', dest: 'public/assets/home_png/home_png_2.png' },
  { url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80', dest: 'public/assets/home_png/home_png_3.png' },
  { url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80', dest: 'public/assets/home_png/home_png_4.png' },
  { url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80', dest: 'public/assets/home_png/home_png_5.png' },
  { url: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/home_png/home_png_6.png' },
  { url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/home_png/home_png_7.png' },
  { url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/home_png/home_png_8.png' },
  { url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/home_png/home_png_9.png' },
  { url: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/home_png/home_png_10.png' },
  { url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/home_png/home_png_11.png' },
  { url: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/home_png/home_png_12.png' },
  { url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80', dest: 'public/assets/home_png/home_png_13.png' },
  { url: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1000&q=80', dest: 'public/assets/home_png/home_png_14.png' },
  { url: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=1000&q=80', dest: 'public/assets/home_png/home_png_15.png' },
  { url: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=1000&q=80', dest: 'public/assets/home_png/home_png_16.png' },

  // About
  { url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80', dest: 'public/assets/about_png/about_png_1.png' },

  // Programs
  { url: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/programs_png/programs_png_1.png' },
  { url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/programs_png/programs_png_2.png' },
  { url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/programs_png/programs_png_3.png' },
  { url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/programs_png/programs_png_4.png' },

  // Facilities
  { url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/facilities_png/facilities_png_1.png' },
  { url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/facilities_png/facilities_png_2.png' },
  { url: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/facilities_png/facilities_png_3.png' },
  { url: 'https://images.unsplash.com/photo-1567057420215-0afa9cf72692?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/facilities_png/facilities_png_4.png' },
  { url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/facilities_png/facilities_png_5.png' },
  { url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/facilities_png/facilities_png_6.png' },

  // Activities
  { url: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/activities_png/activities_png_1.png' },
  { url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/activities_png/activities_png_2.png' },
  { url: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/activities_png/activities_png_3.png' },
  { url: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/activities_png/activities_png_4.png' },
  { url: 'https://images.unsplash.com/photo-1460518451282-474b15672083?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/activities_png/activities_png_5.png' },
  { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80', dest: 'public/assets/activities_png/activities_png_6.png' },

  // Gallery
  { url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80', dest: 'public/assets/gallery_png/gallery_png_1.png' },
  { url: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1000&q=80', dest: 'public/assets/gallery_png/gallery_png_2.png' },
  { url: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=1000&q=80', dest: 'public/assets/gallery_png/gallery_png_3.png' },
  { url: 'https://images.unsplash.com/photo-1596464716127-f2a829822301?auto=format&fit=crop&w=1000&q=80', dest: 'public/assets/gallery_png/gallery_png_4.png' },
  { url: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1000&q=80', dest: 'public/assets/gallery_png/gallery_png_5.png' },
  { url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80', dest: 'public/assets/gallery_png/gallery_png_6.png' },
  { url: 'https://images.unsplash.com/photo-1567057420215-0afa9cf72692?auto=format&fit=crop&w=1000&q=80', dest: 'public/assets/gallery_png/gallery_png_7.png' },
  { url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80', dest: 'public/assets/gallery_png/gallery_png_8.png' },
  { url: 'https://images.unsplash.com/photo-1460518451282-474b15672083?auto=format&fit=crop&w=1000&q=80', dest: 'public/assets/gallery_png/gallery_png_9.png' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const get = (uri) => {
      https.get(uri, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          get(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to download ${uri}: status ${res.statusCode}`));
          return;
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      }).on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    };
    get(url);
  });
}

async function run() {
  console.log(`Starting download of ${images.length} images...`);
  for (const item of images) {
    const fullDest = path.resolve(process.cwd(), item.dest);
    fs.mkdirSync(path.dirname(fullDest), { recursive: true });
    try {
      console.log(`Downloading ${item.dest}...`);
      await download(item.url, fullDest);
      console.log(`Saved ${item.dest}`);
    } catch (err) {
      console.error(`Error downloading ${item.dest}:`, err.message);
    }
  }
  console.log('All downloads completed!');
}

run();
