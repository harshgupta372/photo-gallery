import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { PhotoCard } from './components/PhotoCard';
import { ImageModal } from './components/ImageModal';

const photos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
    title: 'Mountain Lake'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1682687221038-404670f09439',
    title: 'Ocean Sunset'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538',
    title: 'Forest Path'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1682686581362-796145f0e123',
    title: 'Desert Dunes'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1682686580024-580519d4b2d2',
    title: 'City Lights'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1682686578289-cf9c8c472c9b',
    title: 'Autumn Colors'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1682686580186-b55d2a91053c',
    title: 'Winter Wonderland'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1',
    title: 'Tropical Beach'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1682695797221-8164ff1fafc9',
    title: 'Urban Architecture'
  }
];

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <Camera className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Photo Gallery</h1>
          </div>
        </div>
      </header>

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <PhotoCard
              key={photo.id}
              imageUrl={photo.url}
              title={photo.title}
              onClick={() => setSelectedImage(photo.url)}
            />
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}

export default App;