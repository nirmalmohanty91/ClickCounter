const {default: Form} = JSONSchemaForm;

const schema = {
    "title": "Identity",
    "type": "object",
    "required": [
        "firstName",
        "lastName"
    ],
    "properties": {
        "firstName": {
            "type": "string",
            "title": "First Name",
            "minLength": 1,
            "maxLength": 6
        },
        "lastName": {
            "type": "string",
            "title": "Last Name"
        },
        "age": {
            "type": "number",
            "title": "Age"
        }
    }
}; 

ReactDOM.render((<Form schema={schema} noHtml5Validate onSubmit={console.log} showErrorList={false}/>),document.getElementById('root'));