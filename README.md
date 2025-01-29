# React Custom Hooks Library

This library provides a collection of useful React hooks to enhance your development experience. The hooks cover various functionalities, including API fetching, state management, lifecycle logging, and more.

## Installation

You can install the package using npm:

```sh
npm install @vishwaraviraaj/react-hooks
```

Or using yarn:

```sh
yarn add @vishwaraviraaj/react-hooks
```

---

## Hooks Documentation

### 1. `useVirtualList`
Efficiently renders large lists by virtualizing the elements.

```tsx
const { visibleItems, containerRef } = useVirtualList(items, itemHeight);
```

---

### 2. `useFetchParallel`
Fetch multiple APIs in parallel and manage loading/error states.

```tsx
const { data, loading, error } = useFetchParallel([url1, url2]);
```

---

### 3. `useFetch`
General-purpose hook for fetching data from an API.

```tsx
const { data, loading, error } = useFetch(url);
```

---

### 4. `useLocalStorage`
Persists state in local storage.

```tsx
const [value, setValue] = useLocalStorage("key", "defaultValue");
```

---

### 5. `usePrevious`
Gets the previous value of a state or prop.

```tsx
const prevValue = usePrevious(value);
```

---

### 6. `useComponentLifecycleLogger`
Logs component mount and unmount events.

```tsx
useComponentLifecycleLogger("ComponentName");
```

---

### 7. `useNetworkStatus`
Detects online/offline network status.

```tsx
const isOnline = useNetworkStatus();
```

---

### 8. `useUndoRedo`
Adds undo/redo functionality for state management.

```tsx
const { state, set, undo, redo } = useUndoRedo(initialState);
```

---

### 9. `useQueue`
Manages a queue data structure.

```tsx
const { queue, enqueue, dequeue } = useQueue();
```

---

### 10. `useCSSVariables`
Dynamically updates CSS variables.

```tsx
const { setVariable } = useCSSVariables();
setVariable("--main-color", "red");
```

---

### 11. `useGetRequest`
Fetches data using a GET request.

```tsx
const { data, loading, error } = useGetRequest(url);
```

---

### 12. `usePostRequest`
Performs a POST request.

```tsx
const { data, postData, loading, error } = usePostRequest(url);
postData(payload);
```

---

### 13. `usePutRequest`
Performs a PUT request.

```tsx
const { data, putData, loading, error } = usePutRequest(url);
putData(payload);
```

---

### 14. `useDeleteRequest`
Performs a DELETE request.

```tsx
const { data, deleteData, loading, error } = useDeleteRequest(url);
deleteData();
```

---

### 15. `useTrigger`
Triggers a callback when a condition is met.

```tsx
useTrigger(() => console.log("Triggered!"), condition);
```

---

### 16. `useSharedState`
Shares state across different components.

```tsx
const [value, setValue] = useSharedState("sharedKey", "Initial Value");
```

---

## Contributing
Feel free to contribute to this library by submitting a pull request.

## License
MIT License.
