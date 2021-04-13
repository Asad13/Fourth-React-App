import '../../styles/Person.css';

function Person(props) {
    return (
        <div className="person">
            <div onClick={props.delete}>
                <h2>{props.name}</h2>
                <p>Age: {props.age}</p>
            </div>
            <input type="text" value={props.name} onChange={props.change} />
        </div>
    );
}

export default Person;