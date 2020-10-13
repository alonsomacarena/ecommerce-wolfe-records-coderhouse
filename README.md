# Trabajo final React Js CoderHouse Wolfe Records E-commerce

### Project by: Macarena Alonso

## Instrucciones de instalación

``` 
	npm install
	npm run start
```
Abrir navegador en [localhost](http://localhost:3000)

## Features Especiales

### Bootstrap 
El proyecto esta maquetado usando como base la estructura de columnas de Bootstrap. Además se uso para el maquetado del NavBar que incluye un dropdown-item y un navbar-toggler para el uso en Mobile y Tablet.

### Media Queries
El proyecto esta pensado como un Responsive Design. Esto se logró al usar Media Queries para adaptar cuestiones de styling en diferentes dispositivos. 
Las Media Queries usadas son:

 - Mobile: ```@media (min-width: 320px) and (max-width: 480px){}```
 - Tablet: ```@media (min-width: 768px) and (max-width: 1024px){}```

## Consideraciones
### Sección Contacto
La sección contacto esta conformada por un formulario que funciona con la misma metodología que el formulario de Checkout. Toda la información que complete el cliente será almacenada en Firebase en un documento dentro de una colección llamada contactMessages.

### ItemList
El botón del cart que está en cada item no funciona como botón de comprar sino que funciona como link hacia el preview del cart.

### ItemCount / Quantity / Delete Button Cart
El itemCount esta pensado para que el cliente seleccione la cantidad que quiere comprar de cada producto. Por lo tanto, el botón de Delete en el Cart elimina la totalidad del producto. Si desea bajar/subir la cantidad deberá eliminar dicho producto y volver a "comprarlo" desde el Detalle del producto seleccionando nuevamente la cantidad que quiere. 

## Información Extra

#### Api Key Firebase
La Api Key del proyecto en Firebase estará copiada en el cuerpo del chat de la entrega del Proyecto Final de la plataforma de CoderHouse

#### Email Personal
alonsomacarena@gmail.com 