import { useCallback, useState } from 'react';
import Heading from './components/Heading';
import Button from './components/Button';
import { config } from './config';

export default function App() {
  const [index, setIndex] = useState(0);

  const setOption = useCallback(() => {
    setIndex(index + 1);
  }, [index]);

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-5xl min-h-screen m-auto p-7">
      <Heading>{config[index].heading}</Heading>

      <div className="flex flex-wrap gap-5">
        {config[index].options.map((option, i) => (
          <Button key={i} onClick={setOption} secondary={i !== 0}>
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
}
