import React, { useState } from 'react';
import { PageId } from './types/navigation';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Cinematic3DScrollDeck } from './components/3d-experience/Cinematic3DScrollDeck';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
  };

  return (
    <div className="h-screen w-screen bg-[#FBFBF9] text-[#17151B] flex flex-col justify-between selection:bg-[#BDF208]/40 selection:text-[#17151B] overflow-hidden">
      {/* Persistent Navigation Header */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main 3D Spatial Deck with Zoom from Small to Big */}
      <main className="flex-1 pt-20 overflow-hidden relative">
        <Cinematic3DScrollDeck
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />
      </main>
    </div>
  );
}
