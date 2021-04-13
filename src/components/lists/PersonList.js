import Person from '../reps/Person';

const PersonList = props => {
    return (
        props.persons.map((person, index) => {
            return (
                <Person {...person}
                    delete={() => props.delete(index)}
                    change={event => props.change(event, index)}
                />
            );
        })
    )
}

export default PersonList;