# Contexto IA - Sistema de Diseño Compensar Medicina Prepagada

Este documento resume el contexto funcional y tecnico del portal del Sistema de Diseno Compensar, las decisiones tomadas, la arquitectura actual de tokens y estilos, y las reglas que se deben respetar en siguientes iteraciones.

## Objetivo del sistema

El proyecto es el portal del Sistema de Diseno para Compensar Medicina Prepagada. Debe servir como referencia para diseno, desarrollo y QA, y debe permitir que los equipos consulten tokens, fundamentos, componentes, patrones y fragmentos de codigo listos para usar.

El portal debe consumir los mismos tokens exportados desde Figma. La regla principal es que el core debe permanecer puro, es decir, debe representar la salida base del sistema de tokens sin estilos especificos del portal.

Figma de referencia:

https://www.figma.com/design/1zVGMpzqBgiBUqhmfFEAoT/Compensar-v2---Sistema-de-dise%C3%B1o?node-id=3909-20350&t=hwthXZrc9jmkDfnj-1

## Fuentes de tokens

Los tokens exportados desde Figma se entregaron en tres archivos:

- `Dark.tokens.json`
- `High Contrast.tokens.json`
- `Light.tokens.json`

Estos archivos representan los modos de color oficiales:

- Light
- Dark
- High Contrast

La intencion es que los archivos descargables del portal coincidan con Figma: CSS variables, Sass variables, JSON y utilidades deben partir de esos tokens.

## Regla principal de tokens

No se deben crear colores nuevos ni tokens nuevos dentro del core para resolver necesidades visuales del portal.

Si el portal necesita estilos propios, esos estilos deben vivir en una capa separada del core. Esa capa puede consumir los tokens del core, pero no debe contaminar los archivos base que se usaran en futuros proyectos.

Decision tomada:

- `core/` contiene el sistema base.
- `portal/` contiene estilos propios del portal de documentacion.
- `css/core.css` es el CSS compilado del core.
- `css/portal.css` es el CSS compilado exclusivo del portal.
- Los tokens del sistema viven centralizados dentro del core y se publican desde `css/core.css`.

### Decision sobre `css/tokens.css`

`css/tokens.css` ya no es una capa activa del portal. Se retiro de las entradas HTML para evitar una fuente paralela de tokens y asegurar que el portal, la documentacion y los fragmentos descargables se basen en el core.

Regla actual:

- Las paginas del portal cargan `css/core.css` y luego `css/portal.css`.
- Los proyectos externos que quieran consumir solo la base del sistema deben usar `css/core.css`.
- `css/portal.css` es opcional y solo aplica al portal/documentacion.
- No se debe volver a documentar `css/tokens.css` como requisito de consumo.
- Si existe `css/tokens.css` en el repo, debe tratarse como legado o salida antigua de scripts, no como fuente activa.

## Base tecnica del proyecto

El sistema esta construido como un portal web estatico/documental con HTML, JavaScript modular, Sass y CSS Custom Properties. No depende de un framework de aplicacion tipo React, Angular o Vue para renderizar el portal; la navegacion se resuelve con un router ligero propio que carga fragmentos HTML.

Tecnologias principales:

- HTML para las paginas shell y fragmentos de documentacion.
- JavaScript ES Modules para tema, router, busqueda, acordeones, copiado y renderizados auxiliares.
- Sass como lenguaje principal de estilos.
- CSS Custom Properties para exponer tokens consumibles en runtime.
- Bootstrap 5.3.3 como base de estilos web y utilidades compatibles.
- Material Symbols Rounded como sistema visual de iconos del portal.
- Node.js >= 18 para ejecutar scripts y compilacion.
- Dart Sass (`sass`) para compilar `core.scss` y `portal.scss`.

Dependencias actuales:

```json
{
  "sass": "^1.77.0",
  "bootstrap": "^5.3.3"
}
```

### En que nos basamos con Bootstrap

Bootstrap se usa como base tecnica para web/Drupal, no como fuente visual final del sistema. El sistema Compensar define sus propios tokens, colores, tipografia, radius, sombras y componentes, y Bootstrap se adapta a esa capa.

Bootstrap aporta:

- Reboot/reset base del navegador.
- Normalizacion de componentes HTML.
- Grid, helpers y patrones conocidos para implementacion web.
- Variables Sass que pueden sobreescribirse desde `core/abstracts/_variables.scss`.
- Compatibilidad para equipos que ya trabajan con Bootstrap en portales web o Drupal.

Orden real en `core/core.scss`:

1. Abstracts: tokens, funciones, mixins y variables Sass.
2. Variables de Bootstrap: overrides antes de importar Bootstrap.
3. Bootstrap completo desde `node_modules/bootstrap/scss/bootstrap`.
4. Base propia del sistema: theme, reset, tipografia, iconos y accesibilidad.
5. Componentes propios: buttons, inputs, alerts, cards, tables.
6. Utilidades propias: spacing, colors, typography y display.
7. Overrides de vendor: ajustes post-Bootstrap y Google Icons.

Esto significa que Bootstrap queda como capa estructural y de compatibilidad, pero la identidad visual la gobierna Compensar.

Archivo clave:

- `core/abstracts/_variables.scss`: variables Sass para adaptar Bootstrap.
- `core/vendors/_bootstrap-overrides.scss`: ajustes despues de Bootstrap para remapear variables CSS, foco, formularios y estados.
- `core/core.scss`: importa Bootstrap despues de los tokens y variables base.

Regla:

Si un componente usa Bootstrap, debe quedar cubierto por tokens del sistema. No se deben usar colores Bootstrap directos como decision visual final si existe token Compensar equivalente.

### Lenguaje para App

El portal incluye una entrada y documentacion para App Compensar, pero el codigo actual del portal sigue siendo web estatico: HTML, JavaScript y Sass.

Cuando se habla de "App" en esta fase, se refiere a documentacion, fundamentos y posibles variantes para la aplicacion movil, no a que el portal este construido en un lenguaje movil nativo.

Base esperada para App:

- App iOS: Swift / SwiftUI o UIKit, segun el proyecto movil real.
- App Android: Kotlin / Jetpack Compose o XML Views, segun el proyecto movil real.
- Tokens consumibles: JSON como fuente interoperable para transformar a recursos nativos.
- Posible salida iOS: `Color`, `Font`, `CGFloat`, assets o extensiones Swift.
- Posible salida Android: `colors.xml`, `dimens.xml`, theme resources o tokens Compose.

Regla conceptual para App:

Los nombres y valores deben venir de los mismos tokens de Figma. La diferencia esta en el formato de entrega, no en crear otro sistema paralelo.

Ejemplo:

- Web/Drupal consume CSS variables y Sass.
- App puede consumir JSON transformado a recursos nativos.
- El portal documenta ambos, pero el core de tokens sigue siendo unico.

### Lenguaje para Drupal/ZT

Para Drupal/ZT la base tecnica esperada es web:

- HTML/Twig para templates Drupal.
- CSS compilado desde Sass.
- JavaScript progresivo cuando el componente lo requiera.
- Bootstrap 5 como base compatible cuando aplique.
- CSS Custom Properties para temas Light, Dark y High Contrast.

Los fragmentos de codigo descargables para Drupal/ZT deben priorizar:

- HTML semantico.
- Clases del sistema.
- Variables CSS del core.
- Sass opcional para implementaciones internas.
- Evitar HEX directos y estilos inline.

## Arquitectura de estilos

### Core

El core debe ser reusable por otros proyectos. Aqui viven tokens, funciones, mixins, reset, base, vendors, utilidades y componentes base.

Archivos clave:

- `core/core.scss`: entrada principal del core.
- `core/abstracts/_tokens-colors.scss`: tokens Sass de color.
- `core/abstracts/_tokens-spacing.scss`: tokens Sass de espaciado.
- `core/abstracts/_tokens-radius.scss`: tokens Sass de border radius.
- `core/abstracts/_tokens-shadows.scss`: tokens Sass de sombras.
- `core/abstracts/_tokens-typography.scss`: tokens Sass de tipografia.
- `core/abstracts/_functions.scss`: funciones compartidas, incluida `rem()`.
- `core/abstracts/_mixins.scss`: mixins compartidos, incluido `rem-prop()`.
- `core/abstracts/_index.scss`: punto central para exponer abstracts al portal y a otros Sass.

### Portal

El portal tiene una capa Sass propia para documentacion, layout, navegacion, tablas, paginas y patrones visuales que no hacen parte del core.

Entrada principal:

- `portal/portal.scss`

Estructura actual:

- `portal/base/`: reset visual del portal, accesibilidad y variables UI propias del portal.
- `portal/layout/`: header, sidebar, contenedor principal y layout de documentacion.
- `portal/foundations/`: estilos de paginas de fundamentos, especialmente colores, tipografia, espaciado y sombras.
- `portal/components/`: bloques reutilizables del portal como descargas, previews de codigo, formularios, estados y patrones compartidos.
- `portal/pages/`: estilos especificos de paginas/secciones como principios, botones y landing.
- `portal/utilities/`: helpers propios del portal.

Regla:

Cada parcial del portal que necesite tokens o funciones debe usar:

```scss
@use '../../core/abstracts' as *;
```

Con eso puede consumir variables Sass del core, funciones como `rem()` y mixins como `rem-prop()`.

## CSS compilado

El HTML del portal debe cargar estas capas:

```html
<link rel="stylesheet" href="css/core.css">
<link rel="stylesheet" href="css/portal.css">
```

Orden importante:

1. `core.css`: tokens y estilos base reutilizables.
2. `portal.css`: ajustes especificos del portal.

## Compilacion

Scripts actuales esperados:

```bash
npm run build
npm run sass:build
npm run sass:watch
npm run sass:dev
```

La compilacion debe generar:

- `css/core.css` desde `core/core.scss`
- `css/portal.css` desde `portal/portal.scss`

`css/tokens.css` no forma parte del flujo activo de compilacion. Si un script antiguo lo genera, no debe usarse como capa del portal ni como fuente de descarga.

Si aparece `sass: command not found`, se debe instalar dependencias con:

```bash
npm install
```

Para trabajar en modo observador:

```bash
npm run sass:watch
```

## Funcion rem

Se creo una funcion en el core para convertir px a rem con base 16:

```scss
rem(16px); // 1rem
rem(24px); // 1.5rem
rem(16px 24px); // 1rem 1.5rem
```

Tambien existe el mixin:

```scss
@include rem-prop(padding, 16px 24px);
```

La conversion de px a rem se aplico en el Sass del portal. El core generado por tokens no debe alterarse solo por estetica del portal.

Nota importante: dentro de custom properties CSS en Sass se debe interpolar si se usa una funcion Sass:

```scss
--ui-sidebar-w: #{rem(256px)};
```

No usar:

```scss
--ui-sidebar-w: rem(256px);
```

porque Sass puede dejarlo como texto literal invalido en CSS.

## Validaciones realizadas

Se valido que:

- Los colores del core corresponden a la base exportada desde Figma.
- El portal consume variables oficiales del sistema.
- Los estilos propios del portal estan separados de la capa core.
- `portal.scss` importa sus modulos por secciones.
- `core/abstracts/_index.scss` permite consumir colores, tipografia, spacing, radius, shadows, funciones, mixins y variables.
- Las variables Sass de color, border radius y espaciado del core quedan disponibles para el portal.
- La compilacion funciona con `npm run build`.
- Los warnings visibles durante compilacion vienen principalmente de Bootstrap y no del Sass del portal.

## Descargas

La pagina de colores actualmente tiene descargas de:

- CSS
- SCSS
- JSON
- Copia de variables

Las descargas de colores se generan en vivo desde dos fuentes del core:

- `core/abstracts/_tokens-colors.scss`
- `core/utils/_colors.scss`

No se deben mantener copias de descarga dentro de `docs/foundations`. La regla conceptual es que las descargas deben representar el core real, no una version duplicada o generada previamente.

### Descargas de tipografia

La pagina de tipografia sigue el mismo patron de colores: la documentacion muestra la escala y los botones de descarga generan CSS, SCSS y JSON desde las fuentes vivas del core.

Fuentes canonicas:

- `core/abstracts/_tokens-typography.scss`: tamanos, familias, pesos, line-height y letter-spacing base.
- `core/base/_theme.scss`: publica las variables CSS exportables con nomenclatura de Figma, por ejemplo `--heading--h1`, `--body---l`, `--body--2-x-l`, `--comun---boton`.
- `core/base/_typography.scss`: contiene las clases productivas `.mp-*` que se documentan y descargan.

Clases principales que debe descargar el portal:

- Display: `.mp-display-l`, `.mp-display-m`, `.mp-display-xl-mob`, `.mp-display-l-mob`, `.mp-display-m-mob`.
- Headings: `.mp-h1`, `.mp-h2`, `.mp-h3`, `.mp-h4`, `.mp-h5`, `.mp-h6`.
- Texto editorial: `.mp-eyebrow`, `.mp-parrafo-xl`, `.mp-parrafo-l`.
- Body: `.mp-body-2xl`, `.mp-body-xl`, `.mp-body-l`, `.mp-body-m`, `.mp-body-s`, `.mp-body-xs`.
- UI: `.mp-btn`, `.mp-label`, `.mp-hint`, `.mp-placeholder`.

Alias legados como `.mp-paragraph-xl`, `.mp-paragraph-l`, `.mp-button` y `.mp-display-mob` pueden existir por compatibilidad, pero la documentacion y las descargas deben favorecer las clases principales anteriores.

El portal no debe definir variables `.mp-*` propias en `portal.css`. Esas variables viven en `core.css`; el Sass del portal solo debe contener estilos de presentacion de la pagina de documentacion.

## Paginas compartidas y transversales

Se decidio que algunas paginas son transversales porque aplican tanto a Drupal/ZT como a App:

- Colores
- Principios

Estas paginas viven bajo:

- `docs/foundations/colors.html`
- `docs/foundations/principles.html`

La intencion es evitar duplicar contenido cuando el fundamento aplica a varias plataformas.

## Separacion core vs portal

Decision clave:

- `core/` es la capa reusable del sistema de diseno. Representa lo que viene de Figma y lo que debe poder consumirse en otros proyectos.
- `portal/` es la capa visual del portal del sistema de diseno. Existe para documentar, presentar, buscar, copiar, descargar y montar las paginas HTML del sistema.

Relacion entre capas:

- `portal` puede consumir `core`.
- `core` nunca debe depender de `portal`.
- `core.css` debe poder usarse sin `portal.css`.
- `portal.css` necesita `core.css` cargado antes.

Orden esperado en HTML:

```html
<link rel="stylesheet" href="css/core.css">
<link rel="stylesheet" href="css/portal.css">
```

### Que va en core

Debe vivir en `core/`:

- Tokens exportados o derivados directamente de Figma.
- Variables Sass reutilizables.
- CSS Custom Properties del sistema.
- Funciones Sass generales: por ejemplo `rem()`.
- Mixins generales: por ejemplo `rem-prop()`.
- Integracion con Bootstrap.
- Reset/base reutilizable.
- Tipografia base.
- Iconos base.
- Utilidades reutilizables: spacing, colors, typography, display.
- Componentes base que se podran usar en Drupal/ZT, App o futuros proyectos.

Ejemplos correctos:

- `core/abstracts/_tokens-colors.scss`
- `core/abstracts/_tokens-spacing.scss`
- `core/abstracts/_tokens-radius.scss`
- `core/abstracts/_functions.scss`
- `core/abstracts/_mixins.scss`
- `core/utils/_colors.scss`
- `core/components/web/_buttons.scss`

### Que va en portal

Debe vivir en `portal/`:

- Header del portal.
- Sidebar del portal.
- Layout de documentacion.
- Cards, tablas y bloques visuales usados solo para documentar.
- Estilos de paginas HTML del sistema de diseno.
- Estilos de secciones como principios, colores, botones documentados, previews, filtros y buscadores.
- Estados visuales del portal: loading, error, toast, empty state.
- Variables UI propias del portal que apuntan a tokens del core.

Ejemplos correctos:

- `portal/portal.scss`
- `portal/base/_shell.scss`
- `portal/layout/_shell-layout.scss`
- `portal/foundations/_colors-page.scss`
- `portal/components/_downloads.scss`
- `portal/pages/_principles.scss`

### Como portal consume core

Cada parcial de `portal/` que necesite tokens, funciones o mixins del core debe importar los abstracts asi:

```scss
@use '../../core/abstracts' as *;
```

Ejemplo:

```scss
@use '../../core/abstracts' as *;

.portal-card {
  padding: rem(24px);
  border-radius: $border-radius-xs;
  color: var(--use-text-primary);
  background: var(--use-surface-white);
}
```

### Que no se debe hacer

Por eso:

- No agregar estilos de layout del portal en el core.
- No agregar colores nuevos en el core.
- No crear aliases visuales nuevos en core si solo sirven para el portal.
- Si el portal necesita una variable UI propia, debe vivir en portal.
- No crear dependencias desde `core/` hacia `portal/`.
- No duplicar tokens de Figma en archivos del portal.
- No usar HEX directos en portal si existe token o variable del core.
- No modificar tokens generados solo para ajustar una pantalla del portal.

Ejemplo valido en portal:

```scss
--ui-bg: var(--use-background-page);
--ui-surface: var(--use-surface-white);
--ui-border: var(--use-border-default);
```

Esto no crea un token nuevo del sistema; es una capa de presentacion del portal que apunta a tokens existentes.

## UX y estilo visual del portal

El portal debe seguir el estilo mostrado en las referencias:

- Limpio
- Profesional
- Mucho aire
- Buen espaciado
- Cards sobrias
- Navegacion lateral clara
- Header compacto
- Modo claro, oscuro y alto contraste disponibles
- Uso de iconos Material Symbols
- Enfoque en documentacion y uso real, no landing comercial

Se debe evitar:

- Meter estilos inline en los HTML de documentacion.
- Crear colores hardcodeados si existe token.
- Duplicar reglas entre parciales Sass.
- Usar el core para resolver detalles visuales del portal.

## Sidebar y navegacion

El portal tiene navegacion lateral por secciones:

- Inicio
- Fundamentos
- Componentes
- Tokens semanticos
- QA

Colores puede tener subitems como:

- Base
- Producto
- Uso
- Utilidades

Pendiente conceptual solicitado por el usuario:

- Cada pagina debe sentirse independiente.
- Debe existir una seccion nueva de Descargas para centralizar los descargables.
- La estructura de rutas no se debe cambiar sin confirmacion explicita del usuario.

Importante: este documento no cambia la estructura. Solo registra el contexto.

## Pagina de colores

La pagina de colores documenta:

- Colores base
- Colores de producto
- Colores de uso o semanticos
- Utilidades de color

Mejora UX solicitada:

En cada item de color se debe mostrar no solo el token y el valor, sino tambien la clase utilitaria cuando aplique.

Idea recomendada:

- Mantener columna de Token.
- Mantener columnas por modo: Light, Dark, High Contrast.
- Agregar una columna de "Uso en codigo" o "Clase".
- Si es color de fondo, mostrar la clase tipo `.bg-*`.
- Si es color de texto, mostrar la clase tipo `.text-*`.
- Incluir boton de copiar al lado de cada clase.

Esto evita tener zonas separadas de "bg" y "color" cuando la informacion puede estar contextualizada en la misma tabla.

## JavaScript del portal

Archivos principales:

- `js/loader.js`: router SPA ligero que carga fragmentos HTML dentro del contenedor.
- `js/app.js`: funciones compartidas del portal, tema, acordeones, busqueda, render helpers y callbacks post carga.
- `js/theme.js`: manejo de temas.
- `js/tokens.js`: datos de tokens usados por renderizados legacy.
- `js/code-copy.js`: utilidades de copiado.
- `js/ds-bundle.js`: bundle generado o consolidado. Si se modifica JS fuente, revisar si este bundle debe sincronizarse.

Regla:

Si una pagina HTML trae scripts inline, el loader los reinyecta para que funcionen despues de cargar el fragmento.

## Archivos HTML relevantes

Entradas principales:

- `index.html`: selector inicial del portal.
- `drupal.html`: portal Drupal/ZT.
- `app.html`: portal App Compensar.
- `design-system.html`: version/entrada previa o simplificada.

Fragmentos de documentacion:

- `docs/intro.html`
- `docs/app/intro.html`
- `docs/foundations/colors.html`
- `docs/foundations/principles.html`
- `docs/app/fundamentos/typography.html`
- `docs/app/fundamentos/spacing.html`
- `docs/app/fundamentos/border-radius.html`
- `docs/app/fundamentos/layout.html`
- `docs/app/fundamentos/shadows.html`
- `docs/web/components/buttons.html`
- `docs/web/components/inputs.html`
- `docs/web/components/badges.html`
- `docs/web/components/icons-intro.html`
- `docs/web/components/icons-connect.html`
- `docs/web/components/icons-library.html`
- `docs/tokens/tokens-text.html`
- `docs/tokens/tokens-tables.html`
- `docs/qa/checklist.html`

## Reglas para siguientes cambios

1. Antes de tocar estructura de rutas o HTML compartido, confirmar con el usuario.
2. No modificar tokens del core si la necesidad es visual del portal.
3. No crear colores nuevos.
4. Consumir tokens existentes: CSS variables o Sass variables del core.
5. Mover estilos inline de paginas a Sass del portal cuando se ajuste pantalla por pantalla.
6. Mantener `portal/portal.scss` como entrada unica de estilos del portal.
7. Mantener el core compilable y portable.
8. Cuando se cambie Sass, ejecutar build para validar.
9. Si se cambia una fuente de tokens o utilidades, regenerar los archivos descargables correspondientes.
10. Documentar cualquier decision nueva en este archivo.

## Layout System

La pagina `docs/app/fundamentos/layout.html` documenta el sistema de layout y debe quedar como contenido HTML, ejemplos y comportamiento puntual. Sus estilos visuales viven en `portal/foundations/_layout-system.scss`, conectado desde `portal/foundations/_index.scss`.

Reglas aplicadas:

- No usar bloques `<style>` dentro de `layout.html`.
- Los colores de demos, estados, bordes y fondos deben consumir variables oficiales del core, principalmente `--use-*`, `--base-*`, `--product-*` y `--shadow-*`.
- Las transparencias visuales de demos deben usar `color-mix()` sobre tokens del core, no valores HEX ni `rgba()` quemados.
- Los cortes responsivos de la pagina deben usar mixins del core alineados con Bootstrap: `sm-down`, `md-down`, `lg-down` y `xl-down`.
- Los ejemplos deben respetar el gutter base del sistema. La clase `.row` mantiene el gutter oficial; `g-0` solo debe documentarse si se explica explicitamente como excepcion controlada.
- Los valores visuales en Sass deben expresarse en `rem()` usando la funcion del core cuando partan de una medida en px.

## Icon System

Las paginas `docs/web/components/icons-intro.html`, `docs/web/components/icons-connect.html` y `docs/web/components/icons-library.html` documentan la iconografia del sistema. Sus estilos visuales viven en `portal/pages/_icons.scss`, conectado desde `portal/pages/_index.scss`.

Reglas aplicadas:

- No usar bloques `<style>` dentro de las paginas HTML de iconos.
- No usar estilos inline para presentacion visual; usar clases `ic-*` o `sp-access-*` centralizadas en Sass.
- La fuente `CompensarIcons` se declara desde el Sass del portal para vistas de documentacion. La libreria descargable sigue viviendo en `/icons/icons.css` y `/icons/fonts`.
- Los colores del portal deben consumir variables oficiales del core o aliases `--ui-*` que derivan del core.
- Las transparencias de demos deben usar `color-mix()` sobre tokens, no `rgba()` quemado.
- Los valores en px dentro del Sass del portal deben pasar por `rem()`.

## Estado actual de trabajo

Ya se avanzo en:

- Separar estilos del portal en Sass.
- Crear capa `portal/`.
- Conectar portal con abstracts del core.
- Crear funcion `rem()` y mixin `rem-prop()`.
- Convertir px del Sass del portal a rem.
- Quitar estilos inline de colores y principios hacia Sass del portal.
- Quitar estilos inline de layout hacia `portal/foundations/_layout-system.scss`.
- Quitar estilos inline de iconos hacia `portal/pages/_icons.scss`.
- Mantener el core como capa base para consumo futuro.
- Verificar compilacion con `npm run build`.

Pendiente posible:

- Crear seccion central de Descargas.
- Mejorar tabla de colores con columna de clases utilitarias.
- Revisar pagina por pagina para eliminar estilos embebidos restantes.
- Decidir si colores debe seguir como pagina unificada o separarse en paginas independientes.
- Sincronizar `js/ds-bundle.js` si se confirma que es parte activa del build.
