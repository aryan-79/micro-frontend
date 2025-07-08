import { useRef } from 'react';
import './App.css'
//@ts-expect-error
import Button from 'remote/Button';
//@ts-expect-error
import Input from 'remote/input';

function App() {
  const ref = useRef<HTMLFormElement>(null)
  return (
    <>
      <h1>Vite + React</h1>
      <Button />
      <form ref={ref} onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          const formData = new FormData(ref.current);
          console.log(formData);
        }
      }}>
        <Input name="element" />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
