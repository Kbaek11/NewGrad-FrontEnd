export default props => (
    <div>
        <p>
            {props.submittedValues.firstName}, {props.submittedValues.lastName}
        </p>
        <p>{props.submittedValues.reply}</p>
    </div>
);
