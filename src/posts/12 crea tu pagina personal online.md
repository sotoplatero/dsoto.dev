---
layout: post
title: Publica tu página web en tres pasos.
excerpt: Selector de colores de la paleta de Taildwind con Alpinejs
date: 2021-02-08
tags: post
---

Te lo voy a poner facilito, en solo tres pasos puedes tener tu propia página web, rápido, fácil y gratis y puedes ampliarlo a cualquier página. SOlo necesitas saber un poco de HTML, tener una cuenta en Github y en Netlify. 

### 1. Descarga un Template

Busca [un template](https://templateflip.com/templates/right-resume/) que te guste, descargalo  y descompactalo en una carpeta vacía. Puedes uscar [otro template](https://onepagelove.com/templates/free-templates) que te guste o create tu propio HTML.

### 2. Edita, ponte bonito

En la carpeta creada edita el fichero `index.html`, si eres tan desesperdo como yo solo cambia el nombre y la foto y seguimos con el próximo paso. Luego que lo tengamos publicado podrás seguir editando.

### 3. Publica

[Crea un repo en Github](https://docs.github.com/en/github/getting-started-with-github/create-a-repo) y agregale el contenido de la carpeta que contiene el template.

Ya solo falta ir a Netlify y agregar un nuevo sitio apuntando el repo que creaste.

![Crear nuevo sitio en Netlify](/img/select_repo_from_github.jpg)

Si todo va bien ya tienes tu página online solo que tendrá un nombre aleatorio asignado por Netlify de forma automática, ve a la configuración del sitio en menu **Domain management** / **Custom Domain** y ponle un [nombre bonito](https://cuco-perez.netlifly.app). Este dominio estará debajo de _netlify.app_.

![Crear nuevo sitio en Netlify](/img/change_name_site_netlify.jpg)

🚀 Listo!! ya puedes visitar tu [flamante curriculum](https://cuco-perez.netlifly.app), cuando necesites actualizarlo solo tienes que editar nuevamente el `index.html` y actualizar el repo, nada más. Netlify recibe la notificación desde el Github mediante webhook de que el repo ha cambiado y actualiza el sitio automaticamente.

Si te pareció útil [sígueme](https://twitter.com/sotoplatero) y mantente al tanto que en el próximo post te voy a decir como recibir mensajes de contacto desde tu página.