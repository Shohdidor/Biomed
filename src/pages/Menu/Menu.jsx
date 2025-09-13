import React, { useState, useEffect } from 'react';
import Clinic from "/src/img/Clinic.jpeg";
import Flebiologya from "/src/img/Flebiologya.jpeg";
import Nurses from "/src/img/Nurses.jpeg";
import Urology from "/src/img/Urology.jpeg"; 
import Labaratory from "/src/img/Labaratory.jpeg";
import Proktology from "/src/img/Proktology.jpeg";
import { Link } from 'react-router-dom';

// Word slot machine component
const WordSlot = ({ words, isActive }) => {
  const [displayWord, setDisplayWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
const wordList = [
  'Innovation', 'Health', 'Care', 'Science', 'Research', 'Technology', 'Medicine', 'Wellness',
  'Future', 'Discovery', 'Healing', 'Progress', 'Solutions', 'Vitality', 'Knowledge',
  'Digital', 'Genetics', 'Biology', 'Immunity', 'Life', 'Therapy', 'Neuroscience',
  'Prevention', 'Breakthrough', 'Sustainability', 'Humanity', 'Precision', 'Strength',
  'Energy', 'Transformation', 'Balance', 'Growth', 'Hope', 'Recovery', 'Integration',
  'Intelligence', 'Evolution', 'Diagnostics', 'Resilience', 'Safety', 'Compassion'
];

  useEffect(() => {
    if (!isActive) {
      setDisplayWord('');
      setCurrentIndex(0);
      setIsAnimating(false);
      return;
    }

    setIsAnimating(true);
    let interval;
    
    // Start with random words animation
    interval = setInterval(() => {
      const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
      setDisplayWord(randomWord);
    }, 100);

    // After 1.5 seconds, stop the animation and show the actual words
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setIsAnimating(false);
      setDisplayWord(words[0]);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isActive]);

  useEffect(() => {
    if (!isActive || isAnimating) return;

    // Cycle through the words after animation stops
    if (currentIndex < words.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setDisplayWord(words[currentIndex + 1]);
      }, 800);
      
      return () => clearTimeout(timeout);
    }
  }, [isActive, isAnimating, currentIndex, words]);

  return (
    <div className="text-center">
      <div className="w-12 h-0.5 bg-white mx-auto mb-4 transform transition-all duration-700 delay-300 group-hover:w-20"></div>
      <h3 className="text-white text-2xl font-bold tracking-wider min-h-[2.5rem]">
        {displayWord}
      </h3>
      <div className="w-12 h-0.5 bg-white mx-auto mt-4 transform transition-all duration-700 delay-500 group-hover:w-20"></div>
    </div>
  );
};

function Menu() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const projects = [
    { id: 1, title: "clinic", image: Clinic, words: ["clinic"] },
    { id: 2, title: "plebologiya", image: Flebiologya, words: ["plebologiya"] },
    { id: 3, title: "nursing", image: Nurses, words: ["nursing"] },
    { id: 4, title: "urology", image: Urology, words: ["urology"] },
    { id: 5, title: "laboratory", image: Labaratory, words: ["laboratory"] },
    { id: 6, title: "proctology", image: Proktology, words: ["proctology"] }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      
      <header className="py-16 px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-light text-center text-gray-800">
          Biomed
        </h1>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden group cursor-pointer border-r border-b border-gray-100"
            onMouseEnter={() => setHoveredItem(project.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
              
              {/* Black overlay with opacity */}
              <div  className={`absolute inset-0 bg-black transition-all duration-500 ${
                hoveredItem === project.id ? 'opacity-70' : 'opacity-0'
              }`}></div>
            </div>
            
            {/* Text overlay with animation */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
              hoveredItem === project.id ? 'opacity-100' : 'opacity-0'
            }`}>
              <WordSlot words={project.words} isActive={hoveredItem === project.id} />
            </div>
            
            <Link to={`/${project.title.toLowerCase()}`}> 
            <div  className={`absolute inset-0 border-4 border-white transition-all duration-500 ${
                hoveredItem === project.id ? 'opacity-100' : 'opacity-0'
            }`}></div>
            </Link> 
          </div>
        ))}
      </div>

    </div>
  );
}

export default Menu;