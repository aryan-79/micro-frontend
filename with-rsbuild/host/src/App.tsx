import { useRef } from 'react';
import './App.css';
import Button from 'remote/Button';
import Input from 'remote/input';

const App = () => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Button />
      <form
        ref={ref}
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) {
            const formData = new FormData(ref.current);
            console.log(formData);
          }
        }}
      >
        <Input name="element" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
