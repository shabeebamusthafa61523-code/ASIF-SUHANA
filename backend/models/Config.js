const mongoose = require('mongoose');

const configSchema = new mongoose.Schema({
  coverUrl: { 
    type: String, 
    default: 'https://imagedelivery.net/pXU-KzWtO2cgM-XrR20TQg/9aa4c918-902d-4d87-bcda-abdbeddd0a00/public' 
  },
  bgmUrl: { 
    type: String, 
    default: '' 
  },
  heroVideoUrl: { 
    type: String, 
    default: 'https://pub-bc01cea1ca914ad8aba6c7541c55c7fb.r2.dev/digiwed-invitations-sahal-fasmina-2-video/hero-clouds-sound.mp4' 
  },
  adminPin: { 
    type: String, 
    default: '2026SF' 
  }
}, { timestamps: true });

module.exports = mongoose.model('Config', configSchema);
