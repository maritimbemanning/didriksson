import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';

(async () => {
  await imagemin(['public/images/*.jpg'], {
    destination: 'public/images',
    plugins: [
      imageminMozjpeg({ quality: 75 })
    ]
  });
  console.log('✅ Images optimized!');
})();
