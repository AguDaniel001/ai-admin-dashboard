import { useState } from 'react';
import { DefinedRange } from 'react-date-range';
const [state, setState] = useState([
  {
    startDate: new Date(),
    endDate: null,
    key: 'selection'
  }
]);

  <DefinedRange
    onChange={item => setState([item.selection])}
    ranges={state}
  />;
  
