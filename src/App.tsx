import { useState } from 'react';

const config = [
  { heading: 'Lorem ipsum 1', options: ['Tak', 'Nie'] },
  { heading: 'Lorem ipsum 2', options: ['Tak', 'Nie'] },
];

export default function App() {
  const [slide, setSlide] = useState(0);

  const setOption = () => {
    setSlide(slide + 1);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen p-5">
      <h2 className="text-3xl mb-12 text-center">{config[slide].heading}</h2>

      <div className="flex flex-wrap gap-5">
        {config[slide].options.map((option, i) => (
          <button
            key={i}
            onClick={setOption}
            className="px-4 py-2 rounded-md bg-green-500 text-base"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
