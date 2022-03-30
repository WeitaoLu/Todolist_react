export function Floot(props) {
  const { donecount,count, showstate, destroyall, showstate_all, showstate_active, showstate_completed } = props;
  if (count != 0) {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{(props.count-props.donecount)}</strong>
          <span> </span>
          <span>item</span>
          <span> left</span>
        </span>
        <ul className="filters">
          <li className={props.showstate === 0 ? 'selected' : ''}>
            <a onClick={showstate_all} href="#/">
              {' '}
              All{' '}
            </a>
          </li>
          <span> </span>
          <li className={props.showstate === 1 ? 'selected' : ''}>
            <a onClick={showstate_active} href="#/">
              {' '}
              Active{' '}
            </a>
          </li>
          <span> </span>
          <li className={props.showstate === 2 ? 'selected' : ''}>
            <a onClick={showstate_completed} href="#/">
              {' '}
              Completed{' '}
            </a>
          </li>
        </ul>
        <button className="clear-completed" onClick={destroyall}>
          Clear completed
        </button>
      </footer>
    );
  } else {
    return <footer></footer>;
  }
}
