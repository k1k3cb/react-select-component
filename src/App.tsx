import { useState } from 'react';
import Select, { SelectOption } from './components/select/Select';
import { OPTIONS } from './constants/options';

export const App = () => {
  const [value1, setValue1] = useState<SelectOption[]>(
    [OPTIONS[0]]
  );
  const [value2, setValue2] = useState<SelectOption | undefined>(
    OPTIONS[0]
  );
  return (
    <>
      <Select
        multiple
        options={OPTIONS}
        value={value1}
        onChange={o => setValue1(o)}
      />
          <br />
      <Select options={OPTIONS} value={value2} onChange={o => setValue2(o)} />
    </>
  );
};
