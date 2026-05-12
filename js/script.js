
var listpersonas=new Array()
var ventana
function personas(id,name){
    this.id=id
    this.name=name

    this.getId= function(){
        return this.id
    }

    this.getName = function(){
        return this.name
    }

    this.setId = function(newId){
        this.id=newId
    }

    this.vertodo=function(){
        window.alert(this.id+"-"+this.name+"-")
    }
}


function cargarlist(){
    listpersonas[0] = new personas(12,"juan")
    listpersonas[1] = new personas(15,"richard")
    listpersonas[2] = new personas(20,"joaco")
}

function verpersonas(){
    for (let i=0; i < listpersonas.length; i++){
        listpersonas[i].vertodo()
    }
}
function agregarpersonas(){
    var ide = parseInt(document.getElementById("boxid").value)
    var nom = document.getElementById("boxname").value
    listpersonas.push(new personas(ide,nom))
    window.alert("persona agregada")
}  
function eliminarpersonas(){
    var ide = parseInt(document.getElementById("boxid").value)
    for (let i =0; i <listpersonas.length; i++){
        if(listpersonas[i].getId() == ide){
            listpersonas.splice(i,1)
            window.alert("persona eliminada")
            return
        }
    }
    window.alert("persona no encontrada")
}

function verpersonasVentana(){
    ventana = window.open("","", "height=400, width=500")
    content = "<html><head><title>Lista de personas</title></head><body bgcolor='salmon'>"
    ventana.document.write(content)
    ventana.document.write("<h1>hola</h1>")
    for (let i = 0; i<listpersonas.length; i++){
        ventana.document.write(listpersonas[i].getName())
        ventana.document.write("<br/>")
    }
    content ="</body></html>"
    ventana.document.write(content)
}


