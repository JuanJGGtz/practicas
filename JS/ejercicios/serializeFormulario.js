/**
 * 
 * The FormData object #
 * The FormData object provides an easy way to serialize form fields into key/value pairs.
 * You can use the new FormData() constructor to create a new FormData object, passing in the form to serialize as an argument. 
 * Form fields must have a NAME attribute to be included object. Otherwise, they’re skipped. The id property doesn’t count.
 * 
 * url: https://gomakethings.com/how-to-serialize-form-data-with-vanilla-js/#:~:text=The%20FormData%20object,property%20doesn%E2%80%99t%20count.
 * 
 * Este es un ejemplo de como aplicar serialize en JS, ya que existe el metodo pero solo para JQry
 * es necesario que los lementos "INPUT" tengan su atributo "name='elementoInput'" para que el metodo
 * FormData lo pueda localizar
 */

const updateData = () => {
    let formData = document.getElementById('editUserForm');
    //Todos los inputs deben de tener el atributo "name" para que funciones
    let data = new FormData(formData);
	// Convert to a query string
	let queryString = new URLSearchParams(data).toString();		
	console.log('queryString :>> ', queryString);
    let formObj = serialize(data);
    console.log('formObj :>> ', formObj);

};

//salida un objeto
//{i_user: 'soporte', i_nameCompany: 'GCM', i_idPrivilege: '3', i_privilege: 'SuperAdmin', i_name: 'Darby', …}

const serialize = (data) => {
    //Crea un objeto 
	let obj = {};
    //Destructuramos data por llave,valor
	for (let [key, value] of data) {

        if (obj[key] !== undefined) {
            //Si no existe esa propiedad se crea y se le asigna el valor
			if (!Array.isArray(obj[key])) {
				obj[key] = [obj[key]];
			}
			obj[key].push(value);
		} else {
			obj[key] = value;
		}
	}
	return obj;
}