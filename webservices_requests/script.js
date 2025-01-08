async function GetAll() {
    await fetch("http://localhost:8080/checks/", {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
    }).then((data) => {
        document.getElementById("output").innerHTML = "Output: <pre>" + JSON.stringify(data, null, 2) + "</pre>"
    })
}

async function CreateNew() {
    let body = {
        'uuid': crypto.randomUUID(),
        'name': 'sum_is_zero',
        'version': '0.0.1',
        'description': 'Checks if the sum of the amounts is equal to zero.',
        'lang': 'python',
        'params': [
            'amount_1: int',
            'amount_2: int',
            'amount_3: int'
        ],
        'func_body': 'return (amount_1 + amount_2 + amount_3) == 0'
    }

    await fetch("http://localhost:8080/checks/", {
        method: "Post",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}

async function GetById() {
    await fetch("http://localhost:8080/checks/" + document.getElementById("id_get").value, {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
    }).then((data) => {
        document.getElementById("output").innerHTML = "Output: <pre>" + JSON.stringify(data, null, 2) + "</pre>"
    })

    document.getElementById("id_get").value = ""
}

async function PutById() {
    await fetch("http://localhost:8080/checks/" + document.getElementById("id_put").value, {
        method: "Put",
        body: document.getElementById("id_put_body").value,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    document.getElementById("id_put").value = ""
    document.getElementById("id_put_body").value = ""
}

async function DeleteById() {
    await fetch("http://localhost:8080/checks/" + document.getElementById("id_delete").value, {
        method: "Delete",
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })

    document.getElementById("id_delete").value = ""
}