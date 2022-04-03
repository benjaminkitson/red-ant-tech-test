function Loading(props) {
  return (
    <div className={`loading-modal ${props.contentLoaded ? "" : "loading-modal--loading"}`}>
      <div className="loading-modal__content">
        Loading {props.content}...
      </div>
    </div>
  );
}

export default Loading;
