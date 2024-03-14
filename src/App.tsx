import { useState } from 'react';
import Select from './components/select/Select';
import { OPTIONS } from './constants/options';

export const App = () => {
  const [value, setValue] = useState<(typeof OPTIONS)[0] | undefined>(
    OPTIONS[0]
  );
  return (
    <>
      <Select options={OPTIONS} value={value} onChange={o => setValue(o)} />
    </>
  );
};
