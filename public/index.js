
const apiRest = "https://tequila-is-2020.herokuapp.com/tequila/api/tequila"

Vue.component("tequila", {
  data : function(){
    return {modify: false,
            tequilaCopy: null}
  },
  methods: {
    swapModify: function(tequila) {
      this.tequilaCopy = JSON.parse(JSON.stringify(tequila))  // Clone of object
      this.modify = !this.modify
    },
    modificarTequila: function (tequila) {

      datos = new FormData()
      datos.append("id", tequila.id)


      var myInit = {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(tequila)
      }

      fetch(apiRest + "/" + tequila.id, myInit).then(res => res.json())
          .catch(error => console.log("Error: " + error))
          .then(response => {
            console.log("Success: " + response)
            location.reload()
          })

    },
    eliminarTequila: function (tequila) {

      var myInit = {
        method: 'DELETE'
      }

      fetch(apiRest + "/" + tequila.id, myInit).then(res => res.json())
          .catch(error => console.log("Error: " + error))
          .then(response => {
            console.log("Success: " + response)
            location.reload()
          })

    },

  },
  props: ["tequila"],
  template: `
    <div class="card" style="width: 18rem">
        <img alt="imagen" class="card-img-top" v-bind:src="tequila.imagen">
        <div class="card-body">
            <h5 class="card-title"><b>{{tequila.nombre}}</b></h5>
                <p class="card-text">
                    <div v-if="modify">
                        Nombre: <input class="ipt" v-model="tequilaCopy.nombre"><br>
                        Empresa: <input class="ipt" v-model="tequilaCopy.empresa"> <br>
                        Tipo de agave: <input class="ipt" v-model="tequilaCopy.tipoAgave"><br>
                        % Alcohol: <input class="ipt" v-model="tequilaCopy.porcentajeAlcohol"><br>
                        Estado de origen: <input class="ipt" v-model="tequilaCopy.estadoOrigen"><br>
                        Precio: <input class="ipt" v-model="tequilaCopy.precio"><br>
                        URL Imagen: <input class="ipt" v-model="tequilaCopy.imagen"><br>
                        <button type="button" class="btn btn-success" v-on:click="modificarTequila(tequilaCopy)">Aceptar</button>
                        <button type="button" class="btn btn-warning" v-on:click="swapModify(tequila)">Cancelar</button>
                    </div>
                    <div v-else>
                        <b>Empresa:</b> {{tequila.empresa}}<br>
                        <b>Tipo de agave:</b> {{tequila.tipoAgave}}<br>
                        <b>% Alcohol:</b> {{tequila.porcentajeAlcohol}}<br>
                        <b>Estado de origen:</b> {{tequila.estadoOrigen}}<br>
                        <b>Precio:</b> {{tequila.precio}}<br>
                        <button type="button" class="btn btn-warning" v-on:click="swapModify(tequila)">Modificar</button>
                        <button type="button" class="btn btn-danger" v-on:click="eliminarTequila(tequila)">Eliminar</button>
                    </div>
                </p>
        </div>
    </div>
  `
})

var app = new Vue({

  el: '#tequila',
  data: {
    tequilas: null
  },
  mounted(){
    axios
        .get(apiRest)
        .then((response) => {
          this.tequilas = response.data
          console.log(response.data)
        })
  }
});