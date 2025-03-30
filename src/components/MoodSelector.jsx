import React from 'react';

const MoodSelector = ({ selectedMood, onMoodChange }) => {
  const moods = ["dreamy", "romantic", "melancholy", "joyful", "empowered"];

  return (
    <div className="flex flex-col space-y-2 p-4">
      <h2 className="text-2xl font-bold text-white drop-shadow-lg mb-2">🎵 Choose a Mood:</h2>
      {moods.map((mood) => (
        <label key={mood} className="checkbox-label flex items-center space-x-3">
          <input
            type="checkbox"
            checked={selectedMood === mood}
            onChange={() => onMoodChange(mood)}
            className="w-5 h-5"
          />
          <span className="capitalize">{mood}</span>
        </label>
      ))}
    </div>
  );
};

export default MoodSelector;
