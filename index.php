<?php 
include 'includes/templates/header.php';
?>
    <main>
        <section class="proyectos contenedor" id="proyectos">
            <h2 class="subtitulo">Proyectos</h2>
            <div class="proyectos-populares">
                <div class="proyecto contenedor">
                    <img src="static/img/empty.svg" alt="imagen proyecto">
                    <div class="informacion-proyecto">
                        <a href="" class="link textOscuro enlace-proyecto">Ver mas</a>
                        <a href="#" class="link textOscuro menu-tecnologias">Tecnologias utilizadas:</a>
                        <ul class="tecnologias">

                        </ul><!-- tecnologias -->
                    </div><!-- Informacion Proyecto -->
                </div><!-- proyecto -->
                <div class="proyecto contenedor">
                    <img src="static/img/tienda.png" alt="imagen proyecto">
                    <div class="informacion-proyecto">
                        <a href="https://tienda-virtual-v2.herokuapp.com/" class="link textOscuro enlace-proyecto" target="_blank">Tienda virtual</a>
                        <a href="#" class="link textOscuro menu-tecnologias">Tecnologias utilizadas:</a>
                        <ul class="tecnologias">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JQUERY</li>
                            <li>PHP</li>
                            <li>MYSQL</li>
                        </ul><!-- tecnologias -->
                    </div><!-- Informacion Proyecto -->
                </div><!-- proyecto -->
                <div class="proyecto contenedor">
                    <img src="static/img/empty.svg" alt="imagen proyecto">
                    <div class="informacion-proyecto">
                        <a href="" class="link textOscuro enlace-proyecto">Ver mas</a>
                        <a href="#" class="link textOscuro menu-tecnologias">Tecnologias utilizadas:</a>
                        <ul class="tecnologias">

                        </ul><!-- tecnologias -->
                    </div><!-- Informacion Proyecto -->
                </div><!-- proyecto -->
            </div>
        </section><!-- Proyectos -->

        <section class="conoceme contenedor">
            <h2 class="subtitulo">Un poco sobre mi</h2>
            <div class="datos">
                <div class="img">
                    <img src="static/img/perfil.png" alt="perfil" class="perfil">
                </div>
                <blockquote>Hola. Soy un desarrollador web junior, aun estoy aprendiendo y me encanta poder investigar y desarrollarme en nuevas tecnologias.
                Y voy a dar lo mejor para poder superarme.</blockquote>
            </div><!-- DATOS -->
        </section> <!-- CONOCEME -->

        <section class="contactame contenedor">
            <h2 class="subtitulo">Podes contactarme mediante:</h2>
            <div class="formas_contacto">
                <form action="includes/templates/enviar_correo.php" method="POST">
                    <div class="campo">
                        <label for="nombre">Nombre:</label>
                        <input type="text" class="input" id="nombre" name="nombre">
                    </div>
                    <div class="campo">
                        <label for="numero">Telefono:</label>
                        <input type="number" class="input" id="numero" name="numero">
                    </div>
                    <div class="campo">
                        <label for="email">Email:</label>
                        <input type="email" class="input" id="email" name="email">
                    </div>
                    <div class="campo">
                        <label for="mensaje">Mensaje:</label>
                        <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
                    </div>
                    <input type="submit" value="Enviar" class="btn btn_primary" id="enviar_correo">
                </form>
                <div class="datos-contacto">
                    <div class="dato">
                        <i class="fas fa-phone"></i>
                        <p>+54 1168772521</p>
                    </div>
                    <div class="dato">
                        <i class="fas fa-envelope"></i>
                        <p>pratojuanmanuel2@gmail.com</p>
                    </div>
                </div><!-- datos-contacto -->
            </div>
        </section><!-- CONTACTAME -->
    </main>
<?php
include 'includes/templates/footer.php';
?>