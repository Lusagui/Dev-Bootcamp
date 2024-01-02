const Title = (props) => {
  return <h1>{props.msg}</h1>
}
//esta forma sirve por que al tener un sola linea, esto evalua y devuelve lo primero que encuentra
const Parrafo1 = (props) => <p> {props.msg1} {props.msg2} </p>


const Parrafo2 = (props) => {
  return <p>
        {props.msg1} {props.msg2}
  </p>
}

const Parrafo3 = (props) => {
  return <p>
        {props.msg1} {props.msg2}
  </p>
}

const Parrafo4 = (props) => {
  return <p>Number of exercises {props.msg + props.msg1 + props.msg2}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title msg={course} />
      <Parrafo1 msg1={part1} msg2={exercises1} />
      <Parrafo2 msg1={part2} msg2={exercises2} />
      <Parrafo3 msg1={part3} msg2={exercises3} />
      <Parrafo4 msg={exercises1} msg1={exercises2} msg2={exercises3} />
    </div>
  )
}

export default App