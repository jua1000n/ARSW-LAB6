app = (function () {
    let aut;
    let name;
    let listAuthor;

    const callbackBlue = (listCall) => {
        const list = listCall.map(blueprint => {
           return {
               name: blueprint.name,
               points: blueprint.points.length
           }
        });
        $("#table-tbody").empty();
        listAuthor = list;
        console.log(list);




        list.map(blueprint => {
            const {name, points} = blueprint;
            const col = document.createElement('tr');

            col.innerHTML = `
                <td>${name}</td>
                <td>${points}</td>
                `
            $("#table-tbody").append(col);
        });
    }

    const getNameAuthorBlueprint =  () => {
        aut = document.getElementsByName("author")[0].value;
        if(aut === "") {
            alert("No ingreso ningun author")
        }else {
            apimock.getBlueprintsByAuthor(aut, callbackBlue);
        }
    }

    const getNameAuthorNameBlueprint =  () => {
        aut = document.getElementsByName("author")[0].value;
        apimock.getBlueprintsByNameAndAuthor(aut, name, (dibujo) => {
            
        });
    }

    const setNameAuthor = (newName) => {
        name = newName;
    }

    return{
        getNameAuthorBlueprint: getNameAuthorBlueprint,
        setNameAuthor: setNameAuthor(),
        getNameAuthorNameBlueprint: getNameAuthorNameBlueprint
    }

})();