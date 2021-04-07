import '../styles/Person.css';

function Person(props) {
    return (
        <div className="person" onClick={() => props.change("Anik Mujumder")}>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
        </div>
    );
}

export default Person;