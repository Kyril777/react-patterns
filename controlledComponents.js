/* Controlled component. */

import React, { useState } from 'react';

export default App = () => {
  const \[value, setValue\] = useState('');
  const onChange = event => setValue(event.target.value);

  return (
    <div>
        <input type="text" onChange={onChange} text={value}/>
    </div>
  );
};
