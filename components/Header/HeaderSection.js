export default function HeaderSection(props) {
  return (
    <header className={props.classTemplate}>
      <div className={props.classSticky}>
        <h3>{props.title}</h3>
        <small>{props.desc}</small>
      </div>
    </header>
  )
}