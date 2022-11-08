export default function HeaderSection(props) {
  return (
    <header className={props.classTemplate}>
      <h3>{props.title}</h3>
      <small>{props.desc}</small>
    </header>
  )
}