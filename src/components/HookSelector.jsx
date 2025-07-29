const hooks = ['useState', 'useEffect', 'useRef', 'useMemo', 'useReducer', 'useCallback', 'useContext', 'CustomHook'];

export default function HookSelector({ selected, onSelect }) {
  return (
    <aside
      style={{
        width: '200px',
        background: '#f0f0f0',
        padding: '1rem',
        borderRight: '1px solid #ddd',
      }}
    >
      <h3>React Hooks</h3>
      {hooks.map((hook) => (
        <button
          key={hook}
          onClick={() => onSelect(hook)}
          style={{
            display: 'block',
            width: '100%',
            padding: '0.5rem',
            margin: '0.5rem 0',
            background: selected === hook ? '#2BBBC1' : '#fff',
            color: selected === hook ? '#fff' : '#000',
            border: '1px solid #ccc',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {hook}
        </button>
      ))}
    </aside>
  );
}
