// Type of data JS

//* switch conditional statement
function detectType(value) {
    switch(typeof value) {
        case "undefined":
            return "Undefined";
            break;
        case 'null':
            return "Null";
            // null is also "object" due to a long-standing bug!?
            break;
        case 'string':
            return "String";
            break;
        case 'number':
            return "Number";
            break;
        case 'boolean':
            return "Boolean";
            break;
        case 'object':
            return "Object";
            break;
        default:
            return "other";
            break;
    }
}

// detectType(value param); 
detectType();

// if conditional statement
function tiposDeDados(dadoInserido) {
    if(typeof dadoInserido == 'string') {
        console.log('É string!');
    } else if(typeof dadoInserido == 'number') {
        console.log('number');
    } else if(typeof dadoInserido == 'undefined') {
        console.log('Undefined');
    } else if(typeof dadoInserido == 'boolean') {
        console.log('boolean = ' + dadoInserido)
    } else {
        console.log('Outro tipo de dado.');
    }
}

// tiposDeDados(value param); 
tiposDeDados(2);