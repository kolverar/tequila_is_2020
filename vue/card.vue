<div class="card" style="width: 18rem">
    <img alt="imagen" class="card-img-top"
         src="https://vignette.wikia.nocookie.net/disney/images/5/54/Pooh-bear-clip-art-winniepooh_1_800_800.jpg/revision/latest?cb=20180730235326&path-prefix=es">
    <div class="card-body">
        <h5 class="card-title">{{tequila.nombre}}</h5>
        <p class="card-text">
        <div v-if="modify">
            Empresa: <input class="ipt" v-bind:value="tequila.empresa"> <br>
            Tipo de agave: <input class="ipt" v-bind:value="tequila.tipoAgave"><br>
            Porcentaje de alcohol: <input class="ipt" v-bind:value="tequila.porcentajeAlcohol"><br>
            Estado de origin: <input class="ipt" v-bind:value="tequila.estadoOrigen"><br>
            Precio: <input class="ipt" v-bind:value="tequila.precio"><br>
            <button type="button" class="btn btn-success" v-on:click="modify = !modify">Aceptar</button>
            <button type="button" class="btn btn-warning" v-on:click="modify = !modify">Cancelar</button>
        </div>
        <div v-else>
            Empresa: {{tequila.empresa}}<br>
            Tipo de agave: {{tequila.tipoAgave}}<br>
            Porcentaje de alcohol: {{tequila.porcentajeAlcohol}}<br>
            Estado de origin: {{tequila.estadoOrigen}}<br>
            Precio: {{tequila.precio}}<br>
            <button type="button" class="btn btn-warning" v-on:click="modify = !modify">Modificar</button>
            <button type="button" class="btn btn-danger" v-on:click="">Eliminar</button>
        </div>
        </p>
    </div>
</div>

