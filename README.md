# 1. Custom Hooks

<br>
<br>

# 2. Rules of Hooks

- ✅ Only call Hooks at the top level
- ✅ Only call Hooks from React functions

- 🔴 Do not call Hooks inside conditions or loops.
- 🔴 Do not call Hooks after a conditional return statement.
- 🔴 Do not call Hooks in event handlers.
- 🔴 Do not call Hooks in class components.
- 🔴 Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect.
- 🔴 Do not call Hooks inside try/catch/finally blocks.

<br>
<br>

# 3. Deployment

- Vercel

<br>
<br>

# 4. Revision

<br>
<br>

# Hooks

- useState
- useEffect

<br/>
<br/>
<br/>

---

## useState :

```js
// Syntax
const [counter, setCounter] = useState(0); ➡️ //initialStateValue
         ⬇️           ⬇️
//  state-variable   function which updates the state-variable
```

<br/>
<br/>

```js
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <button onClick={() => setCounter(counter - 1)}> - </button>

      <div>{counter}</div>

      <button onClick={() => setCounter(counter + 1)}> + </button>
    </>
  );
}
```

<br/>
<br/>

## useEffect :

```js
// Syntax in breif:

useEffect(() => {}, []);
             ⬇️
             ⬇️
// explanation:
useEffect(callback - Function, dependency - Array);



() => {} //callback-function

[] //dependency-array
```

<br>
<br>

```js
// Total Syntax:

useEffect(() => {
  //Here we will be writing the statements - which should execute when useEffect is called

  return () => {}; //cleanup-function
}, []);
```

<br/>

```js
import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function fetchingData() {
      const response = await fetch("url");
      const data = await response.json();
    }
  }, []);

  return <></>;
}
```

<br>
<br>
<br>

## Code Example:

```js
import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [totalData, setTotalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  // async - await
  async function fetchingData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTotalData(data);
      setLoading(false);
    } catch (error) {
      console.log(`error message:`, error);
    }
  }

  useEffect(() => {
    fetchingData();
  }, []);

  // promise-way

  function dataFetchingPromise() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        setTotalData(data);
        setLoading(false);
      })
      .catch((err) => console.log(`Error:`, err));
  }

  useEffect(() => {
    dataFetchingPromise();

    const interval = setInterval(() => {
      setIndex(index + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  if (loading) {
    return <>Data is getting fetched...</>;
  }
  return (
    <>
      {totalData.map((e) => {
        return (
          <div key={e.id} className="border border-2 w-80 p-3">
            <h1>userId: {e.id}</h1>
            <img width={600} height={400} src={e.url} alt="" />
          </div>
        );
      })}
      <button
        className="border px-5 py-3 bg-red-500"
        onClick={() => setIndex(index - 1)}
      >
        Dec
      </button>
      <img width={600} height={600} src={totalData[index].url} alt="" />
      <button
        className="border px-5 py-3 bg-red-500"
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        Inc
      </button>
    </>
  );
}

export default App;
```

<!--  -->

```js
import { useRef } from "react";

function App() {
  let intervalRef = useRef(0);
  let intervalRef2 = useRef(0);

  function handleClick() {
    intervalRef.current = intervalRef.current + 1;
  }

  return <div ref={intervalRef}></div>;
}
```

<!-- -->

```js
import { forwardRef, useRef } from "react";

// Parent
function App() {
  const x = useRef(0);

  x = {
    current: 0,
  };

  // const x = useRef(0);

  function handleClick() {
    x.current.style.color = "red";
  }

  return (
    <div>
      <Child1 ref={x}></Child1>
      <button className="border p-4 bg-slate-600" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

// child1
const Child1 = forwardRef((props, ref) => {
  return (
    <div>
      <p {...props} ref={ref}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        reiciendis nemo consequuntur atque earum ullam in similique doloremque
        aliquid quo?
      </p>
    </div>
  );
});
```
