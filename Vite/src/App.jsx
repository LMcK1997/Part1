const Header = props =>
  <div>
    Welcome to the {props.course} course!
  </div>

const Part = props =>
  <div>
    {props.part} {props.exercises}
  </div>

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Total = props => <div> {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </div>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <h1>
        <Header course={course.name} />
      </h1>
      <p>
        <Content parts={course.parts} />
      </p>
      <p>
        <Total parts={course.parts} />
      </p>
    </div>
  )
}

export default App
