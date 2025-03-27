import React from 'react';

const MoodSelector = ({ selectedMood, onMoodChange }) => {
  const moods = ["dreamy", "romantic", "melancholy", "joyful", "empowered"];

  return (
    <div className="flex flex-col space-y-2 p-4">
      <h2 className="text-xl font-bold mb-2">🎵 Choose a Mood:</h2>
      {moods.map((mood) => (
        <label key={mood} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={selectedMood === mood}
            onChange={() => onMoodChange(mood)}
          />
          <span className="capitalize">{mood}</span>
        </label>
      ))}
    </div>
  );
};

export default MoodSelector;
